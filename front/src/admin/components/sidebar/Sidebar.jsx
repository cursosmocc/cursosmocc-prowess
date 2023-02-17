import React from "react";
import menus from "./menu";
import SubMenu from "./SubMenu";
import {
  Divider,
  Drawer,
  List,
  ListSubheader,
} from "@mui/material";
import { Box } from "@mui/material";
const fondo= {
    backgroundColor: "#A3E6A9"
}
const Sidebar = ({
  container,
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
}) => {
 
  const drawer = (
    <div>
      <h3 className="text-center m-5">Navegacion</h3>
      <Divider />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: {fondo} }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            
          </ListSubheader>
        }
      >
        {
            menus.map((menu, index) => {
                return (
            
                     <SubMenu menu={menu} key={index}/>
                
                )
        })
        }
      </List>
    </div>
  );

  return (
    
      
        <Box
        component="nav"
        sx={
            { 
                width: { sm: drawerWidth },
                flexShrink: { sm: 0 },
                bgcolor: "#A3E6A9",
                '& .MuiDrawer-paper': {
                    width: { sm: drawerWidth },
                    boxSizing: 'border-box',
                    backgroundColor: "#A3E6A9",
                    },
            }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
  );
};

export default Sidebar;
