import './App.scss'
import Draw from './Draw'

export default function App (): JSX.Element {
  return (
    <div className='App'>
      <Draw />
      {/* <div className='editor-container'}>
        <textarea className='editor' placeholder='Write something.' />
      </div> */}
    </div>
  )
}
