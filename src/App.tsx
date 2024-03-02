import { BsPieChart } from 'react-icons/bs'
import {
  PiWallet,
  PiToolbox,
  PiStorefront,
  PiClipboardText,
  PiMoneyThin,
  PiUserCircleLight,
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
      <section className="container">content</section>
    </main>
  )
}

export default App
