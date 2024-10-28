import axios from "axios";
import {
  Container,
  ThemeProvider,
  Box,
  Grid,
  Typography,
  createTheme,
  CssBaseline,
  TextField,
  Button,
  IconButton,
  
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import Navbar from "./Header/Navbar";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isRegister, setIsRegister] = useState(false);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate("/")
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegister
      ? "http://localhost:5000/admin/register"
      : "http://localhost:5000/admin/login";
    try {
      const response = await axios.post(url, formData);
      alert(response.data.message);
      navigate("/admin")
      
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar/>
      
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            background:"linear-gradient(135deg, black 50%, #c1616f 50%)",
            
            padding: 3,
            boxShadow: 3,
            borderRadius: 2,
            
          }}
        >
          <Typography variant="h4" gutterBottom>
            {isRegister ? (
              <Typography variant="h4" color="white" display="flex" gap={2}>
                Admin <Typography variant="h4" color="secondary" sx={{textDecoration:""}}><i>Register</i></Typography>
              </Typography>
            ) : (
              <Typography variant="h4" color="white" display="flex" gap={2}>
                Admin <Typography variant="h4" color="secondary" sx={{textDecoration:""}}><i>Login</i></Typography>
              </Typography>
            )}
          </Typography>
          <form onSubmit={handleSubmit} >
            <Grid container spacing={2}>
              <Grid item>
                <IconButton edge="start" >
                  <AccountCircle />
                </IconButton>
              </Grid>
              <Grid item xs>
                <TextField
                  
                  color="secondary"
                  variant="standard"
                  fullWidth
                  label="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  name="username"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} display="flex" alignItems="flex-end">
              
              <Grid item>
                <IconButton edge="start" >
                  <AccountCircle />
                </IconButton>
              </Grid>
              <Grid item xs >
                <TextField
                  fullWidth
                  sx={{ marginTop: 2 }}
                  variant="standard"
                  color="secondary"
                  name="password"
                  label="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              sx={{
                marginTop:4
              }}
              fullWidth
            >
              {isRegister ? "Register"  : "Login"}
            </Button>

            <Button
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Button>
          </form>
        </Box>
      
    </ThemeProvider>
  );
};

export default AdminRegister;
