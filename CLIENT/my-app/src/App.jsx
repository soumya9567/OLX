import React, { useEffect } from 'react'
import SignIn from './Pages/SignIn/SignIn'
import { Routes, Route } from "react-router-dom";
import SignUp from './Pages/SignUp/SignUp';
import { useSelector } from 'react-redux';
import Home from './Pages/Home/Home';


function App() {
  const { user} = useSelector((state) => state.auth);
  const { currentUser } = useSelector((state) => state.auth);

  console.log(user, "user from store");
  console.log(isAutheticated);
  useEffect(() => {
    localStorage.getItem("user");
  });

  return (
    <div className="max-w-7xl mx-auto h-screen">
      <Routes>
        {isAutheticated ? (
          <Route path="/" element={<Home currentUser={currentUser} />} />
        ) : (
          <Route path="/" element={<SignIn />} />
        )}

        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </div>
  )
}

export default App
