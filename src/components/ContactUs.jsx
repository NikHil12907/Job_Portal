import {
  Box,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Paper,
  Divider
} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import Navbar from "./Header/Navbar";
import Credentials from "./Footer/Credentials";
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
const ContactUs = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Box display="flex" mt={10} justifyContent="center" marginBottom="20px">
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
            gutterBottom
            textAlign="center"
          >
            Want To <Typography variant="h4" color="secondary" gutterBottom>
              Contact Us
            </Typography>
          </Typography>
          <Typography textAlign="center" variant="body1" color="#ffffff">
            If You like the design of Website and want to create Your own here is how u can reach to me
          </Typography>
          <Divider
            sx={{ marginY: 4, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          />
          <Box justifyContent="center" display="flex" gap={5}>
          <Typography justifyContent="center" display="flex" variant="h5" color="secondary"><a href="https://www.instagram.com/n.i.k._.__/" style={{color:"#f50057"}}><InstagramIcon fontSize="large"/></a></Typography>
          <Typography variant="h5" color="secondary" textalign="center" display="flex"><a href="https://github.com/NikHil12907/NIKHIL1234GD" style={{color:"#f50057"}}><GitHubIcon fontSize="large"/></a></Typography>
          <Typography variant="h5" color="secondary" textalign="center" display="flex"><a href="https://www.linkedin.com/in/nikhil-pitroda-071b3a306/" style={{color:"#f50057"}}><LinkedInIcon fontSize="large"/></a></Typography>
          <Typography variant="h5" color="secondary" textalign="center" display="flex"><a href="https://x.com/NIKHIL604657374" style={{color:"#f50057"}}><XIcon fontSize="large"/></a></Typography>
          </Box>
        </Paper>
      </Box>
          <Credentials/>
    </ThemeProvider>
  );
};

export default ContactUs;
