import { useRef, useState } from 'react'
import CanvasDraw from 'react-canvas-draw'
import './Draw.scss'

export default function Draw (): JSX.Element {
  const canvasRef = useRef(null)
  const urlRef = useRef(null)
  const [dataUrl, saveData] = useState('')
  const [toolbarVisible, showToolbar] = useState(false)

  const draw = (): void => {
    console.log('drawing')
    console.log(canvasRef)
  }

  const undo = (): void => {
    console.log('undoing')
    canvasRef.current.undo()
  }

  const erase = (): void => {
    console.log('erasing')
    canvasRef.current.eraseAll()
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

  const hover = (): void => {
    showToolbar(true)
  }

  const away = (): void => {
    showToolbar(false)
  }

  const toolbarOpacity = toolbarVisible ? 0.6 : 0
  const defaultProps = {
    className: 'canvas',
    ref: canvasRef,
    backgroundColor: 'transparent',
    loadTimeOffset: 1,
    lazyRadius: 0,
    brushRadius: 0,
    catenaryColor: '#aaa',
    hideGrid: true
  }
  console.log(toolbarVisible)
  return (
    <div className='canvas-container'>
      <ul className='canvas-toolbar' onMouseEnter={hover} onMouseLeave={away} style={{ opacity: toolbarOpacity }}>
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
          <img src='./assets/icon-save.png' onClick={save} alt='save' />
        </li>
        <li className='button'>
          <img src='./assets/icon-download.png' onClick={download} alt='download' />
        </li>
      </ul>
      <CanvasDraw
        {...defaultProps}
      />
      <a ref={urlRef} href={dataUrl} download='drawing.png' />
    </div>
  )
}
