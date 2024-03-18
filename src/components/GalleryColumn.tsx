import { ReactNode } from "react"
import GalleryImage from "./GalleryImage"

type Props = {
  images:Image[]
}

export default function GalleryColumn({images}: Props) {
  function renderImages():ReactNode[]{
    const content:ReactNode[] = []
    images.forEach((image)=>{
      content.push(
        <GalleryImage 
        key={image.id} 
        width={image.width} 
        height={image.height} 
        id={image.id}/>
      )

    })
    return content
  }
  return (
    <>
    {renderImages()}
    </>
  )
}
