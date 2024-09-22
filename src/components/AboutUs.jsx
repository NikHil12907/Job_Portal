import {
  Box,
  Divider,
  Paper,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import Navbar from "./Header/Navbar";
import Credentials from "./Footer/Credentials";
import { Link } from "react-router-dom";
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
const AboutUs = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Box display="flex" mt={2} justifyContent="center" marginBottom="20px">
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
            color="#ffffff"
            textAlign="center"
            gutterBottom
            display="flex"
            justifyContent="center"
            gap={1}
          >
            About{" "}
            <Typography variant="h4" color="secondary" gutterBottom>
              Us
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            gutterBottom
            justifyContent="center"
            display="flex"
            gap={1}
          >
            Welcome to
            <Typography variant="body1" color="secondary">
              JobMart
            </Typography>{" "}
            , where we strive to provide the best{" "}
            <Typography variant="body1" color="secondary">
              Jobs
            </Typography>
            . Our mission is to{" "}
            <Typography variant="body1" color="secondary">
              Provide Jobs at your comfort zone
            </Typography>
            .
          </Typography>
          <Divider
            sx={{ marginY: 4, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          />
          <Typography
            variant="h5"
            color="secondary"
            gutterBottom
            textAlign="center"
          >
            Our Mission
          </Typography>
          <Typography variant="body1" color="#ffffff" textAlign="center">
            To create an intuitive, data-driven platform where job seekers can
            discover opportunities tailored to their skill sets and career
            aspirations, while employers can efficiently manage job postings,
            filter candidates, and track applications.
          </Typography>
          <Divider
            sx={{ marginY: 4, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          />
          <Typography
            variant="h5"
            color="secondary"
            gutterBottom
            textAlign="center"
          >
            For Job Seekers
          </Typography>
          <Typography variant="body1" color="#ffffff" textAlign="center">
            We empower individuals by providing personalized job
            recommendations, an easy-to-navigate profile management system, and
            a dynamic search functionality that ensures relevant jobs are always
            just a click away.
          </Typography>
          <Divider
            sx={{ marginY: 4, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          />
          <Typography
            variant="h5"
            color="secondary"
            gutterBottom
            textAlign="center"
          >
            For Employers
          </Typography>
          <Typography variant="body1" color="#ffffff" textAlign="center">
            Our admin dashboard allows companies to effortlessly manage job
            postings, review applicant profiles, and streamline the recruitment
            process with modern tools that reduce time-to-hire.
          </Typography>
          <Divider
            sx={{ marginY: 4, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          />
          <Typography variant="h5" textAlign="center" color="#ffffff">
            For More Detail Go To{" "}
            <Link to="/contact-us" style={{ textDecoration: "none" }}>
              Contact Us
            </Link>{" "}
            Page
          </Typography>
        </Paper>
      </Box>
      <Credentials />
    </ThemeProvider>
  );
};
export default AboutUs;
