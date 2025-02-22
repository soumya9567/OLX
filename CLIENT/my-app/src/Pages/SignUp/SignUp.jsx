import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import axios from "axios";
import { registerUser } from "../../redux/reducers/authSlice";
import { Link } from 'react-router-dom';

function SignUp() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState([]);
  const handleChange = (e) => {
    console.log(formData, "on handle change");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



    const handleSubmit = async (e) => {
      e.preventDefault();
          dispatch(registerUser(formData));
      try {
        const response = await axios.post("http://localhost:3000/api/signup", formData, {
          headers: { "Content-Type": "application/json" }
        });
        
        if (response.data.success) {

          dispatch(registerUser(formData));
          console.log("User registered successfully!");
        } else {
          console.log("Error:", response.data.message);
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    };
  
  
  

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

       

        <form  onSubmit={handleSubmit} className="space-y-4">


        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
             User Name
            </label>
            <input
              type="text"
              id="name"
              name="username"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your user name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Forget password?{" "}
            <Link to="/"  className="text-blue-500 hover:underline">
              SignIn 
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUp
