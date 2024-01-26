import React, { useContext } from "react";
import Aside from "../home/Aside";
import { BiArrowFromLeft } from "react-icons/bi";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const StudentDetails = () => {
  const { setauth } = useContext(AuthContext);
  const Navigate = useNavigate();
  const logoutHandel = () => {
    localStorage.removeItem("token");
    setauth(false);
    Navigate("/");
  };
  return (
    <div className="flex  max-sm:flex-col">
      <Aside />
      <section className="  w-full grid-cols-2  ">
        <button
          className="mt-2 border text-xl hover:bg-red-400 px-8 py-3 rounded-lg float-right "
          onClick={logoutHandel}
        >
          Log Out 
        </button>
        
          <div className="mt-44 flex items-center justify-center max-sm:h-full text-3xl  text-center 
           ">
            <span className="flex items-center justify-center">
            <Link to={"/studentprofile"} className=" flex justify-center items-center border rounded-lg p-2 hover:bg-slate-700 hover:text-white">
              <CgProfile className=" inline" />
            My profile
              </Link>
            </span>
            <span>
              
            </span>
            
          </div>
       
      </section>
    </div>
  );
};

export default StudentDetails;
