# Onderwijsloket Rotterdam

This is an open source single page application for Onderwijsloket Rotterdam. It is a Nuxt 3 app, using Nuxt UI and Tailwind CSS. It is meant to be deployed as a static app on edge runtimes (we use Cloudflare Workers platform); we have been doing so with [NuxtHub](https://hub.nuxt.com/).

The app is an extension of ``onderwijsloket-core``; a Nuxt 3 layer containing common config for Onderwijsloket apps, UI components and composables and other reusable logic. Currently ``onderwijsloket-core`` is in private pre-release, and thus this repo cannot be cloned without a Github Access token that has read permissions for the ``onderwijsloket-core`` repo.

> if you found a 🐛 bug, have some 💬 feedback or discovered a 🤫 vulnerability, please contact us at [hallo@onderwijs.in](hallo@onderwijs.in)

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Creating a .env file

The ``onderwijlsoket-core`` layer relies heavily on the configuration you provide from your .env file. You'll need to provide at least the following values:

```sh
# the (primary) domain the app is hosted at
FRONT_END_DOMAIN=<string>
# the domain that's used for Plausible (usually the same as the primary domain)
PLAUSIBLE_DOMAIN=<string>

# Set the 'mode' the app is used in. Can be dev | staging | preview | prod
MODE=dev

# Enable Nuxt DevTools
USE_DEVTOOLS=true

ONDERWIJSIN_API="https://api.onderwijs.in/onderwijsloket/v1"

# Provide your Api Key for Onderwijs in API. Your tenant should have access to at least Kennisbank, Navigator, Search, Routes and Media endpoints.
# more info can be found at https://api.onderwijs.in/onderwijsloket/v1/docs
ONDERWIJSIN_API_KEY=<string>

# Provide a personal Github Access Token with (at minimum) read permissions for Onderwijsloket Core Package
GIGET_AUTH=<string>

## Set node version
NODE_VERSION=20.9.0

# Onderwijsloket Core uses Algolia client. See Onderwijs in API docs for more info: https://api.onderwijs.in/onderwijsloket/v1/docs/tag/search
ALGOLIA_APPLICATION_ID=<string>
ALGOLIA_PUBLIC_SEARCH_API_KEY=<string>

# Provide GCP credentials with access to Maps Javascript API, and create a Map Configuration and provide its ID
GMAPS_KEY=<string>
BASE_GMAP_ID=<string>

# Sentry is used for application monitoring, both on server and client
SENTRY_DSN=<string>
SENTRY_ORG=<string>
SENTRY_PROJECT=<string>
SENTRY_AUTH_TOKEN=<string>


# Favicons and other icons are automatically generated in different sizes and formats. Cloudinary is used to achieve this.
# Therefore, you need to add the CLD cloudname where your icons are hosted, and provide the public IDs for three icon variations
# IF you do NOT want to use Cloudinary, you'll need to completely override app.head.link property in nuxt.config.ts
ICON_CLD_CLOUD="onderwijsin"
FAVICON="regios/rotterdam/icon_2x_obif7y"
APPICON="regios/rotterdam/appicon_2x_jyutea"
MASKABLE_ICON="regios/rotterdam/maskable_2x_xakodk"

```

If you are in need of access tokens, or have any questions about auth tokens listed above, please contact us at [hallo@onderwijs.in](mailto:hallo@onderwijs.in)

## Development

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

### Workers environment

To preview and debug the application in a CloudFlare Workers environment:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxthub/core'],
  nitro: {
    minify: false
  }
})
```

```bash
npx nuxt build
npx nuxthub preview
```

More info: https://hub.nuxt.com/docs/recipes/debug
