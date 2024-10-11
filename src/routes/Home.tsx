// import React from 'react';

// const Home = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-50">
//       <h1 className="text-4xl font-bold text-teal-700">
//         Bem-vindo à Página Inicial
//       </h1>
//     </div>
//   );
// };

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
      <h1 
        className="text-4xl font-bold text-white-700 relative z-10"
        style={{
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
          transform: 'translateZ(20px)' // Efeito 3D no texto
        }}
      >
        Bem-vindo à Página Inicial
      </h1>
      
      {/* Overlay de fundo para dar contraste à imagem */}
      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
<div className="absolute inset-0 bg-black opacity-70"></div>
    </div>
  );
};

export default Home;
