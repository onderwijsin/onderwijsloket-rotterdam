export type AlgoliaFacets = Record<string, Record<string, number>>

export interface GeolocPoint {
    _geoloc?: {
        lat: number;
        lng: number;
    }
}

export interface GeolocArray {
    _geoloc?: {
        lat: number;
        lng: number;
    }[]
    _geoloc_center?: {
        lat: number;
        lng: number;
    }
}

export type Geoloc = GeolocArray | GeolocPoint

export type GeoSearchOptions = {
    aroundLatLng: string
    aroundRadius?: number,
    getRankingInfo: true
}

interface AlgoliaRelatedOpleiding {
    id: number;
    name: string;
    url: string;
}

export interface AlgoliaRelatedOnderwijsinstelling {
    id: number;
    imageUrl: string;
    name: string;
    url: string;
}



export type AlgoliaOnderwijsInstelling = {
    adres: string;
    bevoegdheden: string[];
    createdAt: string;
    description: string;
    email: string;
    externalId: string;
    id: number;
    imageUrl: string;
    lat: number;
    lng: number;
    name: string;
    onderwijsvormen: string[];
    opleidingen: AlgoliaRelatedOpleiding[];
    path: string;
    phone: string;
    plaats: string;
    postcode: string;
    profileUrl: string;
    slug: string;
    soort: string[];
    status: string;
    title: string;
    updatedAt: string;
    url: string;
} & Geoloc

export type AlgoliaRegioloket = {
    adres: string;
    body: string;
    createdAt: string;
    email: string;
    externalId: string;
    id: number;
    imageUrl: string;
    lat: number;
    lng: number;
    name: string;
    path: string;
    phone: string;
    plaats: string;
    postcode: string;
    profileUrl: string;
    provincies: string[];
    regio: string;
    sectoren: string[];
    slug: string;
    status: string;
    title: string;
    updatedAt: string;
    url: string;
} & Geoloc

export type AlgoliaOpleiding = {
    adres: string;
    global_index_id: number
    bevoegdheden: string[];
    body: string | null;
    createdAt: string;
    email: string;
    externalId: string;
    id: number;
    imageUrl: string;
    lat: number;
    lng: number;
    name: string;
    contentType?: 'opleiding'
    onderwijsinstellingen: AlgoliaRelatedOnderwijsinstelling[];
    onderwijsvormen: string[];
    path: string;
    phone: string;
    plaats: string;
    postcode: string;
    profileUrl: string;
    schoolvakken: string[];
    slug: string;
    status: string;
    title: string;
    updatedAt: string;
    url: string;
} & Geoloc
  