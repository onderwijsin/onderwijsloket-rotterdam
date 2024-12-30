function delay(t: number) {
  return new Promise(resolve => {
    setTimeout(resolve, t);
  });
}


async function retryFetchNotion(
  id: string,
  max_retries = 5,
  current_try = 0,
  payload?: Record<string, any>
) {
  
  let result = await fetchNotion(id, payload)

  if (!result || Object.values(result).length === 0) {
    if (current_try < max_retries) {
      console.log("No result. Retrying");
      await delay(current_try * 500).then(async() => {
        result = await retryFetchNotion(id, max_retries, current_try + 1);
        console.log("Found result with retry");
      })
    } else {
      console.log("No result... Giving up after 5 tries.");
    }
  }
  return result;
}


const fetchNotion = async (id: string, data?: Record<string, any>) => {
  const { token } = useRuntimeConfig().notion
  const path = `databases/${id}/query`
  let result: any = await $fetch(`https://api.notion.com/v1/${path}`, {
    headers: {
        "Authorization": `Bearer ${token}`,
        'Notion-Version': '2022-02-22'
    },
    method: 'post',
    body: data
  })

  return result || null
}

export const useNotion = async (id: string, data?: Record<string, any>) => {
    try {
      return await retryFetchNotion(id, 5, 0, data)
  } catch (error) {
      console.log('error while fetching database')
      console.log(error)
      return null
  }
  
}


export function transformNotionDateToISO(input: string | {start: string, end: string}) {
  let date;

  if (typeof input === 'string') {
    date = new Date(input);
  } else if (input && input.start) {
    date = new Date(input.start);
  } else {
    throw new Error('Invalid input format. Provide a valid ISO string or an object with "start" property.');
  }

  return date.toISOString();
}


export function sortByISODateDesc(arr: { created_at: string }[]) {
  if (!arr || !arr.length) return []
  return arr.sort((a, b) => {
    const dateA = new Date(transformNotionDateToISO(a.created_at));
    const dateB = new Date(transformNotionDateToISO(b.created_at));

    return dateB.getTime() - dateA.getTime();  // Sort in descending order (newest first)
  });
}
