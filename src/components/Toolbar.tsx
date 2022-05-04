import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import './Toolbar.scss'

interface ThemeType {
  [key: string]: string
}

interface PropType {
  themes: ThemeType[]
  setTheme: Function
}

export default function Toolbar (props: PropType): JSX.Element {
  const { themes } = props
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = (e: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(null)
    props.setTheme(e.currentTarget.id)
  }

  return (
    <div className='toolbar'>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='toolbar-item'
      >
        Themes
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        {themes.map((theme: ThemeType) =>
          <MenuItem
            key={theme.path}
            onClick={handleClose}
            className='toolbar-item__dropdown'
            id={theme.name}
          >
            {theme.name}
          </MenuItem>
        )}
      </Menu>
    </div>
  )
}
