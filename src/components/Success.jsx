import {
    Card,
    CardContent,
    Typography,
    ThemeProvider,
    createTheme,
    CssBaseline,
    Avatar,
    Container,
    Grid,
    CardMedia
} from "@mui/material"
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

const Succestories = [{
    name: "John Doe",
    jobTitle: "Software Engineer",
    company: "TechCorp",
    quote: "Thanks to this platform, I found my dream job in just two weeks!",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    jobTitle: "Product Manager",
    company: "InnovateX",
    quote: "This site made job hunting easier and faster than ever!",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Alex Johnson",
    jobTitle: "UX Designer",
    company: "Designify",
    quote: "I landed an amazing position thanks to this platform!",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Emily Davis",
    jobTitle: "Data Scientist",
    company: "DataGen",
    quote: "I found an incredible opportunity in data science through this platform.",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Emily Davis",
    jobTitle: "Data Scientist",
    company: "DataGen",
    quote: "I found an incredible opportunity in data science through this platform.",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Michael Lee",
    jobTitle: "DevOps Engineer",
    company: "CloudWorks",
    quote: "This platform connected me with the right companies to grow my career.",
    avatarUrl: "https://via.placeholder.com/150",
  },];

const Success = () =>{
    return(
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Navbar/>
            <Container maxWidth="md" sx={{paddingTop:'50px'}} >
                <Typography variant="h4" textAlign="center" gutterBottom color="#ffffff">
                    Success Stories
                </Typography>
                <Typography variant="body1" textAlign="center" gutterBottom color="#ffffff">
                See how people have found success with our platform!
                </Typography>

                <Grid container spacing={4} mt={4}>
                    {Succestories.map((stories,index)=>(
                        <Grid item xs={12} sm={6} md={6} key={index}>
                            <Card sx={{Width:"300px"}}>
                                <CardContent sx={{textAlign:'center'}}>
                                    <Avatar
                                    alt={stories.name}
                                    sx={{ width: 80, height: 80, margin: '0 auto', marginBottom: '20px', bgcolor:"#f50057" }}
                                    >{stories.name.charAt(0)}</Avatar>
                                        <Typography variant="h6" color="#ffffff" gutterBottom >{stories.name}</Typography>
                                        <Typography variant="h6" color="#ffffff" gutterBottom >{stories.company}</Typography>
                                        <Typography variant="h6" color="#ffffff" gutterBottom >{stories.jobTitle}</Typography>
                                        <Typography variant="body1" color="#ffffff" gutterBottom >"{stories.quote}"</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Credentials/>
        </ThemeProvider>
    )
}

export default Success