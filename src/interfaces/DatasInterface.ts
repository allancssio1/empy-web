export interface AssistantsInterface {
  _id: {
    value: string | undefined
  }
  props: {
    name: string | undefined
    phone: string | undefined
    email: string | undefined
  }
}

export interface ClientsInterface {
  _id: {
    value: string | undefined
  }
  props: {
    name: string | undefined
    code: string | undefined
    network: string | undefined
    assistantId?:
      | {
          value: string | undefined
        }
      | undefined
  }
}

export interface ClientInterface {
  name: string | undefined
  code: string | undefined
  network: string | undefined
  assistantId?:
    | {
        value: string
      }
    | undefined
}

export interface linkUnlinkProps {
  assistantId?: string
  clientId: string
}
