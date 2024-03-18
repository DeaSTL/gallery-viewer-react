import { useEffect, useState } from 'react'
import './App.css'
import GalleryImage from './components/GalleryImage'

function App() {

  const [vertImages, setVertImages] = useState(5)

  const [images, setImages] = useState<Image[]>([])

  const getWindowDimensions = () => {
    const {innerWidth: width,innerHeight: height} = window;

    return {
      width,
      height
    }
  }


  const [windowDimensions,setWindowDemisions] = useState(getWindowDimensions())


//   const renderImageRow = (images:Image[],row:number,image_count:number) => {
//     let content = []
// 
//     for (let index = row * image_count; index < (row * image_count) + image_count; index++) {
//       if(images[index]){
//         let next_image = images[index]
//         content.push(
//           <GalleryImage 
//           key={next_image.id} 
//           width={next_image.width} 
//           height={next_image.height} 
//           id={next_image.id}/>
//         )
//       }
//     }
//     return content
//   }

//   const renderImages = (images:Image[]) => {
//     let content = []
// 
//     for (let index = 0; index < 30; index++) {
//       const newRow = renderImageRow(images,index,30)
//       console.log("New Row");
//       
//       if(newRow.length > 0){
//         content.push(
//           <div className="w-full" key={index}>
//             {
//               newRow
//             }
//           </div>
//         )
//       }else{
//         break;
//       }
//     }
//     return content
//   }

  const handleScroll = (e:any)=>{
    console.log(e.target.scrollHeight);
    console.log(e.target.scrollTop);
    console.log(e.target.clientHeight);
    
    
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

    if(bottom){
      console.log("bottom");
    }
  }

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=200").then((resp)=>{
      resp.json().then((data:Image[])=>{
        data.forEach((image)=>{
          if(image.width){
            image.width /= 5;
            image.width = Math.ceil(image.width)
          }
          if(image.height){
            image.height /= 5;
            image.height = Math.ceil(image.height)
          }
        })
        setImages(data)
      })
    })
  }, [])

  useEffect(() => {
    if(windowDimensions.width < 600){
      setVertImages(1)
    }else {
      setVertImages(5)
    }
  }, [windowDimensions])

  return (
    <div className="w-full flex">
      {
        renderImages(images)
      }
    </div>
  )
}

export default App

