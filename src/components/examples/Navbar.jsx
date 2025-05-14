import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="bg-gray-800 p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">
          🧠 Build UI Muscle
        </Link>
        <div className="space-x-4">
          {pathname !== "/" && (
            <Link
              to="/"
              className="text-sm bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 transition"
            >
              Home
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar