import { useEffect, useState } from "react"
import GalleryColumn from "./GalleryColumn"

type Props = {}

export function Gallery({}: Props) {
  const [imageCols, setImageCols] = useState(5)

  const [arrangedImages, setArrangedImages] = useState<Image[][]>([])
  const [images, setImages] = useState<Image[]>([])


  const renderImages = (images:Image[][]) => {
    const content = []
    for (let i = 0; i < images.length; i++) {
      content.push(
        <GalleryColumn key={i} images={images[i]}/>
      )
    } 

    return content
  }


  useEffect(() => {
    const arranged_images:Image[][] = []
    for (let i = 0; i < imageCols; i++) {
      arranged_images[i] = []
      for (let j = 0; j < Math.floor (images.length / imageCols); j++) {
        if(images[i + j * imageCols]){
          arranged_images[i][j] = images[i + j * imageCols]
        }
      }
    }
    setArrangedImages(arranged_images)

  },[images,imageCols])

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=100").then((resp)=>{
      resp.json().then((data:Image[])=>{
        const raw_images:Image[] = data as Image[]

        raw_images.forEach((image,index)=>{
          raw_images[index].width /= 10
          raw_images[index].height /= 10
          raw_images[index].width = Math.ceil(image.width)
          raw_images[index].height = Math.ceil(image.height)

          if(raw_images[index - 1]){
            raw_images[index].prev = raw_images[index - 1]
          }
          if(raw_images[index + 1]){
            raw_images[index].next = raw_images[index + 1]
          }
        })
        setImages(raw_images)
      })
    })
  }, [])

      // <input 
      // type="range" 
      // max="10"
      // min="1" 
      // onChange={(e)=>{setImageCols(Number(e.target.value))}}></input>

  return (
    <>
      <div className="w-full flex">
        {
          renderImages(arrangedImages)
        }
      </div>
    </>
  )
}
