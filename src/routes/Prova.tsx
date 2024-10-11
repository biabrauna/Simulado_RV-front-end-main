// import React from 'react'
// import { Link } from 'react-router-dom'
// import { getInfos } from '../http/get-info';
// import { useQuery } from '@tanstack/react-query';
// import { Loader2 } from 'lucide-react';

// const Prova = () => {
//     const { data, isLoading } = useQuery({
//         queryKey: ["infos"],
//         queryFn: getInfos,
//         staleTime: 1000 * 60,
//     });
    
//     if (isLoading || !data) {
//         return (
//             <div className="h-screen flex items-center justify-center">
//                 <Loader2 className="text-zinc-500 animate-spin size-10" />
//             </div>
//             );
//         }
    
//     return(
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-2">
//         <p className="text-3xl font-semibold text-teal-900 mb-8">Simulados disponiveis</p>
//         <div className="text-2xl flex items-center justify-center gap-5 font-semibold text-blue-600 mb-8">
//             <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition-colors duration-300">
//                 <p>
//                     <Link to='/prova/1'>Simulado {(data.infos)[0]?.title}</Link>
//                 </p>
//             </div>
//             <div  className="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition-colors duration-300">
//                 <p>
//                     <Link to='/prova/2'>Simulado {data.infos[2]?.title}</Link>
//                 </p>
//             </div>
//             <div  className="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition-colors duration-300">
//                 <p>
//                     <Link to='/prova/3'>Simulado {data.infos[3]?.title}</Link>
//                 </p>
//             </div>
//         </div>
//     </div>
//     )
// }

// export default Prova

import React from 'react';
import { Link } from 'react-router-dom';
import { getInfos } from '../http/get-info';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import backgroundImage from '../assets/home.png'; // Certifique-se de que o caminho está correto

const Prova = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["infos"],
        queryFn: getInfos,
        staleTime: 1000 * 60,
    });
    
    if (isLoading || !data) {
        return (
            <div className="h-screen flex items-center justify-center">
                <Loader2 className="text-zinc-500 animate-spin size-10" />
            </div>
        );
    }
    
    return (


        <div 
            className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-2 relative gap-y-8"
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
        className="text-4xl font-bold text-white-700 relative z-10"
        style={{
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
          transform: 'translateZ(20px)' // Efeito 3D no texto
        }}
        >
        Simulados disponíveis

      </h1>
            <div className="text-2xl flex items-center justify-center gap-5 font-semibold text-blue-600 mb-8 relative z-10">
                <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition-colors duration-300">
                    <p>
                        <Link to='/prova/1'>Simulado {data.infos[0]?.title}</Link>
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition-colors duration-300">
                    <p>
                        <Link to='/prova/2'>Simulado {data.infos[1]?.title}</Link>
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition-colors duration-300">
                    <p>
                        <Link to='/prova/3'>Simulado {data.infos[2]?.title}</Link>
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Prova;
