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


const MainNavbar = () => {
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

        <AppBar position="fixed" sx={{ backgroundColor: "#eeeeee", color: "black" }}>
          <TopNavbar></TopNavbar>

          <Toolbar >

            {/* Logo */}
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <img src="logo.png" className="h-16 p-2" alt="" />
            </Typography>
            
            <Typography variant="h6" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <span className="text-2xl font-bold">বাংলাদেশ জাতীয়তাবাদী ছাত্রদল</span>
               </Link>
             </Typography>
            {/* Desktop Menu */}
            <div className="desktop-menu" style={{ display: "flex", alignItems: "center" }}>
              <Button color="inherit"> <NavLink to="/">Home</NavLink> </Button>
              <Button color="inherit"> <NavLink to="/aboutus">About Us</NavLink></Button>

              <Button color="inherit" onClick={handleMenuOpen} endIcon={<ArrowDropDownIcon />}>
                Committee
              </Button>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                {/* Central Committee */}
                <MenuItem onClick={handleMenuClose}>
                  <NavLink to="/committee/central-committee">Central Committee</NavLink>
                </MenuItem>

                {/* District Committee */}
                <MenuItem onClick={handleMenuClose}>
                  <NavLink to="/committee/district-committee">District Committee</NavLink>
                </MenuItem>

                {/* University Units */}
                <MenuItem onClick={handleMenuClose}>
                  <NavLink to="/committee/public-university-committee">Public University Unit</NavLink>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <NavLink to="/committee/private-university-committee">Private University Unit</NavLink>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <NavLink to="/committee/govt-college-committee">Govt. College/Madrasha</NavLink>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <NavLink to="/committee/medical-college-committee">Medical College Unit</NavLink>
                </MenuItem>

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