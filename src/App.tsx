import { PiPlusCircleLight } from 'react-icons/pi'
import { Options } from './components/Show-Options'
import { useEffect, useState } from 'react'
import { ModalNewClient } from './components/ModalNewClient'
import {
  AssistantsInterface,
  ClientInterface,
  ClientsInterface,
} from './interfaces/DatasInterface'
import {
  createAssistant,
  createClient,
  getAssistants,
  getClientsLinked,
  getClientsUnlinked,
  // linkUnlinkClient,
} from './components/functions'
import { Menu } from './components/Menu'
import { ModalNewAssistant } from './components/ModalNewAssistant'

function App() {
  const [modalNewClentIsOpen, setModalNewClentIsOpen] = useState<boolean>(false)
  const [modalNewAssistantIsOpen, setModalNewAssistantIsOpen] =
    useState<boolean>(false)
  const [assistants, setAssistants] = useState<AssistantsInterface[]>([])
  const [assistantSelected, setAssistantSelected] =
    useState<AssistantsInterface>({
      _id: {
        value: undefined,
      },
      props: {
        name: undefined,
        phone: undefined,
        email: undefined,
      },
    })
  const [assistant, setAssistant] = useState<AssistantsInterface>({
    _id: {
      value: undefined,
    },
    props: {
      name: undefined,
      phone: undefined,
      email: undefined,
    },
  })
  const [client, setClient] = useState<ClientInterface>({
    code: undefined,
    name: undefined,
    network: undefined,
    assistantId: undefined,
  })
  const [clientsUnlinked, setClientsUnlinked] = useState<ClientsInterface[]>([])
  const [clientsLinked, setClientsLinked] = useState<ClientsInterface[]>([])

  useEffect(() => {
    const initialize = async () => {
      const listAssistants = await getAssistants()
      const listClientsUnlinked = await getClientsUnlinked()
      setAssistants(listAssistants)
      setClientsUnlinked(listClientsUnlinked)
    }
    initialize()
  }, [])

  useEffect(() => {
    const clientLinked = async () => {
      if (assistant) {
        const listClientsLinked = await getClientsLinked({
          assistantId: assistant?._id.value,
        })

        setClientsLinked(listClientsLinked)
      }
    }
    clientLinked()
  }, [assistant])

  useEffect(() => {
    ;async () => {
      const listClientsUnlinked = await getClientsUnlinked()
      const listCLientsLinked = await getClientsLinked({
        assistantId: assistant?._id.value,
      })

      setClientsUnlinked(listClientsUnlinked)
      setClientsLinked(listCLientsLinked)
    }
  }, [client.assistantId])

  const toggleModalNewClient = () => {
    setModalNewClentIsOpen(!modalNewClentIsOpen)
  }
  const toggleModalNewAssistant = () => {
    setModalNewAssistantIsOpen(!modalNewAssistantIsOpen)
  }

  const saveClient = async () => {
    const response = await createClient(client)
    if (response) {
      const listClientsUnlinked = await getClientsUnlinked()
      setClientsUnlinked(listClientsUnlinked)
    }
  }

  const saveAssistant = async () => {
    const response = await createAssistant(assistant)
    if (response) {
      const listAssistants = await getAssistants()
      setAssistants(listAssistants)
    }
  }

  const setClientData = (name: 'name' | 'network' | 'code', value: string) => {
    setClient({ ...client, [name]: value })
  }

  const setAssistantData = (
    name: 'name' | 'email' | 'phone',
    value: string,
  ) => {
    setAssistant({ ...assistant, props: { ...assistant.props, [name]: value } })
  }

  // const linkUnlinkClients = async (
  //   listClientsId: string[],
  //   assistantId?: string,
  // ) => {
  //   listClientsId.forEach(async (clientId) => {
  //     await linkUnlinkClient({
  //       assistantId: assistantId ?? assistantSelected._id.value,
  //       clientId,
  //     })
  //   })
  // }

  return (
    <main className="w-full h-[100vh] flex flex-row">
      <Menu />
      <section className="flex flex-col w-full p-9 gap-4">
        <h1 className="font-bold text-3xl ">Carteira de Clientes</h1>
        <div className="gap-2">
          <p className="mb-2">Selecione o Assistente Comercial</p>
          <div className="flex gap-3">
            <div className="flex items-center bg-primary w-[388px] h-[43px] rounded-xl p-3 ">
              <select
                id="assitent"
                className=" bg-primary w-full inline-block border-none outline-none "
                name="assitent"
                onChange={(e) => {
                  const assistantFounded =
                    assistants.find(
                      (item) => item._id.value === e.target.value,
                    ) ?? assistantSelected

                  setAssistantSelected(assistantFounded)
                }}
              >
                {assistants.map(({ _id, props }) => {
                  return (
                    <option value={_id.value} key={_id.value}>
                      {props.name}
                    </option>
                  )
                })}
              </select>
            </div>
            <button
              onClick={() => toggleModalNewAssistant()}
              className="px-4 py-3 rounded-3xl bg-button-primary hover:bg-button-primary-hover"
            >
              <PiPlusCircleLight color="white" size={22} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 h-full">
          <Options
            title="Clientes (Não vinculadao)"
            amount={clientsUnlinked.length}
            buttonAddCustomer={true}
            buttonLinker="link"
            toggleModal={toggleModalNewClient}
            clients={clientsUnlinked}
          />
          <Options
            title={`Carteira de ${assistantSelected.props.name ?? ''}`}
            amount={clientsLinked.length}
            buttonAddCustomer={false}
            buttonLinker="unlink"
            toggleModal={toggleModalNewClient}
            clients={clientsLinked}
            assistantId={assistantSelected._id.value}
          />
        </div>
      </section>
      {modalNewClentIsOpen && (
        <ModalNewClient
          toggleModal={toggleModalNewClient}
          setClientData={setClientData}
          saveClient={saveClient}
        />
      )}
      {modalNewAssistantIsOpen && (
        <ModalNewAssistant
          toggleModal={toggleModalNewAssistant}
          setAssistantData={setAssistantData}
          saveAssistant={saveAssistant}
        />
      )}
    </main>
  )
}

export default App
