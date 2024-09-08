<<<<<<< HEAD
import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"



//Step 1 Express server initialized
const app = express();
const port = 3000;

//Step 2 Middlerware setupd
app.use(bodyParser.json());
app.use(cors());

//step 3 Mongo connection
mongoose.connect("mongodb://localhost:27017/ResumeDetails", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Error",err));

//Step 4 Schema
const UserSchema = new mongoose.Schema({
    userId: String,
    fname: String,
    lname: String,
    profession: [String],
    city: String,
    phone: Number,
    email: String,
    dob : Date,
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
    startDate: String
})

const User = mongoose.model("User", UserSchema);

// Save the data
// This code updates or rectify the the existing user data 
app.post("/UpdateUserData", (req,res)=>{
    // The Fields that i want the user can update
    const {email, fname, lname, city, phone } = req.body;
    
    User.findOneAndUpdate(
        {email : email},
        {fname, lname, phone, city},
        {new: true, upsert:true}
    )
    .then(()=> res.send("Data Updated Successfully"))
    .catch((err)=> console.log(err))
    
});

app.get("/getUserData/:email", (req,res)=>{
    const {email} = req.params;
    User.findOne({email})
    .then((userData)=>{
        if(userData){
            res.json(userData);
        }
        else{
            res.status(404).send("data Not Found")
        }
    })
   .catch((err)=> console.log(err))

})
//This code should execute when user First time creates his complete profile
app.post("/saveUserData", (req,res)=>{

    
    const userData = new User(req.body);
    userData.save().then(()=>res.send("Data saved Successfully"))
    .catch((err)=>res.send("Error saving data",err))
});

//start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
=======
import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"



//Step 1 Express server initialized
const app = express();
const port = 3000;

//Step 2 Middlerware setupd
app.use(bodyParser.json());
app.use(cors());

//step 3 Mongo connection
mongoose.connect("mongodb://localhost:27017/ResumeDetails", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Error",err));

//Step 4 Schema
const UserSchema = new mongoose.Schema({
    userId: String,
    fname: String,
    lname: String,
    profession: [String],
    city: String,
    phone: Number,
    email: String,
    dob : Date,
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
    startDate: String
})

const User = mongoose.model("User", UserSchema);

// Save the data
// This code updates or rectify the the existing user data 
app.post("/UpdateUserData", (req,res)=>{
    // The Fields that i want the user can update
    const {email, fname, lname, city, phone } = req.body;
    
    User.findOneAndUpdate(
        {email : email},
        {fname, lname, phone, city},
        {new: true, upsert:true}
    )
    .then(()=> res.send("Data Updated Successfully"))
    .catch((err)=> console.log(err))
    
});

app.get("/getUserData/:email", (req,res)=>{
    const {email} = req.params;
    User.findOne({email})
    .then((userData)=>{
        if(userData){
            res.json(userData);
        }
        else{
            res.status(404).send("data Not Found")
        }
    })
   .catch((err)=> console.log(err))

})
//This code should execute when user First time creates his complete profile
app.post("/saveUserData", (req,res)=>{

    
    const userData = new User(req.body);
    userData.save().then(()=>res.send("Data saved Successfully"))
    .catch((err)=>res.send("Error saving data",err))
});

//start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
>>>>>>> ef4daf8f38df261364c3abb4e10557cf665ae882
})