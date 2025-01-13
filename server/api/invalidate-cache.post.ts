const keys = [
  'nitro:functions:getActiviteiten',
  'nitro:functions:getArtikelen',
  'nitro:functions:getLeraren',
  'nitro:functions:getVerhalen',
  'nitro:handlers:activiteiten',
  'nitro:handlers:artikelen',
  'nitro:handlers:leraren',
  'nitro:handlers:verhalen',
  'nitro:routes'
]

export default defineEventHandler(async (event) => {
  const cache = await useStorage('cache').getKeys()

  const keysToDelete = cache.filter(key => {
    return keys.some(k => key.includes(k))
  })

  for await (const key of keysToDelete) {
    await useStorage('cache').removeItem(key, { removeMeta: true });
  }

  const res = await Promise.all([
    await $fetch('/api/activiteiten'),
    await $fetch('/api/artikelen'),
    await $fetch('/api/leraren'),
    await $fetch('/api/verhalen')
  ])


  return {
    message: `Cache invalidated. New cache was created for ${res.length} data sources`,
    keys: keysToDelete,
  }
})
