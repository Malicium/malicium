import AceEditor from 'react-ace'
import ace from 'ace-builds/src-noconflict/ace'

import { modelist } from '../lib/modes'
import '../lib/modes'
import { themelist } from '../lib/themes'

import Select from '../components/Select'

import './Edit.scss'
import './Canvas.scss'
import { useState } from 'react'

export default function Edit (): JSX.Element {
  ace.config.set('basePath', 'ace-builds/src')
  const [theme, setTheme] = useState('github')
  const [mode, setMode] = useState('javascript')
  console.log(mode)
  const defaultProps = {
    name: 'editor',
    className: 'editor',
    theme: theme,
    mode: mode,
    fontSize: 14,
    wrapEnabled: true,
    placeholder: 'Type something',
    width: '100%',
    height: '100%'
  }

  return (
    <div className='editor-container'>
      <div className='editor-menu'>
        <Select
          options={themelist}
          selectOption={setTheme}
          name="Theme"
        />
        <Select
          options={modelist}
          selectOption={setMode}
          name="Mode"
        />
      </div>
      
      <AceEditor
        {...defaultProps}
      />
    </div>
  )
}
