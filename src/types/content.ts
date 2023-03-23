type TextContent = {
  text: string
  size: number
  color: string
  style: string
}

type ImageContent = {
  src: string
  size: number
  color: string
  height: number
  width: number
}

export type Data = {
  id: number
  content: TextContent
  image: ImageContent
  selected: boolean
  type: 'type/text' | 'type/image'
}
