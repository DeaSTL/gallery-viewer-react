import { faCaretLeft, faCaretRight, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { $current_image, $show_image_modal, setCurrentImage, setShowImageModal } from "../store/ImageViewer"
import { useStore } from "@nanostores/react"
import { useEffect} from "react"

type Props = {
}

const arrowStyle:string = "h-3/4 w-10 flex flex-col justify-center absolute opacity-50 text-white hover:opacity-100 mt-12"

export default function ImageViewer({}: Props) {
  const show = useStore($show_image_modal)
  const image = useStore($current_image)

  function handleArrowLeft(){
    console.log("Setting prev image: ",image.prev);
    if(image.prev){
      setCurrentImage(image.prev)
    }else{
      setShowImageModal(false)
    }
  }
  function handleArrowRight(){
    console.log("Setting next image: ",image.next);
    if(image.next){
      setCurrentImage(image.next)
    }else{
      setShowImageModal(false)
    }
  }

  useEffect(() => {
    if(show.valueOf()){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = ""
    }
  }, [show])


  return (
    <div className={show ? "" : "hidden"}>
      <div className="absolute justify-center bg-black/40 w-full h-full z-10 backdrop-blur-md"> 
      </div>
      <div className="flex w-full h-full z-20 absolute">
        <div onClick={()=>{setShowImageModal(false)}} className="top-4 right-4 absolute opacity-40 hover:opacity-100 z-30 text-white">
          <FontAwesomeIcon icon={faX} size={"2xl"} />
        </div>
        <div className={arrowStyle + " left-0 z-50"} onClick={handleArrowLeft}>
          <FontAwesomeIcon icon={faCaretLeft} size={"2xl"}/>
        </div> 
        <div className={arrowStyle + " right-0 z-50"} onClick={handleArrowRight}>
          <FontAwesomeIcon icon={faCaretRight} size={"2xl"}/>
        </div> 
        <img src={`https://picsum.photos/id/${image.id}/800/600`} className="absolute min-w-[60%] top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 shadow-2xl shadow-black"/>
        
      </div>
    </div>
  )
}
