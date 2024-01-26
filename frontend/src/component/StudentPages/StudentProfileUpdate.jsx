import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const StudentProfileUpdate = () => {
        let navigate =useNavigate()
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
          }
        const [studentdetails, setstudentdetails] = useState({intialValue});
        let token = localStorage.getItem("token");
        async function getData() {
          let response = await axios.get(`http://127.0.0.1:3003/student/${token}`);
          let data = await response.data;
      
          //  let response = await fetch(`http://127.0.0.1:3003/student/${token}`)
          //  let data = await response.json()
          setstudentdetails(data);
        }
      
        useEffect(() => {
          getData();
        }, [])
   
            const handelSubmit= async (e)=>{
                e.preventDefault()
                let result = await axios.put(`http://127.0.0.1:3003/student/update`, studentdetails)
                if(result.status==200){
                    navigate("/studentdetails")
                }
                else{
                    alert("somthig is error ")
                }
                
            }
  return (
    <div className="flex items-center justify-center flex-col gap-10 rounded-md">
      <div>
        {" "}
        <h2 className="text-[2rem]  mt-3">Update Details</h2>
      </div>
      <div className="p-6 rounded-2xl  w-1/2 items-center shadow-2xl">
        <form
          action=""
          className="d-flex lg:grid grid-cols-2 grid-flow-row auto-rows-max gap-2 items-center"
         onSubmit={(e)=>{
            handelSubmit(e)
         }}
        >
          <label htmlFor="name" className=" text-xl  ">
            first Name:
          </label>
          <input
          
            name="fname"
            type="text"
            placeholder="Enter Your Name"
            className="w-full  px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={studentdetails.fname}
            onChange={(e)=>{
                setstudentdetails({...studentdetails , fname:e.target.value})
            }}
          />

          <label htmlFor="name" className=" text-xl ">
            Last Name:
          </label>
          <input
          
            name="lname"
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={studentdetails.lname}
            onChange={(e)=>{
                setstudentdetails({...studentdetails , lname:e.target.value})
            }}
          />

          <label htmlFor="name" className=" text-xl ">
            {" "}
            ID Number:
          </label>
          <input
          
            name="sID"
            type="text"
            placeholder="Enter your Id "
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={studentdetails.sID}
            onChange={(e)=>{
                setstudentdetails({...studentdetails , sID:e.target.value})
            }}
          />

          <label htmlFor="email" className=" text-xl ">
            Enter Email:
          </label>
          <input
          
            name="email"
            type="text"
            placeholder="Enter Your email"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={studentdetails.email}
            readOnly
            onChange={(e)=>{
                setstudentdetails({...studentdetails , email:e.target.value})
            }}
          />

          <label htmlFor="name" className=" text-xl ">
            Password:
          </label>
          <input
          
            name="password"
            type="text"
            placeholder="Enter Your password"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={studentdetails.password}
            onChange={(e)=>{
                setstudentdetails({...studentdetails , password:e.target.value})
            }}
          />

          <label htmlFor="name" className=" text-xl ">
            {" "}
            comfirm Password:
          </label>
          <input
          
            name="cpassword"
            type="text"
            placeholder="Enter Your comfirm  password"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={studentdetails.cpassword}
            onChange={(e)=>{
                setstudentdetails({...studentdetails , cpassword:e.target.value})
            }}
          />

          <label htmlFor="name" className=" text-xl ">
            Number
          </label>
          <input
          
            type="text"
            name="number"
            placeholder="Enter Your mobile number"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
            value={studentdetails.number}
            onChange={(e)=>{
                setstudentdetails({...studentdetails , numbere:e.target.value})
            }}
          />

          <label htmlFor="name" className=" text-xl ">
            Age
          </label>
          <input
            value={studentdetails.age}
            onChange={(e)=>{
                setstudentdetails({...studentdetails , age:e.target.value})
            }}
          
            type="date"
            name="age"
            placeholder="Enter Your password"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          />

          <label htmlFor="name" className=" text-xl ">
            Gender
          </label>

          <select
            value={studentdetails.gender}
            onChange={(e)=>{
                setstudentdetails({...studentdetails , gender:e.target.value})
            }}
            name="gender"
            id=""
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          
          >
            <option value="gender">Select Gender</option>
            <option value="male"> Male</option>
            <option value="female"> feMale</option>
            <option value="other"> Other</option>
          </select>

          <button className="p-2 col-span-2 mt-5 border text-white bg-green-600 border-green-400 w-1/2">
            Update Profile
          </button>
         
          

         
        </form>
      </div>
      {/* {redirect&&<Navigate to="/studentLogin" replace={true} />} */}
    </div>
  );
};

export default StudentProfileUpdate;
