import { useState } from 'react'
import Switch from '@mui/material/Switch';
import Canvas from './Canvas'
import Editor from './Editor'

import './App.scss'

export default function App (): JSX.Element {
  const [typing, edit] = useState(false)
  const [drawing, draw] = useState(true)

  const setMode = ():void => {
    edit(!typing)
    draw(!drawing)
  }

  return (
    <div className='App'>
      <Switch
        color="default"
        size="small" 
        onChange={setMode}
      />
      <Editor visible={typing} />
      <Canvas visible={drawing}/>
    </div>
  )
}
