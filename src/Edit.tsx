import AceEditor from "react-ace"
import ace from 'ace-builds/src-noconflict/ace'
import './Edit.scss'

import 'brace/mode/javascript';
import 'brace/mode/plain_text';

import 'brace/theme/monokai';
import 'brace/theme/textmate';
import 'brace/theme/github';
import 'brace/theme/twilight';

import 'brace/snippets/javascript';
import 'brace/ext/language_tools';



export default function Edit (): JSX.Element {
  ace.config.set('basePath', 'ace-builds/src')
  const onChange = (value:any) => {
  }

  const defaultProps = {
    onChange: onChange,
    name: "editor",
    className: "editor",
    // editorProps: {$blockScrolling: true},
    theme: 'github',
    mode: 'javascript',
    wrapEnabled:true,
    placeholder: 'Type something'
  }
  
  return (
    <div className='editor-container'>
      <AceEditor
        {...defaultProps}
      />
    </div>
  )
}
