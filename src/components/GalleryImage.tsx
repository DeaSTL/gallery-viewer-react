import { useState } from "react"

type Props = {
  width?:number | 200
  height?:number | 200
  id?:string
}

export default function GalleryImage({width,height,id}: Props) {
  
  const [loading, setLoading] = useState(true)

  function handleLoad(event:any) {
    if(event.type == "load") {
      setLoading(false) 
    }
  }


  return (
    <div className="p-1 max-w-80 max-w-full  overflow-x-hidden">
      <img 
        loading="lazy"
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
