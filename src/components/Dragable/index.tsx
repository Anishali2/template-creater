import { Data } from '@/types/content'
import React, { useState } from 'react'
import Draggable from 'react-draggable'
import tw from 'twin.macro'
interface IDraggableText {
  value: Data
  allArray: Data[]
  setData: (value: Data[]) => void
}

const Textarea = tw.textarea` focus-visible:border-gray-400 border-dashed border-2 border-transparent focus-visible:border-2 focus-visible:outline-none resize-none h-auto overflow-auto absolute bg-transparent`
const DraggableText = ({
  value: v,
  allArray: data,
  setData
}: IDraggableText) => {
  const editItem = (e: string) => {
    const newData = data.map((d: Data) => {
      if (d.id === v.id) {
        return { ...d, content: { ...d.content, text: e }, selected: true }
      }
      return { ...d, selected: false }
    })
    setData(newData)
  }
  const selected = () => {
    const newData = data.map((d: Data) => {
      if (d.id === v.id) {
        return { ...d, selected: true }
      }
      return { ...d, selected: false }
    })
    setData(newData)
  }
  const [rows, setRows] = useState(1)

  const handleInput = (e: any) => {
    const textareaRows = e.target.value.split('\n').length
    setRows(textareaRows)
  }
  const nodeRef = React.useRef(null)
  return (
    <>
      <Draggable
        key={v.id}
        nodeRef={nodeRef}
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        grid={[1, 1]}
        scale={1}
      >
        <div ref={nodeRef} onClick={() => selected()}>
          {v.type === 'type/image' ? (
            <>
              <img
                alt="drag_image"
                className="handle resize-none overflow-auto absolute bg-transparent"
                src={v.image.src}
                style={{
                  height: Number(v.image.height),
                  width: Number(v.image.width)
                }}
              />
            </>
          ) : (
            <div className="group">
              <Textarea
                className="handle"
                rows={rows}
                spellCheck={false}
                onInput={handleInput}
                style={{
                  color: v.content.color,
                  ...(v.content.style === 'italic'
                    ? { fontStyle: v.content.style }
                    : { fontWeight: v.content.style }),
                  fontSize: Number(v.content.size)
                }}
                value={v.content.text}
                name="text"
                onChange={(e: any) => {
                  editItem(e.target.value)
                }}
              />
            </div>
          )}
        </div>
      </Draggable>
    </>
  )
}

export default DraggableText
