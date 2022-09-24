import * as Dialog from '@radix-ui/react-dialog'

interface GameBannerProps {
  onClick: () => void,
  id: string,
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {

  function handleClick(){
    props.onClick()
  }

  return (
    <Dialog.Trigger onClick={handleClick} >
      <div className="relative rounded-lg overflow-hidden">
        <img className="w-60" src={props.bannerUrl} alt="" />

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="font-bold text-white block">{props.title}</strong>
          <span className="text-zinc-300 text-sm block">{props.adsCount} anúncio(s)</span>
        </div>
      </div>
    </Dialog.Trigger>
  );
}
