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

  experimental: {
    watcher: 'parcel'
  },
  

  routeRules: {
    '/not-supported/': { 
      ssr: true, 
      prerender: true, 
      robots: false,
      sitemap: false
    },
  },

  $production: {
    routeRules: {
      '/': { ssr: true, prerender: false, swr: process.env.NUXT_HUB_ENV === 'preview' ? 0 : 60 * 60, sitemap: { changefreq: 'monthly', priority: 1.0 } }, 
      '/elementen': { ssr: true, prerender: false, swr: process.env.NUXT_HUB_ENV === 'preview' ? 0 : 60 * 60, robots: false, sitemap: false }, 
      '/colofon': { ssr: true, prerender: false, swr: process.env.NUXT_HUB_ENV === 'preview' ? 0 : 60 * 60, sitemap: { changefreq: 'yearly', priority: 0.3 }  }, 
      '/disclaimer': { ssr: true, prerender: false, swr: process.env.NUXT_HUB_ENV === 'preview' ? 0 : 60 * 60, sitemap: { changefreq: 'yearly', priority: 0.3 }  }, 
    }
  },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-10-21',

  devtools: { enabled: isDev && useDevtools },

  extends: [
    [`github:onderwijsin/onderwijsloket-layer-core#v0.8.10`, { auth: process.env.GIGET_AUTH, install: true }],
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
    indexable: !isPreview,
    notion: {
      token: process.env.NOTION_TOKEN,
    },

    cache: {
      invalidationToken: process.env.CACHE_INVALIDATION_TOKEN
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
    indexable: !isPreview,
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
  linkChecker: {
    enabled: true
  },


  schemaOrg: {
    enabled: true,
    identity: {
      type: 'Organization',
      name: 'Onderwijsloket Rotterdam',
      url: 'https://onderwijsloketrotterdam.nl',
      logo: "https://res.cloudinary.com/onderwijsin/image/upload/w_600,c_scale/regios/rotterdam/logo_onderwijsloketrotterdam_fill_aikiip.png",
      // sameAs: [
      //   "https://www.linkedin.com/company/onderwijs-in",
      // ],
    email: 'info@onderwijsloketrotterdam.nl',
    contactPoints: [
        
        {
          "email" : "info@onderwijsloketrotterdam.nl",
          "contactType" : "Algemene vragen"
        }
    ],
    keywords: ["Onderwijs", "Rotterdam", "Voortgezet onderwijs", "Basisonderwijs", "Onderwijsloket", "Speciaal onderwijs", "MBO", "Lerarentekort", "Middelbaar beroepsonderwijs"],
    address: {
        addressLocality: "Rotterdam",
        addressRegion: "Zuid-Holland",
        addressCountry: 'NL',
    },
    }
  }
})