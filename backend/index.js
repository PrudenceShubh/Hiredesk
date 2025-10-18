
require('dotenv').config();
const express = require('express')
const mongoose= require('mongoose');
const cors = require("cors")
const jobcontroller = require('./controller/jobscontroller');
const signincontroller = require('./controller/signinController');
const loginController = require('./controller/loginController');
const {feedbackcontrole,feedbackFatcher} = require('./controller/feedbackcontroller');


const dburi = process.env.MONGO_DB_URI

const app = express()
const port = process.env.PORT||5000
app.use(cors())
app.use(express.json())
 
async function connectdatabase () {
    await mongoose.connect(dburi).then(()=>{
        console.log("Connected to database")
    }).catch((error)=>{
        console.log(error)
    })
}

connectdatabase()


app.get("/",(req,res)=>{
    res.send("Hello welcome to the port ")
})

app.post("/interviewer/jobpost",jobcontroller)
app.post("/usersignin",signincontroller)
app.post("/userlogin",loginController)
app.post("/user/feedback",feedbackcontrole)
app.get("/user/fetchfeedback",feedbackFatcher)



app.listen(port, ()=>{
    console.log(`The server is connected to the port localhost:${port}`)
})