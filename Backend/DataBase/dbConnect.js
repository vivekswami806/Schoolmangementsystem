const mongoose = require("mongoose");

const dbConnect = async ()=>{
    try{
            mongoose.connect("mongodb://127.0.0.1:27017/SchoolManagementApp")
    }
    catch(error){
            console.log("something went to worng in db conneting ");
    }
};

module.exports= dbConnect;
