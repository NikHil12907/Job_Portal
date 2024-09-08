import React from "react";
import { Box, Typography, Button, Container, TextField, InputAdornment, colors } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider, createTheme } from "@mui/material";
import { CssBaseline } from "@mui/material"; 
const HeroSection = () => {
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
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>  
    <Container maxWidth="lg">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="50vh"
        textAlign="center"
        sx={{
          backgroundColor: "background.default",
          color: "#ffffff",
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" gutterBottom sx={{color:"#ffffff"}}>
          Find Your <Typography color="secondary" variant="h3"><i>Dream</i></Typography>   Job Here
        </Typography>
        <Typography variant="h6" mb={3} sx={{color:"#ffffff"}} >
          Search through thousands of job listings and find the perfect fit for you.
        </Typography>
        <Box display="flex" alignItems="center">
          <TextField
            placeholder="Search..."
            variant="outlined"
            sx={{
              backgroundColor: "background.paper",
              borderRadius: 1,
              marginRight: 1,
              input: { color: "text.primary" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="secondary" />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" color="secondary">
            Search
          </Button>
        </Box>
      </Box>
    </Container>
    </ThemeProvider>
  );
};

export default HeroSection;
