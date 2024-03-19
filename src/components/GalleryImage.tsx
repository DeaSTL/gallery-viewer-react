import { useState } from "react"
import { $current_image, setCurrentImage, setShowImageModal } from "../store/ImageViewer"
import { useStore } from "@nanostores/react"

type Props = {
  width:number | 200
  height:number | 200
  id:string | ""
}

export default function GalleryImage({width,height,id}: Props) {
  
  const [loading, setLoading] = useState(true)
  const current_image = useStore($current_image)

  function handleLoad(event:any) {
    if(event.type == "load") {
      setLoading(false) 
    }
  }

  const handleClick = () => {
    setShowImageModal(true)  
    setCurrentImage({id,width,height})
  }


  return (
    <div className="p-1 max-w-80 max-w-full  overflow-x-hidden" onClick={handleClick}>
      <img 
        className={`${loading ? 'size-0' : 'visible size-full'}`} 
        src={`https://picsum.photos/id/${id}/${width}/${height}`} 
        onLoad={handleLoad}
      ></img>
      {loading ? 
      <div 
        className={`loading-image`}
        style={{width:`${width}px`,height:`${height}px`}}
      ></div> :
      ``
      }
    </div>
  )
}
