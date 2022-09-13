import { MagnifyingGlassPlus } from 'phosphor-react'
import { useState } from 'react'

import logoImage from './assets/logo-nlw.svg'

function App() {
  return (
  <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
    <img src={logoImage} />
    <h1 className='text-6xl text-white font-black my-20'>
      Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> esta aqui.
    </h1>
    <div className='bg-nlw-gradient w-full h-28 rounded-lg'>
      <div className='bg-[#2a2634] h-28 mt-1 justify-between rounded-lg flex  py-6 px-8'>
        <div>
          <h4 className='text-2xl text-white font-black'>Nao encontrou seu duo?</h4>
          <h6 className='text-zinc-400'>Publique um anuncio para encontrar novos players</h6>
        </div>
        <button className='h-12 w-48 text-white flex rounded-lg gap-3  items-center justify-center bg-violet-500'>
          <MagnifyingGlassPlus size={24} color="#f5f5f5" />
          Publicar anuncio
        </button>
      </div>
    </div>
  </div>
  )
}

export default App
