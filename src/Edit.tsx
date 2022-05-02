import AceEditor from 'react-ace'
import ace from 'ace-builds/src-noconflict/ace'
import './Edit.scss'
import './Draw.scss'

import './lib/modes'
import { modelist } from './lib/modes'

import './lib/themes'
import { themelist } from './lib/themes'


export default function Edit (): JSX.Element {
  ace.config.set('basePath', 'ace-builds/src')
  const onChange = (value: string): void => {
    console.log(value)
  }
  const defaultProps = {
    onChange: onChange,
    name: 'editor',
    className: 'editor',
    theme: 'monokai',
    mode: 'javascript',
    fontSize: 14,
    wrapEnabled: true,
    placeholder: 'Type something'
  }

  const switchTheme = (e:any) => {
    console.log(e.target.value)
  }

  return (
    <div className='editor-container'>
      <ul className='editor-toolbar'>
        <li className='button'>
          <select onChange={switchTheme}>
            {themelist.map((theme) => (
              <option key={theme.url} value={theme.name}>{theme.name}</option>
            ))}
          </select>
        </li>

      </ul>
      <AceEditor
        {...defaultProps}
      />
    </div>
  )
}
