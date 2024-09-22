
import {
  Box,
  Grid,
  Typography,
  ThemeProvider,
  createTheme,
  Card,
  Icon,
  CssBaseline,
  CardContent,
  IconButton
} from "@mui/material";
import WorkOutlineTwoToneIcon from "@mui/icons-material/WorkOutlineTwoTone";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import StorageTwoToneIcon from "@mui/icons-material/StorageTwoTone";
import CodeTwoToneIcon from "@mui/icons-material/CodeTwoTone";
import DesignServicesTwoToneIcon from "@mui/icons-material/DesignServicesTwoTone";
import AccountBalanceTwoToneIcon from "@mui/icons-material/AccountBalanceTwoTone";
import { Link } from "react-router-dom";
import { Margin } from "@mui/icons-material";
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
const categories = [
  {
    Title: "Enginnering",
    icon: <CodeTwoToneIcon fontSize="large" />,
    to: "/engineering",
  },
  {
    Title: "HR",
    icon: <PeopleAltTwoToneIcon fontSize="large" />,
    to: "/HR",
  },
  {
    Title: "Finance",
    icon: <AccountBalanceTwoToneIcon fontSize="large" />,
    to: "/Finance",
  },
  {
    Title: "UI/UX",
    icon: <DesignServicesTwoToneIcon fontSize="large" />,
    to: "/design",
  },
  {
    Title: "Databse",
    icon: <StorageTwoToneIcon fontSize="large" />,
    to: "/database",
  },
];
const JobCategory = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ padding: 4 }}>
        <Typography variant="h3" gutterBottom display="flex" gap={3} color="#ffffff">
          <Typography color="secondary" variant="h3"> <i>Job</i></Typography> Categories
        </Typography>
       
        <Box display="flex" justifyContent="center" flexWrap="wrap" gap={3}>
          {categories.map((category, index) => (
            <Link
              to={category.to}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                p={2}
                sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <IconButton sx={{color:"primary.main" ,fontSize: 50}}>
                  {category.icon}
                </IconButton>
                <Typography variant="body1" sx={{mt:1}} color="secondary">
                  {category.Title}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default JobCategory;
