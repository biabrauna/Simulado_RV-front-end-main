import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div 
            className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-teal-100 px-4"
        >
            <h1 
                className="
                    text-5xl // Padrão para mobile
                    sm:text-6xl // Ajuste para telas pequenas
                    lg:text-8xl // Ajuste para telas maiores
                    font-bold text-teal-600"
            >
                Erro 404
            </h1>
            <p 
                className="mt-4 
                    text-lg // Texto padrão para mobile
                    sm:text-xl // Ajuste para telas pequenas
                    lg:text-2xl // Ajuste para telas grandes
                    text-gray-700"
            >
                A página que você está procurando não foi encontrada.
            </p>
            <p 
                className="mt-2 
                    text-sm // Texto menor para mobile
                    sm:text-md // Ajuste para telas pequenas
                    lg:text-lg // Ajuste para telas grandes
                    text-gray-500"
            >
                Você pode voltar para a página inicial ou verificar outros simulados.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                    to="/" 
                    className="bg-teal-500 text-white px-6 py-3 rounded-lg text-center hover:bg-teal-600 transition duration-200"
                >
                    Voltar para Home
                </Link>
                <Link 
                    to="/prova" 
                    className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg text-center hover:bg-gray-400 transition duration-200"
                >
                    Ver Simulados
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
