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

const Testinomial = [ {
    name: "Sarah Williams",
    feedback: "The job search experience here was seamless, and I found multiple opportunities quickly!",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    name: "David Brown",
    feedback: "This platform provided me with the right resources to get my first job as a developer.",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Olivia Green",
    feedback: "Excellent interface and powerful job matching tools. Highly recommended!",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    name: "James White",
    feedback: "A fantastic platform that made my career switch much smoother. Great job!",
    avatarUrl: "https://via.placeholder.com/150",
  },
  {
    name: "Emma Black",
    feedback: "I was able to connect with top companies effortlessly thanks to this platform.",
    avatarUrl: "https://via.placeholder.com/150",
  },];

const Testinomials = () =>{
    return(
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Navbar/>
            <Container maxWidth="md" sx={{paddingTop:'50px'}} >
                <Typography variant="h4"  textAlign="center" gutterBottom color="secondary">
                    Testinomials
                </Typography>
                <Typography variant="body1" textAlign="center" gutterBottom color="#ffffff">
                Hear what our users have to say about their experience!
                </Typography>

                <Grid container spacing={4} mt={4}>
                    {Testinomial.map((stories,index)=>(
                        <Grid item xs={12} sm={6} md={6} key={index}>
                            <Card sx={{Width:"500px"}}>
                                <CardContent sx={{textAlign:'center'}}>
                                    <Avatar
                                    alt={stories.name}
                                    sx={{ width: 80, height: 80, margin: '0 auto', marginBottom: '20px', bgcolor:"#f50057" }}
                                    >{stories.name.charAt(0)}</Avatar>
                                        <Typography variant="body2" color="#ffffff" gutterBottom >{stories.name}</Typography>
                                        <Typography variant="h6" color="#ffffff" gutterBottom >{stories.feedback}</Typography>
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

export default Testinomials