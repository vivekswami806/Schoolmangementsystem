const express = require("express");
const dbConnect = require("./DataBase/dbConnect");
const cors = require ("cors")
const studentRouter = require("./routes/studentRoute");
// port and host
const PORT= 3003;
const hostName="127.0.0.1";
//server

const app = express();

//cors
app.use(cors())

//use middleware

app.use(express.json())


app.get("/",(req,res)=>{
console.log( res,'i am continue');
})

// routes

app.use("/student", studentRouter)

//app listen
app.listen(PORT,hostName,async()=>{
   await dbConnect()
    console.log(`server start in http://${hostName}:${PORT} & database connected`);
})