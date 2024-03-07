type ModalProps = {
  toggleModal: () => void
  saveClient: () => void
  setClientData: (target: 'name' | 'network' | 'code', value: string) => void
}

export const ModalNewClient = ({
  toggleModal,
  setClientData,
  saveClient,
}: ModalProps) => {
  return (
    <div className="absolute w-full h-full bg-gray-900 bg-opacity-40 flex justify-center items-center text-neutral-950">
      <div className="flex flex-col  gap-3 bg-primary w-[800px] h-[479px] p-6 opacity-100 rounded-lg">
        <h3 className="text-xl font-bold">Cadastro de Cliente</h3>
        <form className="flex flex-col gap-5 border-[1px] border-gray-200 rounded-[18px] w-full h-full max-h-[309px] p-5">
          <div className="flex flex-col gap-3">
            <label htmlFor="">Código</label>
            <input
              type="text"
              onChange={(e) => setClientData('code', e.target.value)}
              placeholder="Digite aqui"
              className="h-[43px] w-full rounded-xl p-3 outline-none border-[1px] border-gray-200 hover:border-gray-400 text-sm focus:border-gray-500"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Nome do Cliente</label>
            <input
              type="text"
              onChange={(e) => setClientData('name', e.target.value)}
              placeholder="Digite aqui"
              className="h-[43px] w-full rounded-xl p-3 outline-none border-[1px] border-gray-200 hover:border-gray-400 text-sm focus:border-gray-500"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Rede</label>
            <input
              type="text"
              onChange={(e) => setClientData('network', e.target.value)}
              placeholder="Digite aqui"
              className="h-[43px] w-full rounded-xl p-3 outline-none border-[1px] border-gray-200 hover:border-gray-400 text-sm focus:border-gray-500"
            />
          </div>
        </form>
        <div className="flex mt-3 gap-5 w-full justify-end">
          <button
            className="bg-button-cancel hover:bg-button-cancel-hover w-48 py-1 rounded-3xl "
            onClick={() => toggleModal()}
          >
            cancelar
          </button>
          <button
            className="bg-button-primary hover:bg-button-primary-hover w-48 py-1 rounded-3xl  "
            onClick={async () => {
              await saveClient()
              toggleModal()
            }}
          >
            salvar
          </button>
        </div>
      </div>
    </div>
  )
}
