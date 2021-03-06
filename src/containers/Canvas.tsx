import { useRef, useState } from 'react'
import CanvasDraw from 'react-canvas-draw'
import './Canvas.scss'

interface RefType {
  current: any
}

interface PropType {
  visible: boolean
}

export default function Canvas (props: PropType): JSX.Element | null {
  const canvasRef: RefType = useRef(null)
  const urlRef: RefType = useRef(null)
  const [dataUrl, saveData] = useState('')
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

  if (!props.visible) {
    return null
  }

  return (
    <div className='canvas-container'>
      <ul className='button-group'>
        <li className='button'>
          <img src='./assets/icon-pencil.png' onClick={draw} alt='draw' />
        </li>
        <li className='button'>
          <img src='./assets/icon-eraser.png' onClick={erase} alt='erase' />
        </li>
        <li className='button'>
          <img src='./assets/icon-back.png' onClick={undo} alt='undo' />
        </li>
        <li className='button'>
          <img src='./assets/icon-refresh.png' onClick={refresh} alt='refresh' />
        </li>
        <li className='button'>
          <img src='./assets/icon-save.png' onClick={save} alt='save' />
        </li>
        <li className='button'>
          <img src='./assets/icon-download.png' onClick={download} alt='download' />
        </li>
      </ul>
      <CanvasDraw
        hideGrid
        className='canvas'
        ref={canvasRef}
        backgroundColor='transparent'
        lazyRadius={0}
        brushRadius={brushRadius}
        brushColor={brushColor}
        catenaryColor='#aaa'
        style={{ cursor: brushStyle }}
      />
      <a ref={urlRef} href={dataUrl} download='malicium-drawing.png'>
        <i aria-hidden='true' />
      </a>
    </div>
  )
}
