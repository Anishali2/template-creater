import { Data } from '@/types/content'

export const content: Data = {
  id: new Date().valueOf(),
  content: {
    text: 'lorem ispum dolor sit',
    size: 12,
    color: 'black',
    style: 'normal'
  },
  image: {
    src: 'http://hd.wallpaperswide.com/thumbs/space_love-t1.jpg',
    size: 12,
    color: 'black',
    height: 140,
    width: 140
  },
  selected: true,
  type: 'type/text'
}
