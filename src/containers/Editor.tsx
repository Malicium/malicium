import AceEditor from 'react-ace'
import ace from 'ace-builds/src-noconflict/ace'

import { modelist } from '../lib/modes'
import { themelist } from '../lib/themes'

import Select from '../components/Select'

import './Editor.scss'
import './Canvas.scss'
import { useState } from 'react'

type PropType = {
  visible: boolean | undefined
}

export default function Edit (props:PropType): JSX.Element {
  ace.config.set('basePath', 'ace-builds/src')
  const [theme, setTheme] = useState('github')
  const [mode, setMode] = useState('javascript')

  return (
    <div className='editor-container' hidden={!props.visible}>
      <div className='editor-menu'>
        <Select
          options={themelist}
          selectOption={setTheme}
          name='Theme'
        />
        <Select
          options={modelist}
          selectOption={setMode}
          name='Mode'
        />
      </div>
      <AceEditor
        name='editor'
        className='editor'
        theme={theme}
        mode={mode}
        fontSize={14}
        wrapEnabled={true}
        placeholder='Type something'
        width='100%'
        height='100%'
      />
    </div>
  )
}
