import React from "react";
import "./style.css";
import logo from "./logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = ({ drawerWidth, handleDrawerToggle }) => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "#A3E6A9",
          color: "#000000",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} className="logo-admin" alt="logo" />
          </Typography>
          Administrador
          <button className="logout">
            <LogoutIcon style={{ color: "red" }} />
          </button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
