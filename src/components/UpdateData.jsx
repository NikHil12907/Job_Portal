
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Navbar from "./Header/Navbar.jsx";
import {
  Divider,
  Box,
  Paper,
  Button,
  TextField,
  Grid,
  styled,
  Container,
  Typography,
  CssBaseline,
} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import API_CONFIG from "../config/api.js";
import Credentials from "./Footer/Credentials.jsx";
const UpdateData = () => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    profession: [],
    city: "",
    phone: "",
    email: "",
    dob: "",
    address: "",
    gender: "",
    Education: "",
    institution: "",
    YearOfPassing: "",
    experience: "",
    companyName: "",
    jobTitle: "",
    yearsOfExperience: "",
    responsibilities: "",
    skills: "",
    languages: "",
    linkedIn: "",
    portfolio: "",
    certifications: "",
    prefferdLocation: "",
    expectedSalary: "",
    jobType: "",
    willingToRelocate: false,
    noticePeriod: "",
    startDate: "",
  });
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
  const { user, isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    if (isAuthenticated && user) {
      const email = user.email;
      axios
        .get(`${API_CONFIG.USER_API_URL}/getUserData/${email}`)
        .then((response) => setFormData(response.data))
        .catch((err) => console.log(err));
    }
  }, [isAuthenticated, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = user.email
    axios
      .post(`${API_CONFIG.USER_API_URL}/UpdateUserData`, { ...formData, email })
      .then((response) => {alert("Profile Updated")})
      .catch((err) => console.log("error in fetching data"));
  };

  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <CssBaseline />
      <form onSubmit={handleSubmit}>
      <Box display="flex" justifyContent="center" marginBottom="20px">
       
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
              color="#f50057"
              textAlign="center"
            >
              <i>Personal Profile</i>
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField                  
                  name="fname"
                  label="First Name"
                  autoFocus
                  fullWidth
                  onChange={handleChange}
                  
                  value={formData.fname}
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ffffff" } }} // White label
                  InputProps={{ style: { color: "#ffffff" } }} // White input text
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="lastname"
                  name="lname"
                  label="Last Name"
                  onChange={handleChange}
                  value={formData.lname}
                  fullWidth
                  
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ffffff" } }} // White label
                  InputProps={{ style: { color: "#ffffff" } }} // White input text
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  value={formData.email}
                  fullWidth
                  
                  onChange={handleChange}
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ffffff" } }} // White label
                  InputProps={{ style: { color: "#ffffff" } }} // White input text
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="gender"
                  name="gender"
                  label="gender"
                  value={formData.gender}
                  fullWidth
                  
                  onChange={handleChange}
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ffffff" } }} // White label
                  InputProps={{ style: { color: "#ffffff" } }} // White input text
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="dob"
                  name="dob"
                  label="Date of Birth"
                  value={formData.dob}
                  fullWidth
                  onChange={handleChange}
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ffffff" } }} // White label
                  InputProps={{ style: { color: "#ffffff" } }} // White input text
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="ph"
                  name="phone"
                  label="Contact no"
                  value={formData.phone}
                  fullWidth
                  
                  onChange={handleChange}
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ffffff" } }} // White label
                  InputProps={{ style: { color: "#ffffff" } }} // White input text
                />
              </Grid>
            </Grid>
            <Divider sx={{ marginY: 4, backgroundColor: "#f50057" }} />
            <Typography
              variant="h4"
              gutterBottom
              style={{ marginTop: "40px" }}
              color="secondary"
              textAlign="center"
            >
              <i>Education</i>
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  id="Education"
                  name="Education"
                  value={formData.Education}
                  
                  label="Education"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  InputProps={{ style: { color: "#ffffff" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  label="Name Of Institute"
                  fullWidth
                  
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  InputProps={{ style: { color: "#ffffff" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  id="YOP"
                  name="yearOfPassing"
                  value={formData.YearOfPassing}
                  label="Year of Graduation"
                  fullWidth
                  
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  InputProps={{ style: { color: "#ffffff" } }}
                />
              </Grid>
            </Grid>
            <Divider sx={{ marginY: 4, backgroundColor: "#f50057" }} />
            <Typography
              variant="h4"
              gutterBottom
              style={{ marginTop: "40px" }}
              color="secondary"
              textAlign="center"
            >
              <i>Experience</i>
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  
                  label="Professions"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  InputProps={{ style: { color: "#ffffff" } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  id="responsibilities"
                  name="responsibilities"
                  value={formData.responsibilities}
                  onChange={handleChange}
                  label="Performed Responsibilities"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  InputProps={{ style: { color: "#ffffff" } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleChange}
                  id="yearsOfExperience"
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  
                  label="Years Of Experience"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  InputProps={{ style: { color: "#ffffff" } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  id="willingToRelocate"
                  name="willingToRelocate"
                  value={formData.willingToRelocate}
                  onChange={handleChange}
                  label="Willing to Relocate?"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  InputProps={{ style: { color: "#ffffff" } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="jobType"
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  label="Job Type"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  InputProps={{ style: { color: "#ffffff" } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="noticePeriod"
                  name="noticePeriod"
                  value={formData.noticePeriod}
                  
                  onChange={handleChange}
                  label="Notice Period Date"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  InputProps={{ style: { color: "#ffffff" } }}
                />
              </Grid>
            </Grid>
            
            <Divider sx={{ marginY: 4, backgroundColor: "#f50057" }} />
            <Typography
              variant="h4"
              color="#ffffff"
              display="flex"
              gap={2}
              justifyContent="center"
            >
              {" "}
              Attach Your{" "}
              <Typography color="secondary" variant="h4">
                <i>Resume</i>
              </Typography>
            </Typography>
            <Button
              color="secondary"
              component="label"
              role={undefined}
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload New Resume
              <VisuallyHiddenInput type="file" multiple />
            </Button>
            <Button type="submit" fullWidth color="secondary" sx={{ mt: 2 }} >
              Save Changes
            </Button>
          </Paper>
        
      </Box>
      </form>
      <Credentials/>
          </ThemeProvider>

          </>
  );
};
export default UpdateData;

