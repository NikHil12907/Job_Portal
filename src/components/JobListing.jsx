
import {
  Modal,
  Fade,
  Backdrop,
  Box,
  Grid,
  Typography,
  ThemeProvider,
  createTheme,
  Card,
  CssBaseline,
  Container,
  TextField,
  Button,
  CircularProgress,
  CardContent,
  CardActions,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Navbar from "./Header/Navbar";


const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [filter, setFilter] = useState(null);
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: 500,
    Height: 500,
    bgcolor: "background.paper",
    boxshadow: 24,
    p: 4,
  };


  

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:4000/api/jobs?query=${searchTerm}`
        );
        const filteredJobs = response.data.filter((job) =>{
          if (filter === "Recommended") {
            return isRecommended(job);
          } else if(filter === "Latest"){
            return isNewJob(job);
          }
           else if (filter === "Full-Time" || filter === "part-Time") {
            return job.Type === filter;
          } else {
            return true;
          }
        }
          
        );

        setJobs(filteredJobs);
        setLoading(false);
      } catch (error) {
        console.error(error);

        setLoading(false);
      }
    };

    fetchJobs();
  }, [searchTerm, filter]); // Update effect only when searchTerm and filter changes

  const isNewJob = (job) =>{
    const today = moment();
    const postingDate = moment(job.DatePosted);
    return today.diff(postingDate, "days") <= 7;
  }

  const isRecommended = (job) =>{
    return job.Sju7alary > "50000";
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.elements.searchInput.value); // Assuming input has an id "searchInput"
  };

  const handleFilter = (type) => {
    setFilter(type); //update Filter
  };

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedJob(null);
    alert("Application submitted");
  };

  return (
    // Theme 
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar/>
      <Container maxWidth="md" bgcolor="background.paper">
        <Box>
          <Typography variant="h5" sx={{marginTop:2}} color="#ffffff" gutterBottom>
            Job Listing
          </Typography>
          {/* Serching Form  */}
          <form onSubmit={handleSearch}>
            <Box display="flex" alignItems="center">
              <TextField
                id="searchInput"
                label="search for Jobs"
                
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                color="secondary"
                margin="normal"
              />
              <Button color="secondary"  type="submit" varint="outlined">
                Search
              </Button>
            </Box>
          </form>

          {/* Filter Buttons */}

          {/* <Button
            sx={{ display: "flex", margin: "20px" }}
            onClick={() => handleFilter("Recommended")}
            variant="outlined"
            color="secondary"
          >
            Recommended
          </Button> */}
          <Button
            sx={{ display: "flex", margin: "20px" }}
            onClick={() => handleFilter("Latest")}
            variant="outlined"
            color="secondary"
          >
            Latest
          </Button>
          <Button
            onClick={() => handleFilter("Full-Time")}
            sx={{ display: "flex", margin: "20px" }}
            variant="outlined"
            color="secondary"
          >
            Full-Time
          </Button>
          <Button
            sx={{ display: "flex", margin: "20px" }}
            onClick={() => handleFilter("part-Time")}
            variant="outlined"
            color="secondary"
          >
            Part-Time
          </Button>

          {/* Job Listing */}
          {loading ? (
            <Box display="flex" justifyContent="center" my={4}>
              <CircularProgress />
            </Box>
          ) : (
            <Grid container spacing={3} my={4}>
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <Grid item xs={12} md={6} sm={6} key={job._id}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" color="secondary">
                          {" "}
                          {job.Title}
                        </Typography>
                        <Typography variant="body1">{job.Company}</Typography>
                        <Typography variant="body2">{job.Location}</Typography>
                        <Typography variant="body2">{job.Type}</Typography>
                        <Typography variant="body2">{job.Salary}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="secondary"
                          variant="outlined"
                          onClick={() => handleOpenModal(job)}
                        >
                          Apply Now
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Box p={3}>
                  <Typography
                    variant="h6"
                    justifyContent="center"
                    display="flex"
                    gap={1}
                    color="#ffffff"
                  >
                    No{" "}
                    <Typography variant="h6" color="secondary">
                      <i>jobs</i>
                    </Typography>{" "}
                    Found
                  </Typography>
                </Box>
              )}
            </Grid>
          )}
          {/* Animated Popup for Apply Now */}
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            closeAfterTransition
          >
            <Fade in={openModal}>
              <Box sx={style}>
                {selectedJob && (
                  <>
                    <Typography variant="h6" color="secondary">
                      Apply for {selectedJob.Title}
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "10px" }}>
                      Company: {selectedJob.Company}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "20px" }}>
                      Location: {selectedJob.Location}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "20px" }}>
                      Salary: {selectedJob.Salary}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={handleCloseModal}
                    >
                      Submit Application
                    </Button>
                  </>
                )}
              </Box>
            </Fade>
          </Modal>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default JobListing;

