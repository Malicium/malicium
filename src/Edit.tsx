import AceEditor from 'react-ace'
import ace from 'ace-builds/src-noconflict/ace'
import './Edit.scss'

import './lib/modes'
import './lib/themes'


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
    fontSize: 16,
    wrapEnabled: true,
    placeholder: 'Type something',
  }

  return (
    <div className='editor-container'>
      <AceEditor
        {...defaultProps}
      />
    </div>
  )
}
