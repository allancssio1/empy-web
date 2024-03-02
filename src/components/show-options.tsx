import {
  PiPlusCircleLight,
  PiArrowCircleLeft,
  PiArrowCircleRight,
} from 'react-icons/pi'
import { CiSearch } from 'react-icons/ci'

type OptionsProps = {
  title: string
  amount: number
  buttonAddCustomer: boolean
  buttonLinker: 'link' | 'unlink'
}

export const Options = ({
  title,
  amount,
  buttonAddCustomer,
  buttonLinker,
}: OptionsProps) => {
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

  return (
    <div className="flex flex-col gap-3 justify-between bg-primary rounded-xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <h3 className="text-1xl font-semibold">{title}</h3>

          <div className="border-2 rounded-3xl px-3">
            <span className="text-button-primary text-sm">{amount}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-button-cancel">
          {buttonAddCustomer && (
            <button className="flex items-center rounded-[18px] px-3 py-0.5 gap-2 bg-button-primary hover:bg-button-primary-hover">
              <PiPlusCircleLight
                color="white"
                size={22}
                className="text-button-cancel-primary"
              />
              Adicionar Cliente
            </button>
          )}
          <button
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
      <div></div>

      <div></div>
    </div>
  )
}
