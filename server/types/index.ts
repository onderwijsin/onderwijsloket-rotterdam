export type NotionDatabase<T> = {
    object: 'list'
    results: T[]
}

type RichTextField = Array<{
  type: string;
  text: {
    content: string;
    link: null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: null;
}>

type RichText = {
  id: string;
  type: 'rich_text';
  rich_text: RichTextField
}

type Title = {
  id: string;
  type: 'title';
  title: RichTextField
}


type SelectOption = {
  id: string;
  name: string;
  color: string;
}

type MultiSelect = {
  id: string;
  type: 'multi_select';
  multi_select: Array<SelectOption>;
}

type Select = {
  id: string;
  type: 'select';
  select: SelectOption | null;
}

export type Status = 'published' | 'draft' | 'archived'

type StatusField = {
  id: string;
  type: 'select';
  select: {
    id: string;
    name: Status;
    color: string;
  } | null;
}

type DateField = {
  id: string;
  type: 'date';
  date: {
    start: string | null;
    end: string | null;
    time_zone: null;
  };
}

type Checkbox = {
  id: string;
  type: 'checkbox';
  checkbox: boolean;
}

type UrlField = {
  id: string;
  type: 'url';
  url: string | null;
}

type NumberField = {
  id: string;
  type: 'number';
  number: number;
}

type FileField = {
  id: string
  type: 'files'
  files: any[]
}

export type Sector = 'basisschool' | 'middelbare school' | 'speciaal onderwijs' | 'mbo'

type SectorSelect = {
  id: string
  type: 'multi_select'
  multi_select: Array<{
    id: string
    name: Sector
    color: string
  }>
}


type BaseRawRecord<T> = {
    object: string;
    id: string;
    created_time: string;
    last_edited_time: string;
    created_by: {
      object: string;
      id: string;
    };
    last_edited_by: {
      object: string;
      id: string;
    };
    cover: null;
    icon: null;
    parent: {
      type: string;
      database_id: string;
    };
    archived: boolean;
    in_trash: boolean;
    properties: T
    url: string;
    public_url: null;
}

export type RawActivity = BaseRawRecord<{
  soort: MultiSelect;
  button_label: RichText;
  type: Select;
  status: StatusField;
  event_date: DateField;
  uitgelicht: Checkbox;
  description: RichText;
  url: UrlField;
  // kosten: NumberField;
  title: Title;
  sectoren: SectorSelect
  bevoegdheden: MultiSelect
  organizer: RichText
}>


export type Activity = {
  id: string
  createdTime: Date | string
  updatedAt: Date | string

  title: string
  soort: string[]
  type: 'offline' | 'online' | null
  uitgelicht: boolean

  // kosten: number
  sectoren: Sector[]
  bevoegdheden: string[]

  includeTime: boolean
  startDateTime: string
  endDateTime: string | null

  description: string // as html string
  url: string | null
  button_label: string

  status: Status
  organizer: string | null
}


export type Verhaal = {
  id: string
  createdTime: Date
  updatedAt: Date
  status: Status

  title: string
  sectoren: Sector[]
  sortingPriority: number
  bron: string | null
  type: 'artikel' | 'podcast' | 'video' | null

  duration: number

  author: {
    name: string | null
    description: string | null
  } | null

  imagePublicId: string | null

  url: string | null
  
}


export type RawVerhaal = BaseRawRecord<{
  bron: Select
  image: FileField
  type: Select
  status: StatusField
  sectoren: SectorSelect
  image_public_id: RichText
  naam_auteur: RichText
  beschrijving_auteur: RichText
  url: UrlField
  sorting_priority: Select
  duration: NumberField
  title: Title
}>



export type Leraar = {
  id: string
  createdTime: Date
  updatedAt: Date
  status: Status

  naam: string | null
  voornaam: string | null
  sectoren: Sector[]
  sortingPriority: number
  duration: number

  quote: string | null // html string

  imagePublicId: string | null

  url: string | null
  
}


export type RawLeraar = BaseRawRecord<{
  voornaam: RichText
  image: FileField
  status: StatusField
  sectoren: SectorSelect
  image_public_id: RichText
  quote: RichText
  url: UrlField
  sorting_priority: Select
  duration: NumberField
  title: Title
}>


export type RawArtikel = BaseRawRecord<{
  bron: Select
  image: FileField
  status: StatusField
  sectoren: SectorSelect
  image_public_id: RichText
  url: UrlField
  sorting_priority: Select
  title: Title
}>

export type Artikel = {
  id: string
  createdTime: Date
  updatedAt: Date
  status: Status
  title: string
  sectoren: Sector[]
  sortingPriority: number
  bron: string | null
  imagePublicId: string | null
  url: string | null
}