import { useRef } from 'react'
import './Edit.scss'
import { RefType } from './types'

export default function Edit (): JSX.Element {
  const editorRef: RefType = useRef(null)

  const countLines = (): void => {
    const lines = editorRef.current.value.split(/\n/)
    console.log(lines.length)
  }
  return (
    <div className='editor-container'>
      <textarea
        className='editor'
        placeholder='Write something.'
        ref={editorRef}
        onChange={countLines}
      />
    </div>
  )
}
