import { useState } from "react"
import { $current_image, setCurrentImage, setShowImageModal } from "../store/ImageViewer"
import { useStore } from "@nanostores/react"

type Props = {
  image:Image
}

export default function GalleryImage({image}: Props) {
  
  const [loading, setLoading] = useState(true)
  useStore($current_image)

  function handleLoad(event:any) {
    if(event.type == "load") {
      setLoading(false) 
    }
  }

  const handleClick = () => {
    setShowImageModal(true)  
    setCurrentImage(image)
  }


  return (
    <div className="p-1 max-w-80 max-w-full  overflow-x-hidden" onClick={handleClick}>
      <img 
        className={`${loading ? 'size-0' : 'visible size-full'}`} 
        src={`https://picsum.photos/id/${image.id}/${image.width}/${image.height}`} 
        onLoad={handleLoad}
      ></img>
      {loading ? 
      <div 
        className={`loading-image`}
        style={{width:`${image.width}px`,height:`${image.height}px`}}
      ></div> :
      ``
      }
    </div>
  )
}
