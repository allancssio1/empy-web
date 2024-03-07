import { apiURL } from '../../api'
import {
  AssistantsInterface,
  ClientInterface,
  ClientsInterface,
} from '../../interfaces/DatasInterface'
import { getClientsLinkedInterface } from '../../interfaces/FunctionInterface'

export const createAssistant = async ({ props }: AssistantsInterface) => {
  const { data } = await apiURL.post(`/assistants/create`, {
    email: props.email,
    name: props.name,
    phone: props.phone,
  })
  return data.data && data.data.assistant
}

export const getAssistants = async (): Promise<AssistantsInterface[] | []> => {
  const { data } = await apiURL.get('/assistants/list')
  return (data.value && data.value.assistants) ?? []
}

export const getClientsUnlinked = async (): Promise<
  ClientsInterface[] | []
> => {
  const { data } = await apiURL.get('/clients/list-unlinked')
  return (data.data && data.data.clients) ?? []
}

export const getClientsLinked = async ({
  assistantId,
}: getClientsLinkedInterface): Promise<ClientsInterface[] | []> => {
  const { data } = await apiURL.get(`/clients/list/${assistantId}`)
  return (data.data && data.data.clients) ?? []
}

export const createClient = async ({
  code,
  name,
  network,
}: ClientInterface): Promise<ClientsInterface> => {
  const { data } = await apiURL.post(`/clients/create`, {
    code,
    name,
    network,
  })

  return data.data && data.data.client
}

export const maskPhone = (value: string): string => {
  let v = value.replace(/\D/g, '')

  v = v.replace(/\D/g, '')
  v = v.replace(/^(\d{2})(\d)/g, '($1) $2')
  v = v.replace(/(\d)(\d{4})$/, '$1-$2')
  return v
}
