import { useRef, useState } from 'react'
import CanvasDraw from 'react-canvas-draw'
import './Draw.scss'

export default function Draw (): JSX.Element {
  const canvasRef = useRef(null)
  const urlRef = useRef(null)
  const [dataUrl, saveData] = useState('')

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

  return (
    <div className='canvas-container'>
      <ul className='canvas-toolbar'>
        <li className='button'>
          <img src='./assets/icon-pencil.png' onClick={draw} />
        </li>
        <li className='button'>
          <img src='./assets/icon-eraser.png' onClick={erase} />
        </li>
        <li className='button'>
          <img src='./assets/icon-back.png' onClick={undo} />
        </li>
        <li className='button'>
          <img src='./assets/icon-save.png' onClick={save} />
        </li>
        <li className='button'>
          <img src='./assets/icon-download.png' onClick={download} />
        </li>
      </ul>
      <CanvasDraw
        {...defaultProps}
      />
      <a ref={urlRef} href={dataUrl} download='drawing.png' />
    </div>
  )
}
