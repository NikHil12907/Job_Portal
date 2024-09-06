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

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [filter, setFilter] = useState("Recommended");
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
    width: 400,
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
        const filteredJobs = response.data.filter((job) =>
          filter === "Recommended" || filter === "Latest"
            ? job.Type === filter
            : true
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
  };

  return (
    // Theme
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box>
          <Typography variant="h5" component="h1" color="#ffffff" gutterBottom>
            Job Listing
          </Typography>
          {/* Serching Form  */}
          <form onSubmit={handleSearch}>
            <Box display="flex" alignItems="center">
              <TextField
                id="searchInput"
                label="search for Jobs"
                variant="standard"
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                margin="normal"
              />
              <Button type="submit" varint="h5">
                Search
              </Button>
            </Box>
          </form>

          {/* Filter Buttons */}
          <div style={{ marginTop: "20px",  }}>
            <Button
              onClick={() => handleFilter("Recommended")}
              variant="outlined"
              color="secondary"
              
              
            >
              Recommended
            </Button>
            <Button onClick={() => handleFilter("Latest")} variant="outlined" color="secondary">
              Latest
            </Button>
            <Button
              onClick={() => handleFilter("Full-Time")}
              variant="outlined"
              color="secondary"
            >
              Full-Time
            </Button>
            <Button
              onClick={() => handleFilter("Part-Time")}
              variant="outlined"
              color="secondary"
            >
              Part-Time
            </Button>
          </div>

          {/* Job Listing */}
          {loading ? (
            <Box display="flex" justifyContent="center" my={4}>
              <CircularProgress />
            </Box>
          ) : (
            <Grid container spacing={3} my={4}>
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <Grid item xs={12} md={4} sm={6} key={job._id}>
                    <Card>
                      <CardContent>
                        <Typography variant="h5"> {job.Title}</Typography>
                        <Typography variant="body2">{job.Company}</Typography>
                        <Typography variant="body2">{job.Location}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          variant="contained"
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
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
          >
            <Fade in={openModal}>
              <Box sx={style}>
                {selectedJob && (
                  <>
                    <Typography variant="h6">
                      Apply for {selectedJob.Title}
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "10px" }}>
                      Company: {selectedJob.Company}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "20px" }}>
                      Location: {selectedJob.Location}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
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
