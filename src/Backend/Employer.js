import bcrypt from 'bcrypt';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express();
const port = 5000;

app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/Employer",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

const adminSchema = new mongoose.Schema({
    username : { type: String, required : true, unique: true},
    password : {type: String, required: true},
    role : {type: String, default: "admin"}
}) 

const Admin = mongoose.model("Admin", adminSchema);

app.post("/admin/register", async (req,res)=>{
    const { username, password } = req.body;
    try {
        const existingAdmin = await Admin.findOne({username});
        if(existingAdmin){
            return res.status(404).json({message : "user already exists"});
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({username, password: hashedpassword});
        await newAdmin.save();
        res.status(200).json({message : "Admin Created"})
    } catch (error) {
        res.status(500).json({message : 'Error Registering in'});
    }
})
app.post("/admin/login", async (req,res)=>{
    const {username, password} = req.body;
    try {
        const admin = await Admin.findOne({username});
        if(!admin){
            return res.status(404).json({message : "user not found"});
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        if(!isMatch){
            return res.status(400).json({message : "Password Incorrect"});
        }
        res.status(200).json({message : "Login Succesfull",admin});

    } catch (error) {
        res.status(500).json({message : 'Error Logging in'});
    }
})

const adminAuth = (req,res,next) =>{
    if(req.user && req.user.role === "admin"){
        next();
    }
    else{
        res.status(401).json({message : "You are not an admin"});
    }
}

app.get("/admin/protected",adminAuth,(req,res)=>{
    res.status(200).json({message : "Welcome Admin"})
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})