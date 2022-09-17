import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

export default function CreateAdBanner() {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
    <div className='bg-[#2a2634] h-28 mt-1 justify-between rounded-lg flex  py-6 px-8'>
      <div>
        <h4 className='text-2xl text-white font-black'>Nao encontrou seu duo?</h4>
        <h6 className='text-zinc-400'>Publique um anuncio para encontrar novos players</h6>
      </div>
      <Dialog.Trigger className='h-12 w-48 text-white flex rounded-lg gap-3  items-center justify-center bg-violet-500'>
        <MagnifyingGlassPlus size={24} color="#f5f5f5" />
        Publicar anuncio
      </Dialog.Trigger>
    </div>
  </div>
  )
}
