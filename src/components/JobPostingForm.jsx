import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Paper,
  Divider
} from "@mui/material";
import axios from "axios";
import API_CONFIG from "../config/api.js";
import Navbar from "./Header/Navbar";
import Credentials from "./Footer/Credentials";
const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
    salary: "",
    type:"",
    Designation: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_CONFIG.JOB_POST_API_URL}/api/job_Post`,
        formData
      );
      alert(response.data.message);
      setFormData({
        title: "",
        description: "",
        company: "",
        location: "",
        salary: "",
        type:"",
        Designation: "",
      });
    } catch (error) {
      alert("Failed to post job");
    }
  };
  return(
    <ThemeProvider theme={darkTheme}>
    
    <CssBaseline />
    <Navbar/>
    <form onSubmit={handleSubmit}>
    <Box display="flex" justifyContent="center" marginBottom="20px" sx={{mt:5}}>
     
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            marginBottom: "20px",
            maxWidth: "80%",
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            color="#ffffff"
            display="flex"
            textAlign="center"
            justifyContent="center"
            gap={1}
          >
            Post <Typography color="secondary" variant="h4" textAlign="center"><i>Job</i></Typography>
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField                  
                name="title"
                label="Job Title"
                fullWidth
                onChange={handleChange}
                value={formData.title}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                
                name="location"
                label="Location"
                onChange={handleChange}
                value={formData.location}
                fullWidth
                
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
               
                name="company"
                label="Company Name"
                value={formData.company}
                fullWidth
                onChange={handleChange}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                
                name="salary"
                label="Salary"
                value={formData.salary}
                fullWidth
                
                onChange={handleChange}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="type"
                label="Job Type"
                value={formData.type}
                fullWidth
                onChange={handleChange}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                name="Designation"
                label="Job Designation"
                value={formData.Designation}
                fullWidth
                onChange={handleChange}
                variant="outlined"
                color="secondary"
              />
            </Grid>
            
          </Grid>
          <Divider sx={{ marginY: 4, backgroundColor: "#f50057" }} />
          
          <Typography
            variant="h4"
            color="#ffffff"
            justifyContent="center"
            display="grid"
            textAlign="center"
          >
            Job{" "}
            <Typography variant="h4" color="secondary">
              <i>Description</i>
            </Typography>{" "}
          </Typography>
          <TextField
            type="textarea"
            fullWidth
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Maximum 500 words"
          />
          <Divider sx={{ marginY: 4, backgroundColor: "#f50057" }} />
          
          <Button type="submit" fullWidth color="secondary" sx={{ mt: 2 }} >
            Add Job
          </Button>
        </Paper>
      
    </Box>
    </form>
    <Credentials/>
        </ThemeProvider>
        
        
     
  )
  
};
export default JobPostingForm;
