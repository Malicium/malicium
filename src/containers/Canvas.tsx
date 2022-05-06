import { useRef, useState } from 'react'
import CanvasDraw from 'react-canvas-draw'
import SelectGroup from '../components/SelectGroup'
import Button from '@mui/material/Button'
import './Canvas.scss'

interface RefType {
  current: any
  appendChild?: any
}

export default function Canvas (): JSX.Element {
  const canvasRef: RefType = useRef(null)
  const urlRef: RefType = useRef(null)
  const [dataUrl, saveData] = useState('')
  const [toolbarVisible, showToolbar] = useState(true)
  const [brushColor, setBrushColor] = useState('#444')
  const [brushRadius, setBrushRadius] = useState(0.5)
  const [brushStyle, setBrushStyle] = useState('none')

  const draw = (): void => {
    console.log('drawing')
    setDrawStyle()
    console.log(canvasRef)
  }

  const undo = (): void => {
    console.log('undoing')
    canvasRef.current.undo()
  }

  const erase = (): void => {
    console.log('erasing')
    setEraserStyle()
  }

  const refresh = (): void => {
    console.log('clearing all')
    if (window.confirm('Are you sure?')) {
      canvasRef.current.eraseAll()
      setDrawStyle()
    }
  }

  const save = (): void => {
    console.log('saving')
    canvasRef.current.getSaveData()
    const url = canvasRef.current.getDataURL()
    saveData(url)
  }

  const download = (): void => {
    console.log('downloading')
    urlRef.current.click()
  }

  const setDrawStyle = (): void => {
    setBrushColor('#444')
    setBrushRadius(0.5)
    setBrushStyle('none')
  }

  const setEraserStyle = (): void => {
    setBrushColor('#fff')
    setBrushRadius(10)
    setBrushStyle('grab')
  }

  const defaultProps = {
    className: 'canvas',
    ref: canvasRef,
    backgroundColor: 'transparent',
    loadTimeOffset: 1,
    lazyRadius: 0,
    brushRadius: brushRadius,
    brushColor: brushColor,
    catenaryColor: '#aaa',
    hideGrid: true,
    style: { cursor: brushStyle }
  }

  return (
    <div className='canvas-container'>
    <SelectGroup 
      func={draw}
    />
    <CanvasDraw
      {...defaultProps}
    />
    <a ref={urlRef} href={dataUrl} download='malicium-drawing.png'>
      <i aria-hidden='true' />
    </a>
    </div>
  )
}
