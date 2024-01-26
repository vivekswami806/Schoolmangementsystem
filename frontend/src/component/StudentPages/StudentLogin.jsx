import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
const StudentLogin = () => {
  const [studentData, setstudentData] = useState({});
  let [redirect, setredirect] = useState();


  const commonhandler = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setstudentData({ ...studentData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(studentData);
    let { email, password } = studentData;
    if (!email || !password) {
      alert("provied all data");
    } else {
      let response = await fetch("http://127.0.0.1:3003/student/login", {
        method: "POST",
        body: JSON.stringify(studentData),
        headers: { "Content-Type": "Application/JSON" },
      });
      let result = await response.json();
      if (result.msg) {
        alert(result.msg);
      } else {
        localStorage.setItem("token",result.token);
        // alert(`hey ${result.token.fname}`)
        setredirect(true)
      }
    }
  };
  return (
    <div className="flex flex-col items-center ">
      <div>
        {" "}
        <h2 className="text-[2rem] mt-3">Student Login</h2>
      </div>
      <div>
        <form
          className="mt-5  gap-6 p-6 rounded-2xl shadow-2xl grid grid-cols-2 items-center"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <label htmlFor="name" className=" text-xl ">
            first Name:
          </label>
          <input
            name="fanme"
            onChange={(e)=>{
              commonhandler(e)
            }}
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <label htmlFor="name" className=" text-xl ">
            Last Name:
          </label>
          <input
            name="lanme"
            onChange={(e)=>{
              commonhandler(e)
            }}
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          />

          <label htmlFor="email" className=" text-xl ">
            Enter Email:
          </label>
          <input
            type="text"
            name="email"
            onChange={(e) => {
              commonhandler(e);
            }}
            placeholder="Enter Your emali"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          />

          <label htmlFor="name" className=" text-xl ">
            Password:
          </label>
          <input
            type="text"
            name="password"
            onChange={(e) => {
              commonhandler(e);
            }}
            placeholder="Enter Your password"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-blue-500"
          />

          <button className="  p-1 text-3xl block border-2 hover:bg-green-700">
            Submit
          </button>

          <p className=" p-2  col-span-2">
            forget password
            <Link to="/" className="text-blue-700 underline ml-3">
              forget password
            </Link>
          </p>
          <p className=" text-xl">
            New User register here
            <Link to="/studentsigup" className="text-blue-700 underline ml-3">
              Signup
            </Link>
          </p>
        </form>
      </div>
      {redirect&&<Navigate to="/studentdetails" replace={true} />}

    </div>
  );
};

export default StudentLogin;
