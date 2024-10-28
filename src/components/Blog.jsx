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
    CardActions
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
const blogPosts = [
    {
        title: "Latest Trends in Web Development",
        image: "https://th.bing.com/th?id=OIP.fUjMIljIXFm7Q5gOyE_EwQHaFL&w=298&h=209&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        description: "Stay updated with the newest trends in web development, including frameworks, tools, and best practices.",
        link: "#",
      },
      {
        title: "How to Build an Impressive Portfolio",
        image: "https://www.bing.com/th?id=OIP.heGWsFSN26KY_os7Lnvm1gHaEK&w=202&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        description: "Learn the essential tips to create a portfolio that highlights your skills and attracts employers.",
        link: "#",
      },
      {
        title: "Top 10 Questions for Developers",
        image: "https://th.bing.com/th?id=OIP.RrhIomcM2zcrLwTS_8xd7gHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        description: "Prepare for your next job interview with the most common and challenging questions faced by developers.",
        link: "#",
      },
      {
        title: "The Future of Remote Work",
        image: "https://th.bing.com/th?id=OIP.aGXOu562ywaCje0-8yoxjwHaEw&w=311&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        description: "Discover how remote work is shaping the future of the workforce and what it means for you.",
        link: "#",
      },
      {
        title: "Mastering JavaScript in 2024",
        image: "https://th.bing.com/th/id/OIP.9uWqqjg4HRlE5rrICURxZgHaFE?w=228&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Explore the key concepts and advanced topics in JavaScript to elevate your coding skills.",
        link: "#",
      },
      {
        title: "Practices for Writing Clean Code",
        image: "https://th.bing.com/th/id/OIP.2PV99eYqHuspw4x27SGtAAHaEK?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Understand the best practices to write clean, readable, and maintainable code in any programming language.",
        link: "#",
      },
]

const Blog = () =>{
    return(<>
            <Navbar/>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Container maxWidth="lg" sx={{paddingTop:"50px"}}>
                <Typography variant="h4" color="secondary" textAlign="center" gutterBottom>
                    <b>Blogs</b>
                </Typography>
                <Typography variant="body1" textAlign="center" >Explore our latest articles and guides to stay updated on industry trends.</Typography>
                <Grid container spacing={4}>
                    {blogPosts.map((blogs,index)=>(
                        <Grid item mt={2} xs={12} sm={6} md={4} key={index}>
                            <Card >
                                <CardMedia
                                component ="img"

                                sx={{ height: 200, width: '100%' }}
                                image={blogs.image}
                                alt={blogs.title}
                                />
                            <CardContent>
                                <Typography variant="h6" gutterBottom color="secondary">{blogs.title}</Typography>
                                <Typography variant="body1" gutterBottom>{blogs.description}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="secondary" href={blogs.link}>Read More</Button>
                            </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Credentials/>
        </ThemeProvider>
        </>
    )
}

export default Blog;