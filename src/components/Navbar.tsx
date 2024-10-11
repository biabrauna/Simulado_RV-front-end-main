

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-teal-500 px-8 py-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          <Link to="/">Simulados RV</Link>
        </h1>
        <div className="space-x-8">
          <Link
            to="/"
            className="text-white text-lg hover:text-teal-800 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/prova"
            className="text-white text-lg hover:text-teal-800 transition-colors duration-300"
          >
            Provas
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
