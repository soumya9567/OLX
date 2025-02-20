import React from 'react'

function Navbar() {
  return (

        <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-blue-600 text-2xl font-bold">
          <img width="100px" src="./images/logo.png" alt="Logo" />
        </a>

        {/* Location Selector */}
        <div className="w-80 flex items-center border ml-12 border-black rounded-lg px-2 py-1">
          <img src="./images/search (2).png" alt="Search" className="w-5 h-5" />
          <select className="border-white w-full ml-auto p-1 bg-white outline-none">
            <option value="kerala">Kerala</option>
            <option value="tamil-nadu">Tamil Nadu</option>
            <option value="mumbai">Mumbai</option>
            <option value="punjab">Punjab</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className="flex items-center border rounded-lg px-2 py-1 w-1/2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 focus:outline-none"
          />
          <button className="text-gray-600 px-2">🔍</button>
        </div>

        {/* Menu Items */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Login
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Sell
          </button>
        </div>
      </div>
    </nav>
   
  )
}

export default Navbar
