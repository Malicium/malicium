import { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import './Select.scss'

interface OptionType {
  [key: string]: string
}

interface PropType {
  name: string
  options: OptionType[]
  selectOption: Function,
}

export default function Select (props: PropType): JSX.Element {
  const { options, name } = props
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = (e: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(null)
    const option:string = e.currentTarget.id
    props.selectOption(option)
  }

  return (
    <div className='select'>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        {options.map((option: OptionType) =>
          <MenuItem
            key={option.path}
            onClick={handleClose}
            id={option.name}
          >
            {option.name}
          </MenuItem>
        )}
      </Menu>
    </div>
  )
}
