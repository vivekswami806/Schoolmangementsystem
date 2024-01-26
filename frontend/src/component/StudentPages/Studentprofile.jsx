import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Studentprofile = () => {
  const [studentdetails, setstudentdetails] = useState({});
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
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-mainBackgroundImg">
      <h1 className="text-3xl  underline">Student Profiles</h1>
      <div className="grid grid-cols-2  p-[2rem] break-words max-md:text-base text-2xl mt-12 bg-mainBackgroundImg
       rounded-lg shadow-2xl
      ">
        <h1 className="">FirstName:</h1>
        {console.log(Object.keys(studentdetails))}
        <h1>{studentdetails.fname}</h1>
        <h1>LastName:</h1>
        <h1>{studentdetails.lname}</h1>
        <h1>Email:</h1>
        <h1>{studentdetails.email}</h1>
        <h1>Mobile no:</h1>
        <h1>{studentdetails.number}</h1>
        <h1>Gender:</h1>
        <h1>{studentdetails.gender}</h1>
        <h1>Age:</h1>
        <h1>{studentdetails.age}</h1>
      </div>
      <div className="flex justify-around gap-8  mt-10">
      <Link to={"/studentprofileupdate"} className=" bg-slate-600 px-3 py-2 rounded-2xl shadow-lg ">Upadte</Link>
      <Link to={"/"} className=" bg-red-600 px-3 py-2 rounded-2xl shadow-lg">Delete Account</Link>
      </div>
    </div>
  );
};

export default Studentprofile;
