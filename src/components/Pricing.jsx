import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import Navbar from "./Header/Navbar";
import Credentials from "./Footer/Credentials";


const prices = [
  {
    title: "Basic",
    price: "$9.99",
    features: [
      "Access to basic job listings",
      "Resume upload & profile creation",
      "Email notifications for new jobs",
      "Limited customer support",
      "Dedicated support",
    ],
    buttonText: "Get Basic",
  },
  {
    title: "Pro",
    price: "$29.99",
    features: [
      "All Basic features",
      "Priority job application processing",
      "Access to premium job listings",
      "Detailed profile analytics",
      "Dedicated support",
    ],
    buttonText: "Get Pro",
  },
  {
    title: "Enterprise",
    price: "$49.99",
    features: [
      "All Pro features",
      "Unlimited job applications",
      "Access to exclusive enterprise jobs",
      "Personal career advisor",
      "24/7 premium support",
    ],
    buttonText: "Get Enterprise",
  },
];

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

const Pricing = () =>{
    return(
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Navbar/>       
            <Container maxWidth="lg" spacing={4} sx={{mt:4}}>
                <Typography variant="h4" align="center" color="#ffffff"> 
                    Our Pricing Plans
                </Typography>
                <Grid container spacing={4} mt={1}>
                {prices.map((price,index)=>(
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{minHeight:"350px"}}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom color="#ffffff">
                                    {price.title}
                                </Typography>
                                <Typography variant="h4" color="secondary" gutterBottom>
                                    {price.price}
                                </Typography>
                                <ul>
                                    {price.features.map((feature,i)=>(
                                        <Typography key={i} variant="body2" component="li">
                                            {feature}
                                        </Typography>
                                    ))}
                                </ul>

                            </CardContent>
                            <CardActions>
                                <Button fullWidth color="secondary" variant="contained">{price.buttonText}</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                ))}
                </Grid>
            </Container>
            <Credentials/>
        </ThemeProvider>
    )
}

export default Pricing