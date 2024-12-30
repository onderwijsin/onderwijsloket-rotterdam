const useDevtools = process.env.USE_DEVTOOLS === 'true'

import environment from "./utils/environment"
const {
  mode,
  isDev,
  isDebug,
  isDemo,
  isStaging,
  isPreview,
  isProd,
  isProdEnv
} = environment()

import { version } from './package.json'


export default defineNuxtConfig({

  

  routeRules: {
    '/not-supported/': { 
      ssr: true, 
      prerender: true, 
      // index: false,
    },
  },

  $production: {
    routeRules: {
      '/': { ssr: true, prerender: false, swr: 60 * 60 }, 
      '/elementen': { ssr: true, prerender: false, swr: 60 * 60 }, 
      '/api/**': { cache: false }, 
    }
  },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-10-21',

  devtools: { enabled: isDev && useDevtools },

  extends: [
    [`github:onderwijsin/onderwijsloket-layer-core#v0.7.5`, { auth: process.env.GIGET_AUTH, install: true }],
    // [`github:onderwijsin/onderwijsloket-layer-navigator#v${navigatorLayerVersion}`, { auth: process.env.GIGET_AUTH, install: true }],
  ],

  nitro: {
    // minify: isDebug,
    experimental: {
      openAPI: true
    },
    prerender: {
      crawlLinks: false,
      failOnError: false, 
    }
  },

  ssr: true,

  alias: {
    'types': './types',
    'assets': './app/assets'
  },

  imports: {
    // Auto-import pinia stores defined in `~/stores`
    dirs: ['store']
  },

  components: [
    { path: '~/components', pathPrefix: false, },
  ],


  hub: {
    analytics: true,
    cache: true,
  },

  modules: [
    "@nuxthub/core", 
  ],

  fonts: {
    defaults: {
      weights: [400, 700, 900],
    },
    families: [
      { name: 'Akrobat', provider: 'local' },
    ]
  },

  ui: {
    safelistColors: ['primary', 'main']
  },


  runtimeConfig: {
    // The private keys which are only available server-side
    indexable: isProd,
    notion: {
      token: process.env.NOTION_TOKEN,
    },
    
    // Keys within public are also exposed client-side
    public: {
      release: 'onderwijsloket-rotterdam-' + version
    }
  },


  appConfig: {
    // you don't need to include this: only for testing purposes
    buildDate: new Date().toISOString(),
  },

  site: {
    name: 'Onderwijsloket Rotterdam',
    description: 'Ontdek jouw mogelijkheden in het Rotterdamse onderwijs. Met een actueel overzicht van vacatures, oriëntatie-activiteiten en informatie over het vinden van een werkplek of opleiding.',
    indexable: isProd,
    robots: isProd
  },

  tailwindcss: {
    config: {
      content: [
        './app/assets/components.ts'
      ]
    }
  },

  // NOTE enabling ogImage results in
  // RollupError: virtual:#nitro-internal-virtual/server-handlers-meta (29:7): Identifier "_lAkTgSMeta" has already been declared                nitro 11:49:34 AM

  ogImage: {
    enabled: false
  },
  sitemap: {
    enabled: true
  },
  robots: {
    enabled: true
  },
  seo: { // seo utils
    enabled: true
  },
  schemaOrg: {
    enabled: true
  },
  linkChecker: {
    enabled: true
  },


  // schemaOrg: {
  //   identity: {
  //     type: 'Organization',
  //     name: 'Stichting Onderwijs in',
  //     url: 'https://onderwijs.in',
  //     logo: "https://res.cloudinary.com/onderwijsin/image/upload/w_600,c_scale/brand/OnderwijsIn_VolledigeLogo_Oranje_ljapwt.png",
  //     sameAs: [
  //       "https://www.linkedin.com/company/onderwijs-in",
  //   ],
  //   email: 'hallo@onderwijs.in',
  //   contactPoints: [
  //       {
  //         "telephone" : "(031) 824 01 04",
  //         "contactType" : "Algemene vragen"
  //       },
  //       {
  //         "email" : "hallo@onderwijs.in",
  //         "contactType" : "Algemene vragen"
  //       }
  //   ],
  //   keywords: ["Onderwijs", "Traineeship", "Voortgezet onderwijs", "Basisonderwijs", "Onderwijsloket", "Klatreis", "Werving", "Lerarentekort", "Geschiktheidsonderszoek", "Adviescentrum", "Informatiecentrum"],
  //   address: {
  //       addressLocality: "Ede",
  //       addressRegion: "Gelderland",
  //       postalCode: "6717HK",
  //       streetAddress: "Johannes Bosboomlaan 50",
  //       addressCountry: 'NL',
  //   },
  //   numberOfEmployees: 16,
  //   nonprofitStatus: 'NonprofitSBBI',
  //   subOrganization: [
  //     {
  //       type: 'Organization',
  //       name: 'Trainees in onderwijs',
  //       url: 'https://traineesinonderwijs.nl',
  //       logo: "https://res.cloudinary.com/onderwijsin/image/upload/w_600,c_scale/brand/logo_traineesindonderwijs_f2kwvx_t2wg0f.png",
  //     },
  //     {
  //       type: 'Organization',
  //       name: 'Onderwijsloket',
  //       url: 'https://onderwijsloket.com',
  //       logo: "https://res.cloudinary.com/onderwijsin/image/upload/w_600,c_scale/brand/logo_onderwijsloket_by0ejs.png",
  //     }
  //   ]
  //   }
  // },
})