import {atom} from 'nanostores'


export const $show_image_modal = atom<boolean>(false)
export const $current_image = atom<Image>({width:0,height:0,id:""})

export function setShowImageModal(state:boolean){
  $show_image_modal.set(state)
}

export function setCurrentImage(image:Image){
  $current_image.set(image)
}

