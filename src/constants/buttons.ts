import { ButtonType } from '@/types/button'
import {
  ChatBubbleBottomCenterTextIcon,
  PhotoIcon
} from '@heroicons/react/24/outline'
export const buttons: ButtonType[] = [
  {
    type: 'type/text',
    icon: ChatBubbleBottomCenterTextIcon,
    text: 'Line Text'
  },
  {
    type: 'type/image',
    icon: PhotoIcon,
    text: 'Image'
  }
]
