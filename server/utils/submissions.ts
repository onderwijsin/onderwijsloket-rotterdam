import { z } from 'zod'
import { createNotionRequest } from './notion'


export const submissionSchema = z.object({
  name: z.string().min(1, 'Vul je naam in'),
  email: z.email('Ongeldig e-mailadres'),
  phone: z.string().optional(),
  message: z.string().optional(),
  sectors: z.array(z.string()),
  utm: z.object({
    source: z.string().optional(),
    medium: z.string().optional(),
    campaign: z.string().optional(),
    term: z.string().optional(),
    content: z.string().optional()
  }).optional()
})


export type SubmissionSchema = z.infer<typeof submissionSchema>



export const createSubmission = async (
  data: {
    name: string,
    email: string
    phone?: string
    sectors: string[]
    message?: string,
    utm?: {
      source?: string
      medium?: string
      campaign?: string
      term?: string
      content?: string
    }
  }
) => {
    const config = useRuntimeConfig()
    const { submissionDatabaseId, token } = config.notion
    const response = await createNotionRequest('pages', token, {
      parent: { type: "database_id", database_id: submissionDatabaseId },
      properties: {
        'Jouw naam': {
          title: [
            {
              text: {
                content: data.name
              }
            }
          ]
        },
        'Jouw e-mailadres': {
          email: data.email
        },
        'Telefoonnummer': {
          phone_number: data.phone || ''  
        },
        'Opmerkingen': {
          rich_text: [
            {
              text: {
                content: data.message || ''
              }
            }
          ]
        },
        'Sectoren': {
          multi_select: data.sectors.map(sector => ({
            name: sector
          }))
        },
        'utm_source': {
          rich_text: [
            {
              text: {
                content: data.utm?.source || ''
              }
            }
          ]
        },
        'utm_medium': {
          rich_text: [
            {
              text: {
                content: data.utm?.medium || ''
              }
            }
          ]
        },
        'utm_campaign': {
          rich_text: [
            {
              text: {
                content: data.utm?.campaign || '' 
              }
            }
          ]
        },
        'utm_term': {
          rich_text: [
            {
              text: {
                content: data.utm?.term || ''
              }
            }
          ]
        },
        'utm_content': {
          rich_text: [
            {
              text: {
                content: data.utm?.content || ''
              }
            }
          ] 
        }
      }
    })
    return response
}