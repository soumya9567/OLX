import React from 'react'
import SignIn from './Pages/SignIn/SignIn'
import { Routes, Route } from "react-router-dom";
import SignUp from './Pages/SignUp/SignUp';


function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>

    </div>
  )
}

export default App
