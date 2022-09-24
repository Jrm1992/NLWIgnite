import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";

interface IdProps {
  id: string
}

export interface DuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

export function GameAdModal(props : IdProps){

  const[ads, setAds] = useState<DuoCardProps[]>()

  useEffect(() => {
    if(props.id){
      fetch(`http://192.168.1.12:3333/games/${props.id}/ads`)
      .then(response => response.json())
      .then(data => setAds(data))
    }
  }, [props.id])
  

  return(
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
      {ads?.map((game) => {
        return (
          <div>
            <p>Name</p>
            <p>{game.name}</p>
            <p>Tempo de jogo</p>
            <p>{game.yearsPlaying}</p>
          </div>
        )
      })}
      </Dialog.Content>
    </Dialog.Portal>
  )
}