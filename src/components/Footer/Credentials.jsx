import {
  Box,
  Grid,
  Typography,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Link as MuiLink,
  Divider
} from "@mui/material";
import NavigationTwoToneIcon from "@mui/icons-material/NavigationTwoTone";
import { Link as routerLink } from "react-router-dom";
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

const Credentials = () => {
  const scrollToTop = () => window.scroll({ top: 0, behavior: "smooth" });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Divider sx={{ marginY: 4, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
      <Box sx={{ padding: "40px 20px",  }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <Box sx={{ flex: "1 1 100px" }}>
            <Typography variant="h5" color="#ffffff">JobMart</Typography>
            <Typography variant="body2">
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                Jobs
              </MuiLink>
            </Typography>
            <Typography variant="body2">
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                Review
              </MuiLink>
            </Typography>
            <Typography variant="body2">
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                Job Listing
              </MuiLink>
            </Typography>
            <Typography variant="body2">
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                Employer
              </MuiLink>
              </Typography>
            <Typography variant="body2">
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                Team
              </MuiLink>
            </Typography>
          </Box>
          <Box sx={{ flex: "1 1 200px" }}>
            <Typography variant="h5" color="#ffffff">About Us</Typography>
            <Typography variant="body2" >
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                About Us
              </MuiLink>
            </Typography>
            <Typography variant="body2" >
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                Contact Us
              </MuiLink>
            </Typography>
            <Typography variant="body2" >
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                Team
              </MuiLink>
            </Typography>
            <Typography variant="body2">
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                Terms and conditions
              </MuiLink>
            </Typography>
            <Typography variant="body2">
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                Norms
              </MuiLink>
            </Typography>
            <Typography variant="body2">
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                Privacy Policy
              </MuiLink>
            </Typography>
            <Typography variant="body2">
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                About company
              </MuiLink>
            </Typography>
          </Box>
          <Box sx={{ flex: "1 1 100px" }}>
            <Typography variant="h5" color="#ffffff">Developers</Typography>
            <Typography variant="body2" >
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                About Developer
              </MuiLink>
            </Typography>
            <Typography variant="body2" >
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                Contact Developer
              </MuiLink>
            </Typography>
            <Typography variant="body2" >
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                Teams
              </MuiLink>
            </Typography>
            <Typography variant="body2">
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                Pricing
              </MuiLink>
            </Typography>
            <Typography variant="body2">
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                Norms
              </MuiLink>
            </Typography>
            <Typography variant="body2">
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                Privacy Policy
              </MuiLink>
            </Typography>
            <Typography variant="body2">
              <MuiLink
                component={routerLink}
                to="#"
                color="secondary"
                underline="none"
              >
                About company
              </MuiLink>
            </Typography>
          </Box>
          
        </Box>
        <Divider sx={{ marginY: 4, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
          <Typography variant="h5" color="#ffffff" textAlign="center" ><b><i>Thank You For Visiting</i></b></Typography>
      </Box>
      
    </ThemeProvider>
  );
};
export default Credentials;
