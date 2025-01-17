import { footerMenu, mainMenu, socialMenu, errorSlides } from "./assets/config"
import * as components from './assets/components'

export default defineAppConfig({
  settings: {
    meta: {
      image: 'https://res.cloudinary.com/onderwijsin/image/upload/c_scale,w_1200,q_80/regios/rotterdam/meta_image_onderwijsloketrotterdam_jchsfs.png',
      socials: () => [],
      icon: {
        favicon: "regios/rotterdam/favicon_ndwh73",
        appIcon: "regios/rotterdam/appicon_hlmopaa",
        maskableAppIcon: "regios/rotterdam/maskable_u9ifyb",
      }
    },
    ui: {
      useDarkMode: true,
      useDyslexicFont: true,
      useGlobalSiteSearch: false,

      content: {
        errors: {
          300: {
            title: "Omleiding",
            prettyTitle: "Een ogenblik terwijl we je omleiden",
            description: "Je wordt naar een nieuwe bestemming toegestuurd ✨"
          },
          400: {
            title: 'Er ging iets mis',
            prettyTitle: "Er ging iets mis met je verzoek",
            description: "Je kunt het het beste even opnieuw proberen."
          },
          404: {
            title: "Pagina niet gevonden",
            prettyTitle: "Er zijn minstens 404 dingen die we je over het onderwijs kunnen vertellen",
            description: "Maar die vind je hier niet 🤷. Probeer het nog eens via de homepage of neem contact met ons op."
          },
          500: {
            title: "Er ging iets mis",
            prettyTitle: "Er ging iets mis...",
            description: "Er ging iets mis op onze server. Probeer het (later) opnieuw"
          },
        },
        errorSlides: () => errorSlides
      }
    },

    header : {
      menu: () => []
    },
    footer: {
      menu: () => []
    },
    algolia: {
      enable: true
    },
    cloudinary: {
      cloudName: 'onderwijsin',
      projectFolder: 'regios/rotterdam',
    },

    savvycal: {
      app: 'onderwijsloket-rotterdam',
      bookingId: 'plan-een-adviesgesprek',
      bookingLink: 'onderwijsloket/plan-een-adviesgesprek',
      bookingUrl: 'https://savvycal.com/onderwijsloket/plan-een-adviesgesprek',
      questions: {
        0: "Onderwijsloket Rotterdam"
      }
    },

    feedback: {
      enabled: false,
    },
    privacy: {
      disablePolicyLink: true,
      policyUrl: null, // Not used! should make this prop optional in core layer
      notice: {
        title: '🍪 Deze site gebruikt cookies',
        description: 'We zetten alleen noodzakelijke en funtionele cookies in om deze site te laten werken.',
        timeout: 12000
      },
      cookies: (val) => [
        ...val,
        {
          name: 'infobanner', 
          maxAge: 60 * 60 * 24 * 365,
          party: 'first',
          type: 'functioneel',
          secure: true,
          description: 'Een cookie waarmee we registreren of je de infobanner hebt weggeklikt, zodat je deze bij een volgend bezoek niet opnieuw te zien krijgt.'
        },
        {
          name: '_mc_key', 
          maxAge: 'sessie',
          party: 'third',
          type: 'noodzakelijk',
          secure: true,
          description: 'Een sessie cookie van SavvyCal, de dienst waarmee je afspraken met het Onderwijsloket in kunt plannen. Met deze cookie kan SavvyCal ingelogde gebruikers herkennen. Wordt alleen geplaatst als je gebruik maakt van het inplansysteem.'
        },
        {
          name: 'XSRF-TOKEN', 
          maxAge: 'sessie',
          party: 'third',
          type: 'noodzakelijk',
          secure: true,
          description: 'Een sessie cookie van SavvyCal om cross site request forgeries tegen te gaan. Wordt alleen geplaatst wanneer je gebruik maakt van ons inplansysteem.'
        },
        {
          name: 'csrf_token', 
          maxAge: 'sessie',
          party: 'third',
          type: 'noodzakelijk',
          secure: true,
          description: 'Een sessie cookie van SavvyCal om cross site request forgeries tegen te gaan. Wordt alleen geplaatst wanneer je gebruik maakt van ons inplansysteem.'
        },
      ]
    }
  },

  ui: {
    button: {
      rounded: 'rounded-none',
      padding: {
        lg: 'px-3.5 py-2.5',
        xl: 'px-3.5 py-2.5',
        '2xl': 'px-4 py-3'
      }
    },
    buttonGroup: {
      wrapper: { horizontal: 'flex-wrap gap-y-2' },
      rounded: 'rounded-none',
      shadow: 'shadow-none'
    },
    container: {
      constrained: 'max-w-[1480px]'
    },
    table: {
      th: {
        base: 'whitespace-nowrap',
        padding: 'py-5'
      }
    },
    badge: {
      font: 'font-bold',
      variant: {
        solid: 'bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900',
      },
      rounded: 'rounded-none'
    },
    card: {
      rounded: 'rounded-none',
      header: {
        padding: 'pt-4 px-4 sm:px-4 pb-0'
      },
      body: {
        padding: 'px-4 sm:px-4'
      },
      footer: {
        padding: 'pt-0 px-4 sm:px-4 pb-4'
      }
    },
    accordion: {
      item: {
        base: 'leading-loose'
      }
    }
  },
  components: {
    ...components
  }
})
