import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const SubMenu = ({menu}) => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
      };
    if(menu.submenus){
        return (
            <div key={menu.id}>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                {menu.icon}
              </ListItemIcon>
              <ListItemText primary={menu.title} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {
                    menu.submenus.map((submenu, index) => {
                        return (
                            <ListItemButton component={Link} to={submenu.path} key={index}>
                                <ListItemIcon>
                                    
                                </ListItemIcon>
                                <ListItemText primary={submenu.title} />
                            </ListItemButton>
                        )
                    })
                }
              </List>
            </Collapse>
          </div>
        )
    }else{
        return (
            <ListItemButton component ={Link} to={menu.path}>
        <ListItemIcon>
          {menu.icon}
        </ListItemIcon>
        <ListItemText primary={menu.title} />
      </ListItemButton>  
  )
    }
}

export default SubMenu