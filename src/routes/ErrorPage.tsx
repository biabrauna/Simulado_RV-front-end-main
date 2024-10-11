import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <h1 className="text-6xl font-bold text-teal-600">Erro 404</h1>
            <p className="mt-4 text-xl text-gray-700">A página que você está procurando não foi encontrada.</p>
            <p className="mt-2 text-md text-gray-500">Você pode voltar para a página inicial ou verificar outros simulados.</p>
            <div className="mt-8 flex gap-4">
                <Link to="/" className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-200">
                    Voltar para Home
                </Link>
                <Link to="/prova" className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-200">
                    Ver Simulados
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
