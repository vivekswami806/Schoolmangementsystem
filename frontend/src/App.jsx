import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/home/Home'
import About from "./component/About"
import StudentLogin from './component/StudentPages/StudentLogin'
import TeacherLogin from './component/TeacherPages/TeacherLogin' 
import StudentSigup from './component/StudentPages/StudentSigup'
import StudentDetails from './component/StudentPages/StudentDetails'
import Studentprofile from './component/StudentPages/Studentprofile'
import StudentProfileUpdate from './component/StudentPages/StudentProfileUpdate'


function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/studentLogin" element={<StudentLogin/>}/>
      <Route path="/teacherLogin" element={<TeacherLogin/>}/>
      <Route path='/StudentSigup' element={<StudentSigup/>}/>
      <Route path='/studentdetails' element={<StudentDetails/>}/>
      <Route path='/studentprofile' element={<Studentprofile />}/>
      <Route path='/studentprofileupdate' element={<StudentProfileUpdate/>}/>

    </Routes>
   
    </>
  )
}

export default App
