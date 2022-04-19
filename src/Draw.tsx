import { useRef, useState } from 'react'
import { saveAs } from 'file-saver';
import CanvasDraw from 'react-canvas-draw'


import './Draw.scss'


export default function Draw () {
  const canvasRef = useRef(null)
  const [dataUrl, saveData] = useState('')
  const draw = () => {
    console.log(canvasRef)
  }

  const undo = () => {
    canvasRef.current.undo()
  }

  const erase = () => {
    canvasRef.current.eraseAll()
  }

  const save = () => {
    canvasRef.current.getSaveData()
    const url = canvasRef.current.getDataURL()
    saveData(url)
  }

  const loadSaved = () => {
    console.log(dataUrl)

    const file = new Blob(dataUrl, 'image.jpg');
    saveAs(file)
  }

  const defaultProps = {
    className: 'canvas',
    ref: canvasRef,
    loadTimeOffset: 5,
    lazyRadius: 0,
    brushRadius: 0,
    catenaryColor: '#aaa',
    hideGrid: true,
  }

  return (
      <div className='canvas-container'>
        
        <ul className='canvas-tools'>
          <li className='button'>
            <img src='./assets/icon-pencil.png' onClick={draw}/>
          </li>
          <li className='button'>
            <img src='./assets/icon-eraser.png' onClick={erase}/>
          </li>
          <li className='button'>
            <img src='./assets/icon-back.png' onClick={undo}/>
          </li>
          <li className='button'>
            <img src='./assets/icon-save.png' onClick={save}/>
          </li>
          <li className='button'>
            <img src='./assets/icon-download.png' onClick={loadSaved}/>
          </li>
        </ul>
        <CanvasDraw
          {...defaultProps}
          onChange={draw}
        />
    </div>
  )
}

