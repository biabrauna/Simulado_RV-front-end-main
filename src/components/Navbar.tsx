import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react"; // Ícone de menu hambúrguer
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o menu no mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-teal-500 px-8 py-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          <Link to="/">Simulados RV</Link>
        </h1>

        {/* Menu desktop - escondido no mobile */}
        <div className="hidden md:flex space-x-8">
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

        {/* Ícone do menu hambúrguer para mobile */}
        <div className="md:hidden flex items-center">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button onClick={toggleMenu}>
            <Menu className="text-white w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Menu dropdown para mobile */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-teal-400 rounded-lg shadow-lg">
          <Link
            to="/"
            onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
            className="block px-4 py-2 text-white hover:bg-teal-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/prova"
            onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
            className="block px-4 py-2 text-white hover:bg-teal-600 transition-colors duration-200"
          >
            Provas
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
