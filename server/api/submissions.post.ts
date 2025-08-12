import { createSubmission } from "#imports"
import { submissionSchema } from "#imports"
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const data = submissionSchema.safeParse(body)

  if (!data.success) {
    return createError({
      statusCode: 400,
      message: 'Ongeldige gegevens',
      data: data.error.issues
    })
  }

  try {
    return await createSubmission(data.data)
  } catch (error) {
    console.log(JSON.stringify(error, null, 2))
    throw createError({
      statusCode: 500,
      message: 'Het is niet gelukt om je gegevens te verwerken. Probeer het later opnieuw.'
    })
  }
})
