import { useEffect, useState } from 'react'
import logoImg from './assets/logo-nlw.svg'
import CreateAdBanner from './components/CreateAdBanner'
import { GameBanner } from './components/GameBanner'
import * as Dialog from '@radix-ui/react-dialog'
import CreateAdModal from './components/CreateAdModal'
import axios from 'axios'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import { GameAdModal } from './components/GameAdModal'

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])
  const [id, setId] = useState('')

  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 2 },
      },
      "(min-width: 750px)": {
        slides: { perView: 4, spacing: 6 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 6, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  })

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => setGames(response.data))
  }, [])

  function handleClick(id: string){
    setId(id)
    console.log("ID:", id)
  }
  
  if (!games) return <></>;
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <Dialog.Root>
        <div ref={sliderRef} className="keen-slider">
            {games.map(game => {
              return (
                <div key={game.id} className="keen-slider__slide">
                  <GameBanner
                    onClick={() => handleClick(game.id)}
                    id={game.id}
                    title={game.title}
                    bannerUrl={game.bannerUrl}
                    adsCount={game._count.ads}
                    />
                </div>
              )
            })}
          </div>
          <GameAdModal id={id} />
        </Dialog.Root>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
      
  </div>
  )
}

export default App
