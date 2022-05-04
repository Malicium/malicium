import AceEditor from 'react-ace'
import ace from 'ace-builds/src-noconflict/ace'



import './lib/modes'
import { modelist } from './lib/modes'

import './lib/themes'
import { themelist } from './lib/themes'

import Toolbar from './components/Toolbar'

import './Edit.scss'
import './Draw.scss'
import { useState } from 'react'


export default function Edit (): JSX.Element {
  ace.config.set('basePath', 'ace-builds/src')

  const [theme, setTheme] = useState('github')



  const defaultProps = {
    name: 'editor',
    className: 'editor',
    theme: theme,
    mode: 'javascript',
    fontSize: 14,
    wrapEnabled: true,
    placeholder: 'Type something',
    width: '100%',
    height: '100%',
  }

  return (
    <div className='editor-container'>
      <Toolbar
        themes={themelist}
        setTheme={setTheme}
      />
      <AceEditor
        {...defaultProps}
      />
    </div>
  )
}
