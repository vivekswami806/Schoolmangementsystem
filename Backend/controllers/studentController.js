const studentModel = require("../model/StudentModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { param } = require("../routes/studentRoute");

//tokenn generation

const generateToken = (id) => {
  let studentId = id.toString();
  let token = jwt.sign(studentId, "vivek");
  return token;
};

// const getStudent=(req,res)=>{
//     res.send("api working seccessfully")
// }
const getStudent = async (req, res) => {
  // console.log(req.params);
  let { token } = req.params;
  let id = jwt.verify(token, "vivek");
  let studentDetails = await studentModel
    .findOne({ _id: id })
    .select("-password -_id -__v -createdAt -updatedAt");
  res.send(studentDetails);
};

const studentSignup = async (req, res) => {
  let data = req.body;
  console.log(data);
  let { fname, lname, email, password, sID, number, gender, age } = data;
  // !fname || !lname ||!email|| !password ||sID ||!number ? res.status(401).send("student already registered"):res.status(400).send("student error")

  if (
    !fname ||
    !lname ||
    !email ||
    !password ||
    !sID ||
    !number ||
    !age ||
    !gender
  ) {
    return res.status(400).send("provide all required fields");
  }
  let isemailAvailable = await studentModel.findOne({ email });
  if (isemailAvailable) {
    return res.status(401).send({ msg: "student already registered" });
  } else {
    let hasedPass = await bcrypt.hash(password, 10);
    let student = { ...data, password: hasedPass };

    let studentUpload = new studentModel(student);
    await studentUpload.save();

    return res.status(201).send({ token: generateToken(studentUpload._id) });
  }
};

const studentLogin = async (req, res) => {
  let { password, email } = req.body;
  
  let student = await studentModel.findOne({ email });
  if (student) {
    let matchedPass = await bcrypt.compare(password, student.password);
    if (matchedPass) {
      // let studentDetails = await studentModel
      //   .findOne({ email: email })
      //   .select("-password -_id -__v -createdAt -updatedAt");
               
      // res.status(200).send({token:studentDetails});
       res.status(200).send({token :  generateToken(student._id)})
    } else {
      res.status(400).send({ msg: "password is not matched" });
    }
  } else {
    res.status(400).send({ msg: "student Not Registered" });
  }

};
const studentUpdate= async (req,res)=>{
const {email ,sID,age,fname,lname,gender,number}=req.body
let result = await studentModel.updateOne({email},{$set:{sID,gender,fname,lname,number,age}})
if(result.acknowledged){
  res.status(200).send({msg:"user data updated"})
}else{
  res.status(500).send({msg:"something is worng"})
}
}


const studentDelete = async (req, res) => {
  try {
    const { email } = req.body; // Destructure the email from req.body

    // Find and delete the student based on the provided email
    const result = await studentModel.findOneAndDelete({ email });

    if (result) {
      res.status(200).send({ msg: "Data deleted successfully" });
    } else {
      res.status(404).send({ msg: "Student not found" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error: error.message });
  }
};

module.exports = { getStudent, studentSignup, studentLogin,studentUpdate,studentDelete};
