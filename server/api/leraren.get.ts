import { getLeraren } from "../utils/content"

export default defineCachedEventHandler(async (event) => {

  const { per_page } = getQuery(event)
  const data = await getLeraren(!!per_page ? parseInt(per_page.toString()) : 6)
  
  if (!data) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Error',
      message: 'Could not fetch Notion Database'
    })
  }

  return data
}, {
  maxAge:         process.env.MODE === 'dev' ? 1 : 60 * 60 * 12,
  staleMaxAge:    process.env.MODE === 'dev' ? 0 : 60 * 60 * 24 * 3,
  name:           'leraren',
})
