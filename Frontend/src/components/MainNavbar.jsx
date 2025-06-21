import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Drawer, List, ListItem, ListItemText, useScrollTrigger, Slide, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TopNavbar from "./TopNavbar";
import { NavLink } from "react-router";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
            <Button color="inherit" className="font-semibold text-black hover:text-blue-600">
                    <NavLink to="/" className="text-base">Home</NavLink>
                  </Button>

                  <Button color="inherit" className="font-semibold text-black hover:text-blue-600">
                    <NavLink to="/press-release" className="text-base">Press Release</NavLink>
                  </Button>
                  <Button color="inherit" className="font-semibold text-black hover:text-blue-600">
                    <NavLink to="/mission" className="text-base">Mission</NavLink>
                  </Button>
                  <Button color="inherit" className="font-semibold text-black hover:text-blue-600">
                    <NavLink to="/aboutus" className="text-base">About Us</NavLink>
                  </Button>

                  <Button
                    color="inherit"
                    onClick={handleMenuOpen}
                    className="font-semibold text-black hover:text-blue-600"
                  >
                    Committee
                  </Button>

                  <Button color="inherit" className="font-semibold text-black hover:text-blue-600">
                    <NavLink to="/news" className="text-base">News</NavLink>
                  </Button>

                  <Button color="inherit" className="font-semibold text-black hover:text-blue-600">
                    <NavLink to="/contact" className="text-base">Contact</NavLink>
                  </Button>

              <IconButton
              component="a"
              href="https://www.facebook.com/bangladesh.jcd"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#1877F2" }} // Facebook Blue
            >
              <FacebookIcon fontSize="large" />
            </IconButton>

            <IconButton
              component="a"
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fx.com%2Fbdbnp78%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExZjB1T2dBZnAxdkU2alBuOAEeNGe1TOpPoq9hL9TNnVhxoNtw407KoRNFwgScB7a-BDppEzvg-3-9zR3lDiQ_aem_aAbyn_tj7CghvHJzG7vpTA&h=AT2R_5spqIqYyc6nQnnah8CvomM5E14sZ3XKMa3h3gWilkHc1P5yWgUfMBLZYT6t7Wock2K4b5rOboGDGWjoblKe56lEFDrD8cOmIuoAIoy_jdID491_0u2R2vhpSuOZTuMA"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#1DA1F2" }} // Twitter Blue
            >
              <TwitterIcon fontSize="large" />
            </IconButton>

            <IconButton
              component="a"
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2F%40bdbnp%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExZjB1T2dBZnAxdkU2alBuOAEedCCISLpt7EnDwTkCkXimqwDSUpGLl-nYBUu3i021CLyU5Dtcvjb-wqU-K5k_aem_tn6jgfXR3qJMnyV1DJft8w&h=AT3xjyCZTyBJCGTrUaNrrpT2vj3f3zknxm8XP_mVjrQIDM0ZPtbsgZtO6_BsVctK9uYZGpmLeo82HM0D1jCnOKLI_b_EJX2zm7uQvNGbzP5IQPpJYM_OytPkjXVmSCM1AJxk"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#FF0000" }} // YouTube Red
            >
              <YouTubeIcon fontSize="large" />
            </IconButton>


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