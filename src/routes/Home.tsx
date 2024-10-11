import React from 'react';
import backgroundImage from '../assets/home.png'; // Importando a imagem diretamente

const Home = () => {
  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-blue-50 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Usando a imagem importada
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay de fundo para dar contraste à imagem */}
      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
<div className="absolute inset-0 bg-black opacity-70"></div>
      
      <h1 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white relative z-10 animate-slideIn"
        style={{
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
        }}
      >
        Bem-vindo à Página Inicial
      </h1>

      <div className="absolute bottom-10 z-10 animate-fadeIn">
        <a href="/prova" className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105">
          Comece Agora!
        </a>
      </div>
    </div>
  );
};

export default Home;
