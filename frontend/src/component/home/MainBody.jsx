import React from 'react';
import studentimg from "../../assets/student.png"
import teacherlogin from "../../assets/teacher.png"
import { Link } from 'react-router-dom';
const MainBody = () => {
  return (
    <div className=' lg:grid grid-cols-2 m-auto gap-20 flex flex-col items-center'>
      <div className=' '>
      <img src={studentimg} alt="" className='h-[11rem] w-[11rem] pt-3' />
       <Link to="/studentLogin">
        <button className='mt-4 border rounded p-3 text-white ml-6'>
          Student Login
        </button>

       </Link>
      </div>
      <div className=''>
      <img src={teacherlogin} alt="" className='h-[12rem]' />
      <Link to="/teacherLogin" >
       <button className='mt-0  ml-6 border rounded p-3 text-white'>
          Teacher Login
       </button>
      </Link>
        
      </div>
    </div>
  )
}

export default MainBody