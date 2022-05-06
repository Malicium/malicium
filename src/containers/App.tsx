import './App.scss'
import Draw from './Canvas'
import Edit from './Editor'

export default function App (): JSX.Element {
  return (
    <div className='App'>
      {/* <Edit /> */}
      <Draw />
    </div>
  )
}
