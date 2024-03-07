import {
  PiPlusCircleLight,
  PiArrowCircleLeft,
  PiArrowCircleRight,
} from 'react-icons/pi'
import { CiSearch } from 'react-icons/ci'
import { ClientsInterface } from '../../interfaces/DatasInterface'
import { useState } from 'react'

type OptionsProps = {
  title: string
  amount: number
  buttonAddCustomer: boolean
  buttonLinker: 'link' | 'unlink'
  toggleModal: () => void
  linkUnlinkClients: (listClientsId: string[], assistantId?: string) => void
  clients: ClientsInterface[]
  assistantId?: string
}

export const Options = ({
  title,
  amount,
  buttonAddCustomer,
  buttonLinker,
  toggleModal,
  clients,
  linkUnlinkClients,
  assistantId,
}: OptionsProps) => {
  const [clientsIds, setClientsIds] = useState<string[]>([])

  const text = buttonLinker === 'link' ? 'Vincular' : 'Desvincular'
  const buttonColorCustomer =
    buttonLinker === 'link'
      ? 'bg-button-positive hover: bg-button-positive-hover'
      : 'bg-button-negative hover:bg-button-negative-hover'
  const icon =
    buttonLinker === 'link' ? (
      <PiArrowCircleRight color="white" size={22} className="" />
    ) : (
      <PiArrowCircleLeft
        color="white"
        size={22}
        className="text-button-cancel-primary"
      />
    )

  const editClientsIds = (clientId: string) => {
    const idIndex = clientsIds.findIndex((item) => item === clientId)
    let clientsIdsLet = clientsIds
    if (idIndex) {
      clientsIdsLet.splice(idIndex, 1)
    } else {
      clientsIdsLet.push(clientId)
    }
    setClientsIds(clientsIdsLet)
  }

  return (
    <div className="flex flex-col gap-3  text-nowrap bg-primary rounded-xl p-6 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <h3 className="text-1xl font-semibold">{title}</h3>

          <div className="border-2 rounded-3xl px-3">
            <span className="text-button-primary text-sm">{amount}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-button-cancel">
          {buttonAddCustomer && (
            <button
              onClick={() => {
                toggleModal()
              }}
              className="flex items-center rounded-[18px] px-3 py-0.5 gap-2 bg-button-primary hover:bg-button-primary-hover"
            >
              <PiPlusCircleLight
                color="white"
                size={22}
                className="text-button-cancel-primary"
              />
              Adicionar Cliente
            </button>
          )}
          <button
            onClick={() => console.log(clientsIds, assistantId)}
            className={`flex rounded-[18px] px-3 py-0.5 gap-2 ${buttonColorCustomer}`}
          >
            {text}
            {icon}
          </button>
        </div>
      </div>
      <div className="relative">
        <label htmlFor="search" className="absolute bottom-[7px] left-[8px]">
          <CiSearch size={20} className=" text-gray-700" />
        </label>
        <input
          type="text"
          id="search"
          placeholder="Buscar"
          className="h-[32px] w-full rounded-xl p-2 pl-9 outline-none border-[1px] border-gray-200 hover:border-gray-400 text-sm focus:border-gray-500 "
        />
      </div>
      <div className="flex flex-col gap-2 text-[14px]">
        <div className=" w-full flex items-center justify-between px-4 text-gray-600 ">
          <div className="flex flex-row gap-4">
            <input type="checkbox" name="" id="" />
            <span>Código</span>
            <span>Parceiro</span>
          </div>
          <div>
            <span>Rede</span>
          </div>
        </div>
        {clients.length > 0 &&
          clients.map(({ _id, props }) => {
            return (
              <div
                key={`${_id.value}`}
                className="h-[45px] w-full flex items-center justify-between p-4 border-gray-300 border-[1px] rounded-[18px]"
              >
                <div className="flex flex-row gap-4">
                  <input
                    type="checkbox"
                    onChange={() => _id.value && editClientsIds(_id.value)}
                    name={props.name}
                    id={_id.value}
                    className="bg-button-primary"
                  />
                  <span>{props.code}</span>
                  <span>{props.name}</span>
                </div>
                <div>
                  <span>{props.network}</span>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
