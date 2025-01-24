

export default defineEventHandler(async (event) => {

  const token = getHeader(event, 'token')
  const { keys } = getQuery(event)
  

  if (!token || token !== useRuntimeConfig().cache.invalidationToken) { 
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: 'Invalid token'
    })
  }

  let cacheKeys: string[] = typeof keys === 'string' ? keys.split(',') : Array.isArray(keys) ? keys : []
  
  if (!cacheKeys?.length) {
    cacheKeys = [
      'nitro:routes'
    ]
  } 
  
  const cache = await useStorage('cache').getKeys()

  

  const keysToDelete = cache.filter(key => {
    return cacheKeys.some(k => key.includes(k))
  })

  for await (const key of keysToDelete) {
    await useStorage('cache').removeItem(key, { removeMeta: true });
  }


  return {
    message: `Cache invalidated.`,
    keys: keysToDelete,
  }
})
