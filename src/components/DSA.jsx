import React from "react";
import { Outlet, Link } from "react-router-dom";

const DSA = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">DSA Learning Paths</h1>
        <nav className="flex justify-center space-x-6 mb-6">
          <Link to="beginner" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">Beginner</Link>
          <Link to="intermediate" className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">Intermediate</Link>
          <Link to="advanced" className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition">Advance</Link>
        </nav>
        <hr className="border-gray-300 mb-6" />
        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DSA;
