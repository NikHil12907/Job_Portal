import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = 4000;

mongoose.connect("mongodb://localhost:27017/jobPortal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const jobSchema = new mongoose.Schema({
  Title: String,
  Description: String,
  Location: String,
  Type: String,
  Company: String,
  DatePosted: Date,
  Salary: String
});

const Job = mongoose.model("Job", jobSchema);
app.use(cors());
app.get("/api/jobs", async (req, res) => {
  const { query } = req.query;
  try {
    let jobs;
    if (query) {
      const searchRegX = new RegExp(query, "i");
      jobs = await Job.find({
        $or: [
          { Title: searchRegX },
          { Company: searchRegX },
          { Location: searchRegX },
          {Type: searchRegX}
        ],
      });
    } else {
      jobs = await Job.find();
    }
    res.json(jobs);
  } catch (error) {
    console.error("Error Fetching in Jobs", error);
    res.status(500).json({ message: "Error" });
  }
});

function getRandomDate(){
  const today = new Date();
  const randomDays = Math.floor(Math.random() * 30);
  const randomDate = new Date(today);
  randomDate.setDate(today.getDate() - randomDays);
  return randomDate;
}

function getRandomSalary() {
  const minSalary = 30000;
  const maxSalary = 120000;
  const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
  return `$${randomSalary.toLocaleString()}`;
}

app.get("/generate-jobs", async (req, res) => {
  const jobTitle = [
    "Software Engineer",
    "Data Scientist",
    "Web Developer",
    "Project Manager",
    "System Administrator",
    "Database Administrator",
    "Network Engineer",
    "DevOps Engineer",
    "Mobile Developer",
    "Product Manager",
    "UI/UX Designer",
    "Business Analyst",
    "Quality Assurance Engineer",
    "Cybersecurity Analyst",
    "Full Stack Developer",
    "AI/ML Engineer",
    "Blockchain Developer",
    "Cloud Architect",
    "Technical Support Engineer",
    "IT Manager",
    "Security Engineer",
    "Graphic Designer",
    "Marketing Manager",
    "Sales Manager",
    "HR Manager",
    "Content Writer",
    "SEO Specialist",
    "Social Media Manager",
    "Finance Analyst",
    "Accountant",
    "Operations Manager",
    "Customer Service Representative",
    "Technical Writer",
    "Game Developer",
    "Animation Designer",
    "E-commerce Manager",
    "Supply Chain Analyst",
    "Research Scientist",
    "Mechanical Engineer",
    "Civil Engineer",
    "Electrical Engineer",
    "Environmental Engineer",
    "Biomedical Engineer",
    "Data Analyst",
    "Data Engineer",
    "Front-end Developer",
    "Back-end Developer",
    "Software Tester",
    "Scrum Master",
    "Product Owner",
    "Chief Technology Officer",
    "Chief Information Officer",
    "Chief Marketing Officer",
    "Chief Financial Officer",
    "Chief Operating Officer",
    "Chief Executive Officer",
    "Technical Lead",
    "Solutions Architect",
    "IT Consultant",
    "Network Administrator",
    "Security Analyst",
    "Penetration Tester",
    "Ethical Hacker",
    "Mobile App Developer",
    "Game Designer",
    "VR/AR Developer",
    "3D Modeler",
    "Video Editor",
    "Sound Engineer",
    "Compliance Officer",
    "Legal Counsel",
    "Paralegal",
    "Public Relations Manager",
    "Event Coordinator",
    "Training and Development Specialist",
    "Recruitment Specialist",
    "Compensation and Benefits Manager",
    "Supply Chain Manager",
    "Logistics Coordinator",
    "Procurement Manager",
    "Inventory Manager",
    "Facilities Manager",
    "Maintenance Engineer",
    "Quality Control Specialist",
    "Manufacturing Engineer",
    "Production Manager",
    "Warehouse Manager",
    "Logistics Analyst",
    "Regulatory Affairs Specialist",
    "Clinical Research Associate",
    "Pharmacist",
    "Laboratory Technician",
    "Chemical Engineer",
    "Petroleum Engineer",
    "Geotechnical Engineer",
    "Structural Engineer",
    "Architect",
    "Interior Designer",
    "Urban Planner",
    "Construction Manager",
    "Real Estate Manager",
    "Property Manager",
    "Building Inspector",
    "Surveyor",
  ];
  const companyName = [
    "TechCorp",
    "InnovateX",
    "DataWave",
    "NetSolutions",
    "Cloudify",
    "BuildSmart",
    "CyberSecure",
    "MediTech",
    "GreenEnergy",
    "EduVision",
    "FinanceHub",
    "HealthPlus",
    "RetailLink",
    "AgriGrowth",
    "LogiMove",
    "TransportPro",
    "AutoDrive",
    "FoodMatrix",
    "BioLife",
    "EcoSystems",
    "MediaPulse",
    "SoftServe",
    "SmartHome",
    "SpaceFront",
    "TravelEase",
    "GameWorld",
    "BrightFuture",
    "Visionary Solutions",
    "AlphaTech",
    "PioneerGroup",
  ];
  const locations = [
    "New York, NY",
    "San Francisco, CA",
    "Los Angeles, CA",
    "Chicago, IL",
    "Houston, TX",
    "Boston, MA",
    "Seattle, WA",
    "Austin, TX",
    "Atlanta, GA",
    "Miami, FL",
    "Denver, CO",
    "Phoenix, AZ",
    "Washington, D.C.",
    "Dallas, TX",
    "San Diego, CA",
    "Philadelphia, PA",
    "Portland, OR",
    "Las Vegas, NV",
    "San Jose, CA",
    "Orlando, FL",
    "Minneapolis, MN",
    "Tampa, FL",
    "Detroit, MI",
    "St. Louis, MO",
    "Charlotte, NC",
  ];

  const Type=[
    "part-Time",
    "Full-Time"
  ]

  
  for (let i = 0; i < 500; i++) {
    const job = new Job({
      Title: jobTitle[Math.floor(Math.random() * jobTitle.length)],
      Company: companyName[Math.floor(Math.random() * companyName.length)],
      Location: locations[Math.floor(Math.random() * locations.length)],
      Type: Type[Math.floor(Math.random() * Type.length)],
      Salary: getRandomSalary(),
      DatePosted: getRandomDate()
    });
    await job.save();
  }
  console.log("100 jobs have been successfully inserted into the database!");
  mongoose.connection.close();
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
