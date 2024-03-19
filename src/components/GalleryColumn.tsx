import { ReactNode } from "react"
import GalleryImage from "./GalleryImage"

type Props = {
  images:Image[]
}

export default function GalleryColumn({images}: Props) {



  function renderImages(images:Image[]):ReactNode[]{
    const content:ReactNode[] = []
    images.forEach((image,index)=>{
      content.push(
        <GalleryImage 
        key={index} 
        width={image.width} 
        height={image.height} 
        id={image.id}/>
      )

    })
    return content
  }
  return (
    <div className="flex flex-col grow">
      {renderImages(images)}
    </div>
  )
}
