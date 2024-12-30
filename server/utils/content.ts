// import type { Activity, RawActivity, NotionDatabase, Status } from "../types"
// import { addHours } from 'date-fns';


// export function transformActivities(rawActivities: RawActivity[]): Activity[] {
//   return rawActivities.map((raw): Activity => {
//     // Extract title from rich text array
//     const title = raw.properties.title.title[0]?.plain_text || '';

//     // Extract soort (types) from multi-select
//     const soort = raw.properties.soort.multi_select.map(item => item.name);

//     // Extract type, ensuring it matches the union type
//     const rawType = raw.properties.type.select?.name;
//     const type = rawType === 'offline' || rawType === 'online' ? rawType : null;

//     const status = (raw.properties.status.select?.name || 'draft') as Status

//     // Extract dates
//     const startDateString = raw.properties.event_date.date.start;
//     const endDateString = raw.properties.event_date.date.end;
//     const includeTime = !!raw.properties.event_date.date.start && raw.properties.event_date.date.start.split('T').length > 1;

//     // Handle potential null dates
//     if (!startDateString) {
//       throw new Error(`Activity ${raw.id} has no start date`);
//     }

//     // Create TZDate instances for Amsterdam timezone
//     const startDateTime = includeTime ? addHours(new Date(startDateString), 1).toISOString() : startDateString
//     const endDateTime = endDateString ? addHours(new Date(endDateString), 1).toISOString() : null;


//     // Transform description rich text to HTML
//     const descriptionHtml = raw.properties.description.rich_text.map(textBlock => {
//       let content = textBlock.text.content;
//       const annotations = textBlock.annotations;

//       // Apply annotations
//       if (annotations.bold) content = `<strong>${content}</strong>`;
//       if (annotations.italic) content = `<em>${content}</em>`;
//       if (annotations.strikethrough) content = `<del>${content}</del>`;
//       if (annotations.underline) content = `<u>${content}</u>`;
//       if (annotations.code) content = `<code>${content}</code>`;

//       return content;
//     }).join('');

//     return {
//       id: raw.id,
//       createdTime: new Date(raw.created_time),
//       updatedAt: new Date(raw.last_edited_time),
//       status,
//       title,
//       soort,
//       type,
//       uitgelicht: raw.properties.uitgelicht.checkbox,
//       kosten: raw.properties.kosten.number < 0 ? 0 : raw.properties.kosten.number || 0,
//       includeTime,
//       startDateTime,
//       endDateTime,
//       description: descriptionHtml,
//       url: raw.properties.url.url || null
//     };
//   });
// }

import type { Activity, RawActivity, NotionDatabase, Status, Verhaal, RawVerhaal, ContentType, BaseDatabaseOptions } from "../types"
import { addHours } from 'date-fns'

function transformToHtml(richTextArray: Array<any>): string {
  return richTextArray.map(textBlock => {
    let content = textBlock.text.content
    const annotations = textBlock.annotations

    if (annotations.bold) content = `<strong>${content}</strong>`
    if (annotations.italic) content = `<em>${content}</em>`
    if (annotations.strikethrough) content = `<del>${content}</del>`
    if (annotations.underline) content = `<u>${content}</u>`
    if (annotations.code) content = `<code>${content}</code>`

    return content
  }).join('')
}

function transformActivities(rawActivities: RawActivity[]): Activity[] {
  return rawActivities.map((raw): Activity => {
    const title = raw.properties.title.title[0]?.plain_text || ''
    const soort = raw.properties.soort.multi_select.map(item => item.name)
    const rawType = raw.properties.type.select?.name
    const type = rawType === 'offline' || rawType === 'online' ? rawType : null
    const status = (raw.properties.status.select?.name || 'draft') as Status

    const startDateString = raw.properties.event_date.date.start
    const endDateString = raw.properties.event_date.date.end
    const includeTime = !!startDateString && startDateString.split('T').length > 1

    if (!startDateString) {
      throw new Error(`Activity ${raw.id} has no start date`)
    }

    const startDateTime = includeTime ? addHours(new Date(startDateString), 1).toISOString() : startDateString
    const endDateTime = endDateString ? addHours(new Date(endDateString), 1).toISOString() : null

    return {
      id: raw.id,
      createdTime: new Date(raw.created_time),
      updatedAt: new Date(raw.last_edited_time),
      status,
      title,
      soort,
      type,
      uitgelicht: raw.properties.uitgelicht.checkbox,
      kosten: raw.properties.kosten.number < 0 ? 0 : raw.properties.kosten.number || 0,
      includeTime,
      startDateTime,
      endDateTime,
      description: transformToHtml(raw.properties.description.rich_text),
      url: raw.properties.url.url || null
    }
  })
}

function transformVerhalen(rawVerhalen: RawVerhaal[]): Verhaal[] {
  return rawVerhalen.map((raw): Verhaal => {
    const title = raw.properties.title.title[0]?.plain_text || ''
    const status = (raw.properties.status.select?.name || 'draft') as Status
    const rawType = raw.properties.type.select?.name
    const type = (rawType === 'artikel' || rawType === 'podcast' || rawType === 'video') ? rawType : null

    return {
      id: raw.id,
      createdTime: new Date(raw.created_time),
      updatedAt: new Date(raw.last_edited_time),
      status,
      title,
      soort: raw.properties.sectoren.multi_select.map(item => item.name),
      sortingPriority: parseInt(raw.properties.sorting_priority.select?.name || '0'),
      bron: raw.properties.bron.select?.name || null,
      type,
      duration: raw.properties.duration.number || 0,
      author: raw.properties.naam_auteur.rich_text.length > 0 ? {
        name: raw.properties.naam_auteur.rich_text[0].plain_text,
        description: raw.properties.beschrijving_auteur.rich_text[0]?.plain_text || null
      } : null,
      imagePublicId: raw.properties.image_public_id.rich_text[0]?.plain_text || null,
      url: raw.properties.url.url || null
    }
  })
}

export const getActivities = defineCachedFunction(async (amount = 8) => {
  const databaseId = '161b66e1be698084ae8ee8381d5f184b'
  const today = new Date().toISOString().split('T')[0] as string

  const payload = {
    "filter": {
      "and": [
        {
          "property": "status",
          "select": {
            "equals": 'published'
          }
        },
        {
          "property": "event_date",
          "date": {
            "on_or_after": today
          }
        },
      ]
      
    },
    "sorts": [
      {
        "property": "uitgelicht",
        "direction": "descending"
      },
      {
          "property": "event_date",
          "direction": "ascending"
      }
    ]
  }


  const data = await useNotion(databaseId, payload) as NotionDatabase<RawActivity>

  if (data.results) {
    return transformActivities(data.results)
  }

  return null
}, {
  maxAge:         process.env.MODE === 'dev' ? 1 : 60 * 60 * 12,
  staleMaxAge:    process.env.MODE === 'dev' ? 0 : 60 * 60 * 24 * 3,
  name:           'getActiviteiten',
})


export const getVerhalen = defineCachedFunction(async (amount = 8) => {
  const databaseId = '161b66e1be698089b9a8ce58a4590e42'

  const payload = {
    "filter": {
      "and": [
        {
          "property": "status",
          "select": {
            "equals": 'published'
          }
        },
      ]
      
    },
    "sorts": [
      {
          "property": "sorting_priority",
          "direction": "ascending"
      }
    ]
  }


  const data = await useNotion(databaseId, payload) as NotionDatabase<RawVerhaal>

  if (data.results) {
    return transformVerhalen(data.results)
  }

  return null
}, {
  maxAge:         process.env.MODE === 'dev' ? 1 : 60 * 60 * 12,
  staleMaxAge:    process.env.MODE === 'dev' ? 0 : 60 * 60 * 24 * 3,
  name:           'getVerhalen',
})