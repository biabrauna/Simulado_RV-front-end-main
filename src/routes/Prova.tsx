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
            className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 relative gap-y-8"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'scroll', // Melhor para dispositivos móveis
            }}
        >
            {/* Overlay de fundo para dar contraste à imagem */}
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
<div className="absolute inset-0 bg-black opacity-70 animate-fadeIn"></div>

            <h1
                className="text-4xl md:text-5xl font-bold text-white mb-16 relative z-10 text-center animate-titleZoom"
                style={{
                    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                }}
            >
                Simulados Disponíveis
            </h1>

            <div className="text-2xl md:text-3xl flex flex-col md:flex-row items-center justify-center gap-6 font-semibold text-blue-600 relative z-10">
                <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 w-full md:w-auto animate-fadeInUp">
                    <p className="text-center">
                        <Link to='/prova/1'>{data.infos[0]?.title}</Link>
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 w-full md:w-auto animate-fadeInUp">
                    <p className="text-center">
                        <Link to='/prova/2'>{data.infos[1]?.title}</Link>
                    </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 w-full md:w-auto animate-fadeInUp">
                    <p className="text-center">
                        <Link to='/prova/3'>{data.infos[2]?.title}</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Prova;

