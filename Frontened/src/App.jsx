import React from 'react'
import Home from './Home/Home'
// import Course from './compontents/Course'
import { Route, Routes } from "react-router-dom";
import Couress from './courses/Couress';
import Signup from './compontents/Signup';
function App() {
  return(
    <>

   
  
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={<Couress/>}/>
    <Route path='/signup' element={<Signup/>}/>
   </Routes>


    </>

  )
}

export default App
