declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NOTION_TOKEN: string
        CACHE_INVALIDATION_TOKEN: string
      }
    }
}