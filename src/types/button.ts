export interface ButtonType {
  type: 'type/image' | 'type/text'
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
  text: string
}
