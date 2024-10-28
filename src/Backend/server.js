import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

//Step 1 Express server initialized
const app = express();
const port = 3000;

//Step 2 Middlerware setupd
app.use(bodyParser.json());
app.use(cors());

//step 3 Mongo connection
mongoose
  .connect("mongodb://localhost:27017/ResumeDetails", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error", err));

//Step 4 Schema
const UserSchema = new mongoose.Schema({
  userId: String,
  fname: String,
  lname: String,
  profession: [String],
  city: String,
  phone: String,
  email: String,
  dob: String,
  address: String,
  gender: String,
  Education: String,
  institution: String,
  YearOfPassing: String,
  experience: String,
  companyName: String,
  jobTitle: String,
  yearsOfExperience: String,
  responsibilities: String,
  skills: String,
  languages: String,
  linkedIn: String,
  portfolio: String,
  certifications: String,
  prefferdLocation: String,
  expectedSalary: String,
  jobType: String,
  willingToRelocate: String,
  noticePeriod: String,
  startDate: String,
});

const User = mongoose.model("User", UserSchema);

// Save the data

//This code should execute when user First time creates his complete profile
app.post("/saveUserData", async (req, res) => {
  try {
    const userData = new User(req.body);
    await userData.save();
    res.status(200).send("Data saved");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Fetch For the user to upate the prefilled form
app.get("/getUserData/:email", (req, res) => {
  const { email } = req.params;
  User.findOne({ email })
    .then((userData) => {
      if (userData) {
        res.json(userData);
      } else {
        res.status(404).send("data Not Found");
      }
    })
    .catch((err) => console.log(err));
});

// This code updates or rectify the the existing user data
app.post("/UpdateUserData", (req, res) => {
  // The Fields that i want the user can update
  const { email, fname, lname, city, phone } = req.body;

  User.findOneAndUpdate(
    { email: email },
    { fname, lname, phone, city },
    { new: true, upsert: true }
  )
    .then(() => res.send("Data Updated Successfully"))
    .catch((err) => console.log(err));
});



//Delete Functionality
const Feedback = new mongoose.Schema({
  email: String,
  feedback: String,
  rating: String,
});

const feedback2 = mongoose.model("feedback", Feedback);

app.post("/Delete-user", async (req, res) => {
  const { email, feedback, rating } = req.body;
  try {
    await User.deleteOne({ email: email });

    const newFeed = new feedback2({ email, feedback, rating });
    newFeed.save();
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: "Something went wr0ng" });
  }
});

//start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
