import axios from "axios";
import express from "express";
import cors from 'cors';
const app = express();
const port = 4000;
app.use(cors())

app.get("/api/jobs", async (req, res) => {
  console.log("Req. recieved");
  
  try {
    const { query = "", location = "New York", page = 1 } = req.query
    const searchParams = new URLSearchParams({
      query,
      location,
      page
    })
    const options={
      method: 'get',
      url:`https://jsearch.p.rapidapi.com/list?${searchParams.toString()}`,
     
      headers:{
        'X-RapidAPI-Key':'aedbd24774msh1f9f1c55f398535p1f4b17jsn6d261886e1c9',
        'X-RapidAPI-Host':'jobs-api14.p.rapidapi.com'
      }
    };
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error("ERROR FETCHING IN DATA:",error);
    res.status(500).json({error:"Fetching data problem occurs"})
  }
});
app.listen(port, () =>{
    console.log(`server running on ${port}`)
})
