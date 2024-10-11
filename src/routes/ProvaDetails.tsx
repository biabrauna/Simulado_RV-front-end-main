import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getInfos } from "../http/get-info";
import { Loader2 } from "lucide-react";
import backgroundImage from '../assets/home.png'; // Adicione uma imagem de fundo para a tela de detalhes

const ProvaDetails = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["infos"],
    queryFn: getInfos,
    staleTime: 1000 * 60,
  });

  if (isLoading || !data) {
    return (
      <div className="h-screen flex items-center justify-center bg-blue-50">
        <Loader2 className="text-blue-500 animate-spin w-12 h-12" />
      </div>
    );
  }

  const { id } = useParams();
  const navigate = useNavigate();
  const handleContact = () => {
    console.log("Contato enviado!");
    return navigate("/prova");
  };
  const num = Number(id);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-blue-50 relative px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Usando a imagem de fundo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
<div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay para dar contraste */}

      <div className="bg-white flex flex-col justify-center rounded-lg shadow-lg p-8 w-full max-w-lg md:max-w-xl lg:max-w-2xl transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative z-10 animate-slideIn">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 text-center">
          {data.infos[num - 1]?.title}
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-6 text-center">
          ID do simulado selecionado: {data.infos[num - 1]?.id}
        </p>
        
        {/* Descrição do simulado */}
        <p className="text-gray-500 text-sm md:text-md text-center mb-4">
          Este simulado foi criado para testar seus conhecimentos em diversas áreas.
        </p>

        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button
          onClick={handleContact}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 w-full md:w-auto md:min-w-[200px]"
        >
          Selecionar outro simulado
        </button>
      </div>
    </div>
  );
};

export default ProvaDetails;
