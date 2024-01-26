const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    fname:{
        type:String,
        required :true
    },
    lname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        // unique:true,
        lowercase:true
    },
    number:{
        type:String,
        required:true,
    },
    sID:{
        type:String,
        required:true,
        // unique:true
    },
    password:{ 
        type:String,
        required:true,
    },
    cpassword:{
        type:String
    },
    gender:{
        type:String
    },
    age:{
        type:String

    }



},{timestamps:true})

const studentModel = mongoose.model("/student", studentSchema)

module.exports= studentModel