import React from 'react'
import { Data } from '@/types/content'
import { ChromePicker } from 'react-color'
import tw from 'twin.macro'
interface IEditSelected {
  allData: Data[]
  setData: (value: Data[]) => void
}
const Label = tw.label`block text-sm font-medium leading-6 text-gray-900`
const SelectInput = tw.select`mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`
const Input = tw.input`mt-2 block w-full bg-transparent px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`
const Col = tw.div`col-span-6 sm:col-span-3`
const Grid = tw.div`grid grid-cols-6 md:grid-rows-1 grid-rows-2 gap-2`
const Submit = tw.button` rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`

const EditSelected = ({ allData, setData }: IEditSelected) => {
  const data = allData.find((v) => v.selected === true)
  const editItem = (e: string, property: string) => {
    const newData = allData.map((d: Data) => {
      if (d.id === data?.id) {
        return {
          ...d,
          ...(data.type === 'type/text'
            ? { content: { ...d.content, [property]: e } }
            : { image: { ...d.image, [property]: e } }),
          selected: true
        }
      }
      return { ...d, selected: false }
    })
    setData(newData)
  }

  return (
    <>
      {data?.type === 'type/text' ? (
        <>
          <Grid>
            <Col>
              <Label htmlFor="fontstyle">Font Style</Label>
              <SelectInput
                id="fontstyle"
                onChange={(e) => editItem(e.target.value, 'style')}
                name="fontstyle"
                value={data?.content.style}
              >
                <option value="normal">Normal</option>
                <option value="italic">Italic</option>
                <option value="bold">Bold</option>
                <option value="bolder">Bolder</option>
              </SelectInput>
            </Col>
            <Col>
              <Label htmlFor="font-size">Font Size</Label>
              <SelectInput
                id="font-size"
                name="font-size"
                value={data?.content.size}
                onChange={(e) => editItem(e.target.value, 'size')}
              >
                <option value={14}>14px</option>
                <option value={16}>16px</option>
                <option value={18}>18px</option>
                <option value={20}>20px</option>
                <option value={22}>22px</option>
                <option value={24}>24px</option>
              </SelectInput>
            </Col>
          </Grid>
          <div className="flex justify-center !text-white mt-10 mx-auto ">
            <ChromePicker
              color={data?.content.color}
              tw="!text-white"
              onChange={(newColor: any) => editItem(newColor.hex, 'color')}
            />
          </div>
          <div className="bg-gray-50 px-4 py-3  sm:px-6"></div>
          <Submit onClick={() => console.log(data?.content)}>Submit</Submit>
        </>
      ) : data?.type === 'type/image' ? (
        <>
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 ">
                  <Label htmlFor="source">Source</Label>
                  <Input
                    type="text"
                    name="source"
                    value={data?.image.src}
                    onChange={(e) => editItem(e.target.value, 'src')}
                    id="source"
                    autoComplete="source"
                  />
                </div>
                <Col>
                  <Label htmlFor="first-name">Width</Label>
                  <Input
                    type="number"
                    name="width"
                    value={data?.image.width}
                    onChange={(e) => editItem(e.target.value, 'width')}
                    id="width"
                    autoComplete="width"
                  />
                </Col>

                <Col>
                  <Label htmlFor="height">Height</Label>
                  <Input
                    type="number"
                    name="height"
                    value={data?.image.height}
                    onChange={(e) => editItem(e.target.value, 'height')}
                    id="height"
                    autoComplete="height"
                  />
                </Col>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default EditSelected
