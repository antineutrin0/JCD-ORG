import React, { useState } from "react";
import { Toolbar, Button, Menu, MenuItem, Box } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const TopNavbar = () => {
  const [languageMenu, setLanguageMenu] = useState(null);

  const handleLanguageMenuOpen = (event) => {
    setLanguageMenu(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageMenu(null);
  };

  return (
    <Box 
      sx={{ 
        height: 25,  
        backgroundColor: "#006a4d", 
        color:"white",
        display: "flex", 
        alignItems: "center", 
        justifyContent: "flex-end", 
        px: 2 
      }}
    >
      <Toolbar sx={{ minHeight: "unset", width: "100%", justifyContent: "flex-end", gap: 2 }}>
        <Button color="inherit" sx={{ fontSize: { xs: "0.8rem", sm: "1rem" }, textTransform: "none" }}>
          Join Us
        </Button>
        <Button color="inherit" sx={{ fontSize: { xs: "0.8rem", sm: "1rem" }, textTransform: "none" }}>
          Login
        </Button>
        <Button 
          color="inherit" 
          onClick={handleLanguageMenuOpen} 
          endIcon={<ArrowDropDownIcon />} 
          sx={{ fontSize: { xs: "0.8rem", sm: "1rem" }, textTransform: "none" }}
        >
          Language
        </Button>
        <Menu anchorEl={languageMenu} open={Boolean(languageMenu)} onClose={handleLanguageMenuClose}>
          <MenuItem onClick={handleLanguageMenuClose}>বাংলা</MenuItem>
          <MenuItem onClick={handleLanguageMenuClose}>English</MenuItem>
        </Menu>
      </Toolbar>
    </Box>
  );
};

export default TopNavbar;
