import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = 2000;

app.use(bodyParser.json())
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Job_Post",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err));

const Post_Schema = new mongoose.Schema({
    title: String,
    description: String,
    company: String,
    location: String,
    salary: String,
    type: String,
    Designation: String,
    postedAt: {type:Date, default:Date.now}
})

const adminPost = mongoose.model("adminPost",Post_Schema);

app.post("/api/job_Post", async (req,res)=>{
    try{
        const newJob = new adminPost(req.body);
        await newJob.save()
        res.status(200).json({message:" Job Posted", adminPost:newJob});
    }
    catch(error){
        res.status(500).json({message:"Server Error",error});
    }   
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})