import type { 
  Activity, 
  RawActivity, 
  NotionDatabase, 
  Status, 
  Verhaal, 
  RawVerhaal, 
  RawLeraar, 
  Leraar,
  Sector,
  RawArtikel,
  Artikel
} from "../types"


// Common Types

interface BaseTransformedItem {
  id: string
  createdTime: Date
  updatedAt: Date
  status: Status
}

// Rich Text Transform
function transformToHtml(richTextArray: Array<any>): string {
  const annotationMap = {
    bold: 'strong',
    italic: 'em',
    strikethrough: 'del',
    underline: 'u',
    code: 'code'
  } as const

  return richTextArray.map(textBlock => {
    let content = textBlock.text.content
    
    Object.entries(annotationMap).forEach(([key, tag]) => {
      if (textBlock.annotations[key]) {
        content = `<${tag}>${content}</${tag}>`
      }
    })

    return content
  }).join('')
}

// Helper Functions
function getPlainText(richText: any[]): string {
  return richText[0]?.plain_text || ''
}

function getMultiSelect(property: { multi_select: Array<{ name: string }> }): string[] {
  return property.multi_select.map(item => item.name)
}

function transformBaseProperties(raw: any): BaseTransformedItem {
  return {
    id: raw.id,
    createdTime: new Date(raw.created_time),
    updatedAt: new Date(raw.last_edited_time),
    status: (raw.properties.status.select?.name || 'draft') as Status
  }
}

// Main Transformers
function transformActivities(rawData: RawActivity[]): Activity[] {
  return rawData.map((raw): Activity => {
    const startDateString = raw.properties.event_date.date.start
    const endDateString = raw.properties.event_date.date.end
    const includeTime = !!startDateString?.includes('T')

    if (!startDateString) {
      throw new Error(`Activity ${raw.id} has no start date`)
    }

    const startDateTime = includeTime 
      ? new Date(startDateString).toISOString() 
      : startDateString
    const endDateTime = endDateString 
      ? new Date(endDateString).toISOString() 
      : null

    return {
      ...transformBaseProperties(raw),
      title: getPlainText(raw.properties.title.title),
      soort: getMultiSelect(raw.properties.soort),
      type: (['op locatie', 'online'] as const).includes(raw.properties.type.select?.name as any) 
        ? raw.properties.type.select?.name as 'op locatie' | 'online' 
        : null,
      uitgelicht: raw.properties.uitgelicht.checkbox,
      // kosten: Math.max(0, raw.properties.kosten.number || 0),
      bevoegdheden: getMultiSelect(raw.properties.bevoegdheden),
      includeTime,
      startDateTime,
      endDateTime,
      description: transformToHtml(raw.properties.description.rich_text),
      url: raw.properties.url.url || null,
      button_label: getPlainText(raw.properties.button_label.rich_text),
      organizer: getPlainText(raw.properties.organizer.rich_text)
    }
  })
}

function transformVerhalen(rawData: RawVerhaal[]): Verhaal[] {
  return rawData.map((raw): Verhaal => {
    const validTypes = ['artikel', 'podcast', 'video'] as const
    const rawType = raw.properties.type.select?.name

    return {
      ...transformBaseProperties(raw),
      title: getPlainText(raw.properties.title.title),
      sectoren: getMultiSelect(raw.properties.sectoren) as Sector[],
      sortingPriority: parseInt(raw.properties.sorting_priority.select?.name || '0'),
      bron: raw.properties.bron.select?.name || null,
      type: validTypes.includes(rawType as any) ? rawType as typeof validTypes[number] : null,
      duration: raw.properties.duration.number || 0,
      author: raw.properties.naam_auteur.rich_text.length > 0 ? {
        name: getPlainText(raw.properties.naam_auteur.rich_text),
        description: getPlainText(raw.properties.beschrijving_auteur.rich_text)
      } : null,
      imagePublicId: getPlainText(raw.properties.image_public_id.rich_text),
      url: raw.properties.url.url || null
    }
  })
}

function transformLeraren(rawData: RawLeraar[]): Leraar[] {
  return rawData.map((raw): Leraar => ({
    ...transformBaseProperties(raw),
    naam: getPlainText(raw.properties.title.title),
    voornaam: getPlainText(raw.properties.voornaam.rich_text),
    sectoren: getMultiSelect(raw.properties.sectoren) as Sector[],
    sortingPriority: parseInt(raw.properties.sorting_priority.select?.name || '0'),
    duration: raw.properties.duration.number || 0,
    quote: getPlainText(raw.properties.quote.rich_text),
    imagePublicId: getPlainText(raw.properties.image_public_id.rich_text),
    url: raw.properties.url.url || null
  }))
}

function transformArtikelen(rawData: RawArtikel[]): Artikel[] {
  return rawData.map((raw): Artikel => ({
      ...transformBaseProperties(raw),
      title: getPlainText(raw.properties.title.title),
      sectoren: getMultiSelect(raw.properties.sectoren) as Sector[],
      sortingPriority: parseInt(raw.properties.sorting_priority.select?.name || '0'),
      bron: raw.properties.bron.select?.name || null,
      imagePublicId: getPlainText(raw.properties.image_public_id.rich_text),
      url: raw.properties.url.url || null
    })
  )
}

// Database Queries
const createNotionFilters = (additionalFilters: any[] = []) => ({
  filter: {
    and: [
      {
        property: "status",
        select: {
          equals: 'published'
        }
      },
      ...additionalFilters
    ]
  }
})

const createPageSize = (amount: number) => ({ page_size: amount })

const cacheConfig = {
  maxAge: process.env.MODE === 'dev' ? 1 : 60 * 60 * 12,
  staleMaxAge: process.env.MODE === 'dev' ? 0 : 60 * 60 * 24 * 3
}

export const getActivities = defineCachedFunction(async (amount = 8) => {
  const today = new Date().toISOString().split('T')[0]
  
  const payload = {
    ...createNotionFilters([{
      property: "event_date",
      date: {
        on_or_after: today
      }
    }]),
    ...createPageSize(amount),
    sorts: [
      { property: "uitgelicht", direction: "descending" },
      { property: "event_date", direction: "ascending" }
    ]
  }

  const data = await useNotion('161b66e1be698084ae8ee8381d5f184b', payload) as NotionDatabase<RawActivity>
  return data?.results ? transformActivities(data.results) : null
}, {
  ...cacheConfig,
  name: 'getActiviteiten'
})

export const getVerhalen = defineCachedFunction(async (amount = 8) => {
  const payload = {
    ...createNotionFilters(),
    ...createPageSize(amount),
    sorts: [{ property: "sorting_priority", direction: "ascending" }]
  }

  const data = await useNotion('161b66e1be698089b9a8ce58a4590e42', payload) as NotionDatabase<RawVerhaal>
  return data?.results ? transformVerhalen(data.results) : null
}, {
  ...cacheConfig,
  name: 'getVerhalen'
})

export const getLeraren = defineCachedFunction(async (amount = 5) => {
  const payload = {
    ...createNotionFilters(),
    ...createPageSize(amount),
    sorts: [{ property: "sorting_priority", direction: "ascending" }]
  }

  const data = await useNotion('161b66e1be6980ecaadcefe40bc68001', payload) as NotionDatabase<RawLeraar>
  return data?.results ? transformLeraren(data.results) : null
}, {
  ...cacheConfig,
  name: 'getLeraren'
})


export const getArtikelen = defineCachedFunction(async (amount = 8) => {
  const payload = {
    ...createNotionFilters(),
    ...createPageSize(amount),
    sorts: [{ property: "sorting_priority", direction: "ascending" }]
  }

  const data = await useNotion('16db66e1be6980fa94c6f295a9ae16a9', payload) as NotionDatabase<RawArtikel>
  return data?.results ? transformArtikelen(data.results) : null
}, {
  ...cacheConfig,
  name: 'getArtikelen'
})