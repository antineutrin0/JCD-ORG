import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Slide,
  Collapse,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import TopNavbar from "./TopNavbar";
import { Link, NavLink } from "react-router";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

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
  const [missionAnchorEl, setMissionAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileActivityOpen, setMobileActivityOpen] = useState(false);
  const [mobileMissionOpen, setMobileMissionOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMissionMenuOpen = (event) => {
    setMissionAnchorEl(event.currentTarget);
  };

  const handleMissionMenuClose = () => {
    setMissionAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileActivityOpen(false);
    setMobileMissionOpen(false);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "#eeeeee",
            color: "black",
            boxShadow: 2,
          }}
        >
          <TopNavbar></TopNavbar>

          <Toolbar className="flex justify-between items-center px-2 sm:px-4">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <div className="flex items-center">
                <img
                  src="/logo.png"
                  className="h-12 sm:h-16 p-1 sm:p-2"
                  alt=""
                />

                <Typography
                  variant="h6"
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", sm: "block" },
                    fontSize: { sm: "1.25rem", md: "1.5rem" },
                  }}
                >
                  <span className="text-lg sm:text-xl md:text-2xl font-bold">
                    বাংলাদেশ জাতীয়তাবাদী ছাত্রদল
                  </span>
                </Typography>
              </div>
            </Link>
            {/* Desktop Menu - Shows from md breakpoint and above (>= 900px) */}
            <div className="desktop-menu hidden md:flex items-center space-x-1 lg:space-x-2">
              <Button
                color="inherit"
                className="font-semibold text-black hover:text-blue-600 text-sm lg:text-base"
              >
                <NavLink to="/" className="text-sm lg:text-base">
                  Home
                </NavLink>
              </Button>
              <Button
                color="inherit"
                onClick={handleMenuOpen}
                className="font-semibold text-black text-sm lg:text-base"
                endIcon={<ArrowDropDownIcon />}
              >
                Activity
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem
                  onClick={handleMenuClose}
                  component={NavLink}
                  to="/press-release"
                >
                  Press Release
                </MenuItem>
                <MenuItem
                  onClick={handleMenuClose}
                  component={NavLink}
                  to="/all-notices"
                >
                  Notice
                </MenuItem>
                <MenuItem
                  onClick={handleMenuClose}
                  component={NavLink}
                  to="/blogs"
                >
                  Blogs
                </MenuItem>
              </Menu>

              <Button
                color="inherit"
                onClick={handleMissionMenuOpen}
                className="font-semibold text-black text-sm lg:text-base"
                endIcon={<ArrowDropDownIcon />}
              >
                Mission
              </Button>
              <Menu
                anchorEl={missionAnchorEl}
                open={Boolean(missionAnchorEl)}
                onClose={handleMissionMenuClose}
              >
                <MenuItem
                  onClick={handleMissionMenuClose}
                  component={NavLink}
                  to="/mission"
                >
                  31 Points
                </MenuItem>
                <MenuItem
                  onClick={handleMissionMenuClose}
                  component={NavLink}
                  to="/mission"
                >
                  19 Points
                </MenuItem>
                <MenuItem
                  onClick={handleMissionMenuClose}
                  component={NavLink}
                  to="/vision"
                >
                  Vision 2030
                </MenuItem>
              </Menu>

              <Button
                color="inherit"
                className="font-semibold text-black hover:text-blue-600 text-sm lg:text-base"
              >
                <NavLink to="/committee" className="text-sm lg:text-base">
                  Committee
                </NavLink>
              </Button>
              <Button
                color="inherit"
                className="font-semibold text-black hover:text-blue-600 text-sm lg:text-base"
              >
                <NavLink to="/july-martyrs" className="text-sm lg:text-base">
                  July-Martyrs
                </NavLink>
              </Button>

              <Button
                color="inherit"
                className="font-semibold text-black hover:text-blue-600 text-sm lg:text-base"
              >
                <NavLink to="/aboutus" className="text-sm lg:text-base">
                  About Us
                </NavLink>
              </Button>

              <Button
                color="inherit"
                className="font-semibold text-black hover:text-blue-600 text-sm lg:text-base"
              >
                <NavLink to="/contact" className="text-sm lg:text-base">
                  Contact
                </NavLink>
              </Button>

              {/* Desktop Social Icons */}
              <div className="hidden lg:flex items-center ml-2">
                <IconButton
                  component="a"
                  href="https://www.facebook.com/bangladesh.jcd"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#1877F2", padding: "4px" }}
                  size="small"
                >
                  <FacebookIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="https://l.facebook.com/l.php?u=https%3A%2F%2Fx.com%2Fbdbnp78%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExZjB1T2dBZnAxdkU2alBuOAEeNGe1TOpPoq9hL9TNnVhxoNtw407KoRNFwgScB7a-BDppEzvg-3-9zR3lDiQ_aem_aAbyn_tj7CghvHJzG7vpTA&h=AT2R_5spqIqYyc6nQnnah8CvomM5E14sZ3XKMa3h3gWilkHc1P5yWgUfMBLZYT6t7Wock2K4b5rOboGDGWjoblKe56lEFDrD8cOmIuoAIoy_jdID491_0u2R2vhpSuOZTuMA"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#1DA1F2", padding: "4px" }}
                  size="small"
                >
                  <TwitterIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2F%40bdbnp%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExZjB1T2dBZnAxdkU2alBuOAEedCCISLpt7EnDwTkCkXimqwDSUpGLl-nYBUu3i021CLyU5Dtcvjb-wqU-K5k_aem_tn6jgfXR3qJMnyV1DJft8w&h=AT3xjyCZTyBJCGTrUaNrrpT2vj3f3zknxm8XP_mVjrQIDM0ZPtbsgZtO6_BsVctK9uYZGpmLeo82HM0D1jCnOKLI_b_EJX2zm7uQvNGbzP5IQPpJYM_OytPkjXVmSCM1AJxk"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#FF0000", padding: "4px" }}
                  size="small"
                >
                  <YouTubeIcon />
                </IconButton>
              </div>
            </div>

            {/* Mobile Hamburger Menu - Shows below md breakpoint (< 900px) */}
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleMobileMenu}
              sx={{ display: { xs: "block", md: "none" } }}
              className="ml-2"
            >
              <MenuIcon />
            </IconButton>

            {/* Mobile Drawer */}
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={toggleMobileMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  width: { xs: "100%", sm: 320 },
                  maxWidth: { xs: "100vw", sm: 320 },
                  padding: 2,
                },
              }}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-4 pb-2 border-b">
                  <img src="/logo.png" className="h-12" alt="Logo" />
                  <IconButton onClick={closeMobileMenu}>
                    <CloseIcon />
                  </IconButton>
                </div>

                <List className="flex-1">
                  <ListItem
                    button
                    component={NavLink}
                    to="/"
                    onClick={closeMobileMenu}
                    className="hover:bg-gray-100 rounded-lg mb-1"
                  >
                    <ListItemText
                      primary="Home"
                      primaryTypographyProps={{ fontWeight: "medium" }}
                    />
                  </ListItem>

                  {/* Activity Section */}
                  <ListItem
                    button
                    onClick={() => setMobileActivityOpen(!mobileActivityOpen)}
                    className="hover:bg-gray-100 rounded-lg mb-1"
                  >
                    <ListItemText
                      primary="Activity"
                      primaryTypographyProps={{ fontWeight: "medium" }}
                    />
                    <ArrowDropDownIcon
                      sx={{
                        transform: mobileActivityOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                  </ListItem>

                  {mobileActivityOpen && (
                    <div className="ml-4">
                      <ListItem
                        button
                        component={NavLink}
                        to="/press-release"
                        onClick={closeMobileMenu}
                        className="hover:bg-gray-100 rounded-lg mb-1"
                      >
                        <ListItemText primary="Press Release" />
                      </ListItem>
                      <ListItem
                        button
                        component={NavLink}
                        to="/all-notices"
                        onClick={closeMobileMenu}
                        className="hover:bg-gray-100 rounded-lg mb-1"
                      >
                        <ListItemText primary="Notice" />
                      </ListItem>
                      <ListItem
                        button
                        component={NavLink}
                        to="/blogs"
                        onClick={closeMobileMenu}
                        className="hover:bg-gray-100 rounded-lg mb-1"
                      >
                        <ListItemText primary="Blogs" />
                      </ListItem>
                    </div>
                  )}

                  {/* Mission Section */}
                  <ListItem
                    button
                    onClick={() => setMobileMissionOpen(!mobileMissionOpen)}
                    className="hover:bg-gray-100 rounded-lg mb-1"
                  >
                    <ListItemText
                      primary="Mission"
                      primaryTypographyProps={{ fontWeight: "medium" }}
                    />
                    <ArrowDropDownIcon
                      sx={{
                        transform: mobileMissionOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                  </ListItem>

                  {mobileMissionOpen && (
                    <div className="ml-4">
                      <ListItem
                        button
                        component={NavLink}
                        to="/mission"
                        onClick={closeMobileMenu}
                        className="hover:bg-gray-100 rounded-lg mb-1"
                      >
                        <ListItemText primary="31 Points" />
                      </ListItem>
                      <ListItem
                        button
                        component={NavLink}
                        to="/mission"
                        onClick={closeMobileMenu}
                        className="hover:bg-gray-100 rounded-lg mb-1"
                      >
                        <ListItemText primary="19 Points" />
                      </ListItem>
                      <ListItem
                        button
                        component={NavLink}
                        to="/vision"
                        onClick={closeMobileMenu}
                        className="hover:bg-gray-100 rounded-lg mb-1"
                      >
                        <ListItemText primary="Vision 2030" />
                      </ListItem>
                    </div>
                  )}

                  <ListItem
                    button
                    component={NavLink}
                    to="/committee"
                    onClick={closeMobileMenu}
                    className="hover:bg-gray-100 rounded-lg mb-1"
                  >
                    <ListItemText
                      primary="Committee"
                      primaryTypographyProps={{ fontWeight: "medium" }}
                    />
                  </ListItem>

                  <ListItem
                    button
                    component={NavLink}
                    to="/july-martyrs"
                    onClick={closeMobileMenu}
                    className="hover:bg-gray-100 rounded-lg mb-1"
                  >
                    <ListItemText
                      primary="July-Martyrs"
                      primaryTypographyProps={{ fontWeight: "medium" }}
                    />
                  </ListItem>

                  <ListItem
                    button
                    component={NavLink}
                    to="/aboutus"
                    onClick={closeMobileMenu}
                    className="hover:bg-gray-100 rounded-lg mb-1"
                  >
                    <ListItemText
                      primary="About Us"
                      primaryTypographyProps={{ fontWeight: "medium" }}
                    />
                  </ListItem>

                  <ListItem
                    button
                    component={NavLink}
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="hover:bg-gray-100 rounded-lg mb-1"
                  >
                    <ListItemText
                      primary="Contact"
                      primaryTypographyProps={{ fontWeight: "medium" }}
                    />
                  </ListItem>
                </List>

                {/* Mobile Social Icons */}
                <div className="flex justify-center space-x-4 pt-4 border-t">
                  <IconButton
                    component="a"
                    href="https://www.facebook.com/bangladesh.jcd"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "#1877F2" }}
                  >
                    <FacebookIcon />
                  </IconButton>

                  <IconButton
                    component="a"
                    href="https://l.facebook.com/l.php?u=https%3A%2F%2Fx.com%2Fbdbnp78%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExZjB1T2dBZnAxdkU2alBuOAEeNGe1TOpPoq9hL9TNnVhxoNtw407KoRNFwgScB7a-BDppEzvg-3-9zR3lDiQ_aem_aAbyn_tj7CghvHJzG7vpTA&h=AT2R_5spqIqYyc6nQnnah8CvomM5E14sZ3XKMa3h3gWilkHc1P5yWgUfMBLZYT6t7Wock2K4b5rOboGDGWjoblKe56lEFDrD8cOmIuoAIoy_jdID491_0u2R2vhpSuOZTuMA"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "#1DA1F2" }}
                  >
                    <TwitterIcon />
                  </IconButton>

                  <IconButton
                    component="a"
                    href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2F%40bdbnp%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExZjB1T2dBZnAxdkU2alBuOAEedCCISLpt7EnDwTkCkXimqwDSUpGLl-nYBUu3i021CLyU5Dtcvjb-wqU-K5k_aem_tn6jgfXR3qJMnyV1DJft8w&h=AT3xjyCZTyBJCGTrUaNrrpT2vj3f3zknxm8XP_mVjrQIDM0ZPtbsgZtO6_BsVctK9uYZGpmLeo82HM0D1jCnOKLI_b_EJX2zm7uQvNGbzP5IQPpJYM_OytPkjXVmSCM1AJxk"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "#FF0000" }}
                  >
                    <YouTubeIcon />
                  </IconButton>
                </div>
              </div>
            </Drawer>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar /> {/* Push content below AppBar */}
    </>
  );
};

export default MainNavbar;
