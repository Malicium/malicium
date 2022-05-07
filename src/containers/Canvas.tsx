import { useRef, useState } from 'react'
import CanvasDraw from 'react-canvas-draw'
import './Canvas.scss'

type RefType = {
  current: any
}

type PropType = {
  visible: boolean | undefined,
}

export default function Canvas (props:PropType): JSX.Element {
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
    <div className='canvas-container' hidden={!props.visible}>
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
        {...defaultProps}
      />
      <a ref={urlRef} href={dataUrl} download='malicium-drawing.png'>
        <i aria-hidden='true' />
      </a>
    </div>
  )
}
