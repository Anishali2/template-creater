import React, { useState } from 'react'

import DraggableText from '@/components/Dragable'
import { Data } from '@/types/content'
import { buttons } from '@/constants/buttons'
import { content } from '@/constants/text'
import EditSelected from '@/components/EditSelected'
import { PlusIcon } from '@heroicons/react/24/outline'
const App = () => {
  const [data, setData] = useState<Data[]>([
    { ...content, id: new Date().valueOf() }
  ])

  return (
    <div className="flex overflow-hidden">
      <div className=" w-1/4 h-screen bg-gray-100 shadow-md z-50">
        <div className="border-t border-slate-400/20 py-3 px-3.5">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Select Widget
          </h3>
          {buttons.map((btn) => (
            <div
              key={btn.text}
              className="group flex justify-between items-center rounded-md p-1.5  hover:bg-slate-200"
              onClick={() =>
                setData([
                  ...data,
                  { ...content, id: new Date().valueOf(), type: btn.type }
                ])
              }
            >
              <div className="flex">
                <btn.icon className="mr-2.5 h-5  w-5 flex-none stroke-slate-400" />
                <p className="hidden sm:block">{btn.text}</p>
              </div>
              <PlusIcon className="mr-2.5 h-5  w-5 flex-none stroke-slate-400" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-2/4 h-screen relative">
        {data.map((v: Data) => {
          return (
            <DraggableText
              key={v.id}
              allArray={data}
              value={v}
              setData={setData}
            />
          )
        })}
      </div>
      <div className=" w-1/4 bg-gray-100 shadow-md z-50 ">
        <EditSelected allData={data} setData={setData} />
      </div>
    </div>
  )
}

export default App
// TODO only add border when input is selected
// TODO change the name of Draggable Component
