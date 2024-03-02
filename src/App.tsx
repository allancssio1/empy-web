import { BsPieChart } from 'react-icons/bs'
import {
  PiWallet,
  PiToolbox,
  PiStorefront,
  PiClipboardText,
  PiMoneyThin,
  PiUserCircleLight,
  PiPlusCircleLight,
} from 'react-icons/pi'
import { HiOutlineSun } from 'react-icons/hi'

function App() {
  return (
    <main className="w-full h-[100vh] flex flex-row">
      <section className="flex flex-col items-center  justify-between w-[85px] p-8 bg-primary ">
        <div className="">
          <div className="w-9 mb-8">
            <img alt="logo" src="/logo.svg" className="size-9" />
          </div>
          <div className="flex flex-col items-center py-6 gap-7">
            <div>
              <BsPieChart size={24} className="text-gray-600" />
            </div>
            <div>
              <PiWallet size={24} className="text-gray-600" />
            </div>
            <div>
              <PiToolbox size={24} className="text-gray-600" />
            </div>
            <div>
              <PiStorefront size={24} className="text-gray-600" />
            </div>
            <div>
              <PiClipboardText size={24} className="text-gray-600" />
            </div>
            <div>
              <PiMoneyThin size={24} className="text-gray-600" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center  py-6 gap-7">
          <div>
            <PiUserCircleLight size={24} className="text-gray-600" />
          </div>
          <div>
            <HiOutlineSun size={24} className="text-gray-600" />
          </div>
          <div className="  w-9 h-9 ">
            <img
              alt="foto"
              src="/foto.jpg"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full p-9 gap-4">
        <h1 className="font-bold text-3xl ">Carteira de Clientes</h1>
        <div className="gap-2">
          <p>Selecione o Assistente Comercial</p>
          <div className="flex gap-3">
            <div className="flex items-center bg-primary w-[388px] h-[43px] rounded-xl p-3 ">
              <select id="assitent" className=" bg-primary" name="assitent">
                <option value="fulano">Fulano</option>
                <option value="sicrano">Sicrano</option>
              </select>
            </div>
            <button className="px-4 py-3 rounded-3xl bg-button-primary hover:bg-button-primary-hover">
              <PiPlusCircleLight color="white" size={22} />
            </button>
          </div>
        </div>

        <div>
          <div></div>
          <div></div>
        </div>
      </section>
    </main>
  )
}

export default App
