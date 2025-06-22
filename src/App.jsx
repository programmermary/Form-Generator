import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './layout/Login';
import SignUp from './layout/Signin';

function App() {
  
  return (
   <div className=''>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
   </div>
  )
}

export default App
