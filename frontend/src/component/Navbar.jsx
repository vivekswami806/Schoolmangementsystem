import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import companyimg from "../assets/companylogoimg.png"

const Navbar = () => {
  const [togglelist, settogglelist] = useState(false);
  return (
    <div className=" flex justify-between pl-8 items-center bg-blue-700 h-16 w-full text-white text-lg  sticky top-0  opacity-90">
      <div className="w-16 cursor-pointer"> <img src={companyimg} alt="" /></div>
      <div className="w-80">
        <ul className=" justify-between px-5 cursor-pointer hidden lg:flex ">
          <li>
            <Link to="/" className="hover:text-blue-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-300">About</Link>
          </li>
          <li>
            <Link className="hover:text-blue-300">Service</Link>
          </li>
          <li>
            <Link className="hover:text-blue-300">Contact</Link>
          </li>
        </ul>
      </div>    
      <div
        className="lg:hidden relative overflow-visible text-3xl" onClick={() => {
             settogglelist((list)=>(!list))
            // togglelist ? settogglelist(false) : settogglelist(true);
        }}>
        
        {togglelist?<ImCross />:<TiThMenu/>}
        {togglelist && (
          <ul className="flex flex-col absolute right-0  top-10 justify-around px-5 cursor-pointer bg-gradient-to-l from-blue-500 rounded">
            <Link className="hover:text-blue-300" to='/'>
          {" "}
          School Login
        </Link>
            <li>
              <Link to="/" className="hover:text-blue-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300">About</Link>
            </li>
            <li>
              <Link to='/service' className="hover:text-blue-300">Service</Link>
            </li>
            <li>
              <Link to ='/contact' className="hover:text-blue-300">Contact</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
