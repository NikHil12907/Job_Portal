
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Navbar from "./Header/Navbar.jsx";
import {
  Paper,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Table,
  TableBody,
  CssBaseline,
  Typography,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Credentials from "./Footer/Credentials.jsx";
const Admin = () => {
  
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
        .get(`http://localhost:3000/getUserData/${email}`)
        .then((response) => setFormData(response.data))
        .catch((err) => console.log(err));
    }
  }, [isAuthenticated, user]);

  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <CssBaseline />
      <Typography variant="h5" color="secondary" justifyContent="center" textAlign="center" mt={2}  > User Data Asscoiated with Email</Typography>
      <TableContainer component={Paper}>
             <Table>
                 <TableHead>
                     <TableRow>
                         <TableCell>Email</TableCell>
                         <TableCell>Name</TableCell>
                         <TableCell>Dob</TableCell>
                         <TableCell>Professions</TableCell>
                     </TableRow>
                 </TableHead>
                 <TableBody>
                     {/* {formData.map((user)=>(
                         <TableRow key={user.user_id}>
                             <TableCell>{user.email} </TableCell>
                             <TableCell>{user.name} </TableCell>
                         </TableRow>
                     ))} */}
                     <TableRow>
                      <TableCell>{formData.email}</TableCell>
                      <TableCell>{formData.fname}</TableCell>
                      <TableCell>{formData.dob}</TableCell>
                      <TableCell>{formData.profession}</TableCell>
                     </TableRow>
                 </TableBody>
             </Table>
         </TableContainer>
         <Credentials/>
      </ThemeProvider>
    </>
  );
};
export default Admin;