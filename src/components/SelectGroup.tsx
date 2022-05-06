import Select from "./Select";
import './SelectGroup.scss'

type PropType = {
  func: Function
}

export default function SelectGroup (props: PropType): JSX.Element {
 return (
  <ul className='select-group'>
    <li>
      <Select
        name="draw"
        options={[{name: 'draw', path: ''}]}
        selectOption={props.func}>
        <img src='./assets/icon-pencil.png' alt='draw' />
      </Select>
    </li>
    <li className='button'>
      <Select
        name="erase"
        options={[{name: 'erase', path: ''}]}
        selectOption={props.func}>
        <img src='./assets/icon-eraser.png' alt='draw' />
      </Select>
    </li>
        {/* 
        <li className='button'>
          <img src='./assets/icon-back.png' onClick={undo} alt='undo' />
        </li>
        <li className='button'>
          <img src='./assets/icon-refresh.png' onClick={refresh} alt='refresh' />
        </li>
        <li className='button'>
          <img src='./assets/icon-save.png' onClick={save} alt='save' />
        </li>
        <li className='button'>
          <img src='./assets/icon-download.png' onClick={download} alt='download' />
        </li> */}
  </ul>
 )
}