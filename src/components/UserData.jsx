import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  Grid,
  Container,
  Typography,
  CssBaseline,
  Paper,
  Divider,
  styled,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth0 } from "@auth0/auth0-react";
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

const UserData = () => {
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
  const { user } = useAuth0();
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
    willingToRelocate: "",
    noticePeriod: "",
    startDate: "",
  });

  const [errors, seterrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    //Check For the Frst Name
    if (!formData.fname) {
      tempErrors.fname = "First Name is Required";
    }
    //Check For the Valid Email
    if (!formData.email) {
      tempErrors.email = "Email is Required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      tempErrors.email = "Invalid Email";
    }
    //Check For Valid Mobile number
    if (!formData.phone) {
      tempErrors.phone = "Phone Number is Required";
    } else if (formData.phone.length < 10) {
      tempErrors.phone = "Invalid Phone Number";
    }
    seterrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handlChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      email: user.email,
    };
    if (validate()) {
      axios
        .post("http://localhost:3000/saveUserData", dataToSend)
        .then((response) => {
          alert(response.data);
        })
        .catch((error) => {
          console.log(error.response?.data || error.message);
        });
    }
  };

  return (
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
                  error = {!!errors.fname}
                  onChange={handlChange}
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
                  onChange={handlChange}
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
                  error={!!errors.email}
                  onChange={handlChange}
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
                  
                  onChange={handlChange}
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
                  onChange={handlChange}
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
                  error={!!errors.phone}
                  onChange={handlChange}
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
                  
                  id="Education"
                  name="Education"
                  value={formData.Education}
                  onChange={handlChange}
                  label="Education"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  InputProps={{ style: { color: "#ffffff" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  label="Name Of Institute"
                  fullWidth
                  onChange={handlChange}
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  InputProps={{ style: { color: "#ffffff" } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  id="YOP"
                  name="YearOfPassing"
                  value={formData.YearOfPassing}
                  label="Year of Graduation"
                  fullWidth
                  onChange={handlChange}
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
                  
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handlChange}
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
                  onChange={handlChange}
                  label="Performed Responsibilities"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#ffffff" } }}
                  InputProps={{ style: { color: "#ffffff" } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  id="yearsOfExperience"
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handlChange}
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
                  onChange={handlChange}
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
                  onChange={handlChange}
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
                  onChange={handlChange}
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
              justifyContent="center"
              display="grid"
              textAlign="center"
            >
              Tell us about{" "}
              <Typography variant="h4" color="secondary">
                <i>Yourself</i>
              </Typography>{" "}
            </Typography>
            <TextField
              type="textarea"
              fullWidth
              placeholder="Maximum 500 words"
            />
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
              Upload files
              <VisuallyHiddenInput type="file" multiple />
            </Button>
            <Button type="submit" fullWidth color="secondary" sx={{ mt: 2 }} >
              Complete Profile
            </Button>
          </Paper>
        
      </Box>
      </form>
          </ThemeProvider>
  );
};

export default UserData;
