import React, { useContext } from "react";
import Aside from "./Aside";
import MainBody from "./MainBody";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const {auth} =useContext(AuthContext)
   const Navigate=useNavigate()
  return (<>
    {auth? Navigate("/studentdetails"):<div className="flex max-sm:flex-col bg-mainbg bg-cover">
    <Aside/>
    <MainBody/> 
  </div>}
  </> );
};

export default Home;
