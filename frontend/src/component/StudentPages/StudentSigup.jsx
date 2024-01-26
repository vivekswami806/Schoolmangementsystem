import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const StudentSigup = () => {
  const intialValue = {
    fname: "",
    lname: "",
    password: "",
    cpassword: "",
    gender: "",
    number: "",
    sID: "",
    age: "",
    email: "",
  };
  let [studentData, setstudentData] = useState(intialValue);
  let [redirect, setredirect] = useState();
  let [newError,setnewError]=useState({})
  let [inputType ,setinputType]=useState(intialValue)
  function commonHandler(e) {
    let value = e.target.value;
    let name = e.target.name;
    let type=e.target.type
    setinputType({...inputType, [name]:type})
    setstudentData({ ...studentData, [name]: value });
  }
  // console.log(inputType);
  function validate(){
   
    let msgError={}
    let count=0
    let dataKey=Object.keys(studentData)
    let dataValue=Object.values(studentData)
   while(count<=dataKey.length){
    let temp=dataKey[count]
    if(dataValue[count]===""){
      msgError[temp]="*This field is required"
     
    }else{
      if(inputType[temp]==="email"){
        Number(dataValue[count][0])>=0?
        (msgError[temp]="email should not start with number"):""
      }
      if(inputType[temp]==="number"){
        Number(dataValue[count][0])<=6 ?
        (msgError[temp]="Number should start between 6 and 9"):""

      }
      if(dataKey[count]=="password"){
        dataValue[count]===dataValue[count+1]?"":(msgError[temp]="password not match")
      }
    }
    count++
   }  
    return msgError
  }
  const submitData = async (e) => {
    e.preventDefault();
    
    setnewError(validate())
      let res = await fetch("http://127.0.0.1:3003/student/signup", {
        method: "POST",
        body: JSON.stringify(studentData),
        headers: { "Content-Type": "Application/JSON" },
      });
      let result = await res.json();
      console.log(result);

      if (result.msg) {
        alert(result.msg);
      } else {
        localStorage.setItem("token",result.token);
        setredirect(true)
      }   
  };
  return (
    <div className="flex items-center justify-center flex-col gap-10 rounded-md">
      <div>
        {" "}
        <h2 className="text-[2rem]  mt-3">Student SignUp</h2>
      </div>
      <div className="p-6 rounded-2xl  w-1/2 items-center shadow-2xl">
        <form
          action=""
          className="d-flex lg:grid grid-cols-2 grid-flow-row auto-rows-max gap-2 items-center"
          onSubmit={submitData}
        >
          <label htmlFor="name" className=" text-xl  ">
            first Name:
          </label>
          <div className=" h-20">
          <input
            onChange={(e) => {
              commonHandler(e);
            }}
            name="fname"
            type="text"
            placeholder="Enter Your Name"
            className="w-full  px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <span className="text-red-700">{newError.fname} </span>
          </div>

          <label htmlFor="name" className=" text-xl ">
            Last Name:
          </label>
          <div className=" h-20">
          <input
            onChange={(e) => {
              commonHandler(e);
            }}
            name="lname"
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <span className="text-red-700">{newError.lname} </span>

          </div>

          <label htmlFor="name" className=" text-xl ">
            {" "}
            ID Number:
          </label>
         <div className=" h-20">
         <input
            onChange={(e) => {
              commonHandler(e);
            }}
            name="sID"
            type="text"
            placeholder="Enter your Id "
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <span className="text-red-700">{newError.sID} </span>
         </div>


          <label htmlFor="email" className=" text-xl ">
            Enter Email:
          </label>
     <div className=" h-20">
     <input
            onChange={(e) => {
              commonHandler(e);
            }}
            name="email"
            type="email"
            placeholder="Enter Your email"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <span className="text-red-700">{newError.email} </span>
     </div>

          <label htmlFor="name" className=" text-xl ">
            Password:
          </label>
         <div className=" h-20">
         <input
            onChange={(e) => {
              commonHandler(e);
            }}
            name="password"
            type="password"
            placeholder="Enter Your password"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          {/* <span className="text-red-700">{newError.password} </span> */}
         </div>


          <label htmlFor="name" className=" text-xl ">
            {" "}
            comfirm Password:
          </label>
    <div className=" h-20">
    <input
            onChange={(e) => {
              commonHandler(e);
            }}
            name="cpassword"
            type="password"
            placeholder="Enter Your comfirm  password"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <span className="text-red-700">{newError.password} </span>


    </div>
          <label htmlFor="name" className=" text-xl ">
            Number
          </label>
        <div className=" h-20 ">
        <input
            onChange={(e) => {
              commonHandler(e);
            }}
            type="number"
            name="number"
            placeholder="Enter Your mobile number"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <span className="text-red-700">{newError.number} </span>
        </div>


          <label htmlFor="name" className=" text-xl ">
            Age
          </label>
         <div className=" h-20">
         <input
            onChange={(e) => {
              commonHandler(e);
            }}
            type="date"
            name="age"
            placeholder="Enter Your password"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <span className="text-red-700">{newError.age} </span>
         </div>


          <label htmlFor="name" className=" text-xl ">
            Gender
          </label>

         <div className=" h-20">
         <select
            name="gender"
            id=""
            type="select-one"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            onChange={(e) => {
              commonHandler(e);
            }}
          >
            <option value="gender">Select Gender</option>
            <option value="male"> Male</option>
            <option value="female"> feMale</option>
            <option value="other"> Other</option>
          </select>
          <span className="text-red-700">{newError.age} </span>
         </div>


          <button className="p-2 col-span-2 mt-5 border text-white bg-green-600 border-green-400 w-1/2">
            Submit{" "}
          </button>
          <p className=" p-2  ">
            {" "}
            forget password
            <Link to="/" className="text-blue-700 underline ml-3">
              forget password{" "}
            </Link>
          </p>

          <p className=" text-xl mt-4 col-span-2">
            {" "}
            I already Have a Account
            <Link to="/studentlogin" className="text-blue-700 underline ml-3">
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>
      {redirect&&<Navigate to="/studentLogin" replace={true} />}
    </div>
  );
};

export default StudentSigup;
