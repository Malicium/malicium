import { useRef } from 'react'
import './Edit.scss'
import { RefType } from './types'

export default function Edit (): JSX.Element {
  const editorRef: RefType = useRef(null)
  
  const addLine = (e:any): void => {
    e.preventDefault()


    // check caret position



    
    if (e.keyCode === 13) {
      const inputField = document.createElement('input')
      inputField.onkeyup = addLine
      const newLine = document.createElement('div')
      newLine.appendChild(inputField)
      editorRef.current.appendChild(newLine)
      inputField.focus()
    }
  }
  
  return (
    <div className='editor-container' ref={editorRef}>
      <div className='editor'>
        <input onKeyUp={addLine} />
      </div>
    </div>
  )
}
