import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Drawer, List, ListItem, ListItemText, useScrollTrigger, Slide, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TopNavbar from "./TopNavbar";
import { NavLink } from "react-router";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({ threshold: 50 });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


const MainNavbar= () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
    

      <HideOnScroll>
     
        <AppBar position="fixed" sx={{ backgroundColor: "#eeeeee",color:"black" }}>
            <TopNavbar></TopNavbar>
        
          <Toolbar >
         
            {/* Logo */}
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <img src="logo.png" className="h-16 p-2" alt="" />
            </Typography>

            {/* Desktop Menu */}
            <div className="desktop-menu" style={{ display: "flex", alignItems: "center" }}>
            <Button color="inherit"> <NavLink to="/">Home</NavLink> </Button>
               <Button color="inherit"> <NavLink to="/aboutus">About Us</NavLink></Button>
    
              <Button color="inherit" onClick={handleMenuOpen} endIcon={<ArrowDropDownIcon />}>
                Services
              </Button>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}>Web Development</MenuItem>
                <MenuItem onClick={handleMenuClose}>App Development</MenuItem>
              </Menu>
              <Button color="inherit">Contact</Button>
            </div>

            {/* Mobile Hamburger Menu */}
            <IconButton edge="end" color="inherit" onClick={toggleMobileMenu} sx={{ display: { sm: "none" } }}>
              <MenuIcon />
            </IconButton>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={mobileOpen} onClose={toggleMobileMenu}>
              <List>
                <ListItem button>
                  <ListItemText primary="Home" />
                </ListItem>
                
                <ListItem button>
                  <ListItemText primary="Services" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Drawer>
          </Toolbar>
          
        </AppBar>
        
      </HideOnScroll>
      <Toolbar /> {/* Push content below AppBar */}
    </>
  );
};

export default MainNavbar;