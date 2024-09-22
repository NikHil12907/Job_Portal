
import React from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useState } from "react";

const Featured = () => {
  const [currentindex, setCurrentIndex] = useState(0);
  const JobCards = [
    {
      title: "Software Engineer",
      company: "Stark Inc.",
      Description:
        "Seeking a talented software engineer to join our growing team. Experience with React and Node.js required.",
      type: "Full-Time",
      salary: "80k-100k",
    },
    {
      title: "Product Designer",
      company: "Global Inc.",
      Description:
        "We're looking for a talented product designer to join our team and help shape the future of our platform.",
      type: "Full-Time",
      salary: "80k-100k",
    },
    {
      title: "Data Scientist",
      company: "Data Inc.",
      Description:
        "We need a data scientist to help us manage and interpret large datasets. Python and SQL experience required.",
      type: "Part-Time",
      salary: "70k-90k",
    },
    {
      title: "UX/UI Designer",
      company: "Creative Co.",
      Description:
        "Looking for a creative UX/UI Designer with experience in mobile and web applications.",
      type: "Full-Time",
      salary: "75k-95k",
    },
    {
      title: "Project Manager",
      company: "BuildCorp",
      Description:
        "Experienced project manager needed for a fast-paced environment. PMP certification preferred.",
      type: "Full-Time",
      salary: "85k-105k",
    },
  ];
  const theme = createTheme({
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

  const cardToShow = 2;

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardToShow >= JobCards.length ? 0 : prevIndex + cardToShow
    );
  };
  const handlePrevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? JobCards.length - cardToShow
        : prevIndex - cardToShow < 0
        ? 0
        : prevIndex - cardToShow
    );
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ padding: 5, textAlign: "left", mb:5 }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: "#ffffff", display: "flex", gap: 2 }}
          >
            Featured{" "}
            <Typography variant="h3" color="secondary" sx={{ display: "flex" }}>
              {" "}
              <i>Jobs</i>{" "}
            </Typography>
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            overflow="hidden"
            sx={{ width: "100%", position: "relative" }}
          >
            <Box
              display="flex"
              sx={{
                width: `${(100 * JobCards.length) / cardToShow}%`, // Adjust width to fit all cards
                transition: "transform 0.5s ease-in-out",
                transform: `translateX(-${(currentindex * 100) / cardToShow}%)`,
              }}
            >
              {JobCards.map((card, index) => (
                <Box
                  key={index}
                  className="jobCards uk-card uk-card-secondary uk-card-body"
                  sx={{
                    padding: 2,
                    borderRadius: 2,
                    minWidth: `calc(75% / ${cardToShow})`, // Adjust the width here
                    textAlign: "left",
                    boxShadow: 3,
                    backgroundColor: "#333",
                    color: "#fff",
                    marginLeft: index === 0 ? 0 : 2, // Space between cards
                    transition: "transform 1s ease-in-out", // Simple transition effect
                  }}
                >
                  {" "}
                  <Typography gutterBottom variant="h5">
                    {card.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {card.company}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: 2 }}>
                    {card.Description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: 2,
                    }}
                  >
                    <WorkIcon sx={{ marginRight: 1 }} />
                    <Typography variant="body2">{card.type}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: 1,
                    }}
                  >
                    <AttachMoneyIcon sx={{ marginRight: 1 }} />
                    <Typography variant="body2">{card.salary}</Typography>
                  </Box>
                  <Box sx={{ textAlign: "right", marginTop: 2 }}>
                    <Button variant="contained" color="secondary">
                      Apply Now
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Box mr={2} display="flex" justifyContent="center">
            <Button
              variant="container"
              color="secondary"
              onClick={handlePrevCard}
              sx={{ mr:5, mt:5 }}
            >
              Previous
            </Button>
            <Button
              variant="container"
              color="secondary"
              onClick={handleNextCard}
              sx={{ mr:5, mt:5 }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Featured;

