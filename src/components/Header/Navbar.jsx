import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@mui/system";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  createTheme,
  Button,
  Container
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";


function Navbar() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
      text: {
        primary: "#ffffff",
      },
    },
  });

  const [anchorE1, setAnchorE1] = useState(null);
  const [isprofileComplete, setIsProfileComplete] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const open = Boolean(anchorE1);
  useEffect(() => {
    // Fetch the user profile from your MongoDB API
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getUserData/:pitrodanikhil139@gmail.com');
        const profileData = response.data;

        // Check if the necessary fields are filled
        if (profileData.fname && profileData.email ) {
          setIsProfileComplete(true);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchProfile();
  },[])
  const menu = [
    {
      id: 1,
      name: "Find Job",
      link: "/find-job",
    },
    {
      id: 2,
      name: "Post Job",
      link: "/post-job",
    },
    {
      id: 3,
      name: "About Us",
      link: "/about-us",
    },
    {
      id: 4,
      name: "Contact Us",
      link: "/contact-us",
    },
    {
      id: 5,
      name: "Employer",
      link: "/employer",
    },
  ];
  isAuthenticated || isprofileComplete
    ? menu.push({
        id: 6,
        name: "Update Profile",
        link: "/update-profile",
      })
    : menu.push({
      id: 6,
      name: "Complete Profile",
      link: "/complete-profile"
    });
  const handleMenu = (event) => {
    setAnchorE1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
  };

  return (
    
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxwidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
            >
              JobMart
            </Typography>
            <Box
              sx={{ display: {xs:"none",md:"flex"}, flexGrow: 1, justifyContent: "left", gap:2 }}
            >
              {menu.map((item) => (
                <Button
                  key={item.id}
                  component={Link}
                  to={item.link}
                  color="inherit"
                >
                  {item.name}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                anchorE1={anchorE1}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                {menu.map((items) => (
                  <MenuItem
                    key={items.id}
                    component={Link}
                    to={items.link}
                    onClick={handleClose}
                  >
                    {items.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {isAuthenticated ? (
              <Button
                color="inherit"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </Button>
            ) : (
              <Button color="inherit" onClick={loginWithRedirect}>
                Login
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
