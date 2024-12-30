export type NotionDatabase<T> = {
    object: 'list'
    results: T[]
}

export type Status = 'published' | 'draft' | 'archived'

export type Activity = {
    id: string
    createdTime: Date
    updatedAt: Date

    title: string
    soort: string[]
    type: 'offline' | 'online' | null
    uitgelicht: boolean

    kosten: number

    includeTime: boolean
    startDateTime: string
    endDateTime: string | null

    description: string // as html string
    url: string | null

    status: Status
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
  soort: {
    id: string;
    type: 'multi_select';
    multi_select: Array<{
      id: string;
      name: string;
      color: string;
    }>;
  };
  button_label: {
    id: string;
    type: 'rich_text';
    rich_text: Array<{
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
    }>;
  };
  type: {
    id: string;
    type: 'select';
    select: {
      id: string;
      name: string;
      color: string;
    } | null;
  };
  status: {
    id: string;
    type: 'select';
    select: {
      id: string;
      name: string;
      color: string;
    } | null;
  };
  event_date: {
    id: string;
    type: 'date';
    date: {
      start: string | null;
      end: string | null;
      time_zone: null;
    };
  };
  uitgelicht: {
    id: string;
    type: 'checkbox';
    checkbox: boolean;
  };
  description: {
    id: string;
    type: 'rich_text';
    rich_text: Array<{
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
    }>;
  };
  url: {
    id: string;
    type: 'url';
    url: string;
  };
  kosten: {
    id: string;
    type: 'number';
    number: number;
  };
  title: {
    id: string;
    type: 'title';
    title: Array<{
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
    }>;
  };
}>



export type Sector = 'basisschool' | 'middelbare school' | 'speciaal onderwijs' | 'mbo'

export type Verhaal = {
  id: string
  createdTime: Date
  updatedAt: Date
  status: Status

  title: string
  soort: Sector[]
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


export type ContentType = 'activity' | 'verhaal'

export type BaseDatabaseOptions = {
  amount?: number
  filter?: Record<string, any>
  sorts?: Array<{
    property: string
    direction: 'ascending' | 'descending'
  }>
}

export type RawVerhaal = BaseRawRecord<{
  bron: {
    id: string
    type: 'select'
    select: {
      id: string
      name: string
      color: string
    } | null
  }
  image: {
    id: string
    type: 'files'
    files: any[]
  }
  type: {
    id: string
    type: 'select'
    select: {
      id: string
      name: string
      color: string
    } | null
  }
  status: {
    id: string
    type: 'select'
    select: {
      id: string
      name: string
      color: string
    } | null
  }
  sectoren: {
    id: string
    type: 'multi_select'
    multi_select: Array<{
      id: string
      name: Sector
      color: string
    }>
  }
  image_public_id: {
    id: string
    type: 'rich_text'
    rich_text: Array<{
      type: string
      text: {
        content: string
        link: null
      }
      annotations: Record<string, boolean>
      plain_text: string
      href: null
    }>
  }
  naam_auteur: {
    id: string
    type: 'rich_text'
    rich_text: Array<{
      type: string
      text: {
        content: string
        link: null
      }
      annotations: Record<string, boolean>
      plain_text: string
      href: null
    }>
  }
  beschrijving_auteur: {
    id: string
    type: 'rich_text'
    rich_text: Array<{
      type: string
      text: {
        content: string
        link: null
      }
      annotations: Record<string, boolean>
      plain_text: string
      href: null
    }>
  }
  url: {
    id: string
    type: 'url'
    url: string
  }
  sorting_priority: {
    id: string
    type: 'select'
    select: {
      id: string
      name: string
      color: string
    }
  }
  duration: {
    id: string
    type: 'number'
    number: number
  }
  title: {
    id: string
    type: 'title'
    title: Array<{
      type: string
      text: {
        content: string
        link: null
      }
      annotations: Record<string, boolean>
      plain_text: string
      href: null
    }>
  }
}>
