import { useState } from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import Courses from './course/Courses'
import Signup from './components/Signup'
import ContactUs from './contactus/ContactUs'
import AboutUs from './about/AboutUs'



function App() {

  return (
    <>
    <div className=' dark:bg-slate-900 dark:text-white'>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Courses/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Contact" element={<ContactUs />} />
      <Route path="/About" element={<AboutUs />} />
      
    </Routes>
    </div>
    


    </>
  )
}

export default App
