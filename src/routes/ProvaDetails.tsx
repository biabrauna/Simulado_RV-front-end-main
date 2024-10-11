// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getInfos } from "../http/get-info";
// import { Loader2 } from "lucide-react";

// const ProvaDetails = () => {
//         const { data, isLoading } = useQuery({
//             queryKey: ["infos"],
//             queryFn: getInfos,
//             staleTime: 1000 * 60,
//         });
        
//         if (isLoading || !data) {
//             return (
//                 <div className="h-screen flex items-center justify-center">
//                     <Loader2 className="text-zinc-500 animate-spin size-10" />
//                 </div>
//                 );
//             }

//     const {id} = useParams()

//     // 6 - redirect
//     const navigate = useNavigate()

//     const handleContact = () => {
//         console.log("Contato enviado!");
//         return navigate("/");
//     };
//     const num = Number(id);

//     return (
//     <div>
//         <h1>ID do simulado selecionado: {data.infos[num-1]?.id}</h1>
//         {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
//         <button onClick={handleContact}>Enviar mensagem</button>
//     </div>
//     )
// }

// export default ProvaDetails
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getInfos } from "../http/get-info";
import { Loader2 } from "lucide-react";

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
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Simulado {data.infos[num]?.title}
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          ID do simulado selecionado: {data.infos[num]?.id}
        </p>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button
          onClick={handleContact}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Selecionar outro simulado
        </button>
      </div>
    </div>
  );
};

export default ProvaDetails;
