interface NotionResponse {
  // Add specific response type based on your needs
  [key: string]: any
}

interface NotionRequestConfig {
  token: string
}

const delay = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms))

export const createNotionRequest = async (
  path: string,
  token: string,
  data?: Record<string, any>
): Promise<NotionResponse> => {
  const response = await $fetch<NotionResponse>(`https://api.notion.com/v1/${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Notion-Version': '2022-06-28'
    },
    method: 'POST',
    body: data
  })

  return response
}

const fetchNotion = async (
  id: string,
  config: NotionRequestConfig,
  data?: Record<string, any>
): Promise<NotionResponse | null> => {
  try {
    const path = `databases/${id}/query`
    return await createNotionRequest(path, config.token, data)
  } catch (error) {
    console.error('Failed to fetch from Notion:', error)
    return null
  }
}

async function retryFetchNotion(
  id: string,
  config: NotionRequestConfig,
  options: {
    maxRetries?: number,
    currentTry?: number,
    payload?: Record<string, any>
  } = {}
): Promise<NotionResponse | null> {
  const {
    maxRetries = 5,
    currentTry = 0,
    payload
  } = options

  const result = await fetchNotion(id, config, payload)

  if (!result || Object.keys(result).length === 0) {
    if (currentTry < maxRetries) {
      console.log(`Retry attempt ${currentTry + 1} of ${maxRetries}`)
      await delay(currentTry * 500)
      
      return retryFetchNotion(id, config, {
        maxRetries,
        currentTry: currentTry + 1,
        payload
      })
    }
    
    console.log(`No result after ${maxRetries} attempts`)
    return null
  }

  return result
}

export const useNotion = async (
  id: string,
  data?: Record<string, any>
): Promise<NotionResponse | null> => {
  try {
    const config = useRuntimeConfig()
    
    if (!config.notion?.token) {
      throw new Error('Notion token not configured')
    }

    return await retryFetchNotion(id, {
      token: config.notion.token
    }, {
      payload: data
    })
  } catch (error) {
    console.error('Error in useNotion:', error)
    return null
  }
}

