import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Paper,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import axios from "axios";
import API_CONFIG from "../config/api.js";
import Credentials from "./Footer/Credentials";
import Navbar from "./Header/Navbar";

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

const DeleteProfile = () => {
  const [formData, setFormData] = useState({
    email: "",
    feedback: "",
    rating: "",
  });

  const deleteUser = async () => {
    try {
      const { email, feedback, rating } = formData;
      const response = await axios.post(`${API_CONFIG.USER_API_URL}/Delete-user`, {
        email,
        feedback,
        rating,
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Error in deleting the user", error);
      alert("Not deleted");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar/>
      <Box display="flex" mt={5}  justifyContent="center" marginBottom="20px">
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            marginBottom: "20px",
            maxWidth: "80%",
            width: "100%",
          }}
        >
          <Typography variant="h4" color="#ffffff" display="flex" gap={1} gutterBottom justifyContent="center">
            Delete <Typography variant="h4" color="secondary" ><i>Profile</i></Typography>
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                name="email"
                label="Email"
                fullWidth
                onChange={handleChange}
                value={formData.email}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="feedback"
                label="reason"
                fullWidth
                onChange={handleChange}
                value={formData.feedback}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="rating"
                label="How would you rate our website"
                fullWidth
                onChange={handleChange}
                value={formData.rating}
                variant="outlined"
                color="secondary"
              />
            </Grid>
          </Grid>
            <Button color="secondary" variant="contained" fullWidth sx={{mt:2}} onClick={deleteUser}>
              Delete Profile
            </Button>
        </Paper>
      </Box>
            <Typography variant="h3" color="#ffffff" textAlign="center"><Typography variant="h3" color="secondary"><i>Thank You</i></Typography> For Choosing Us</Typography>
      <Credentials/>
    </ThemeProvider>
  );
};
export default DeleteProfile;
