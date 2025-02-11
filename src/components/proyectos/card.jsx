import { useNavigate } from 'react-router-dom';  
import { FaLink } from 'react-icons/fa';

export const Card = ({ proyecto }) => {
  const navigate = useNavigate();  

  const goToDetail = () => {
    const projectUrl = `/proyectos/${proyecto.nombre.toLowerCase().replace(/ /g, "-")}`;
    navigate(projectUrl);  
  };

  // Asegurar que multimedia sea un array
  const multimedia = Array.isArray(proyecto.multimedia) ? proyecto.multimedia : [proyecto.multimedia];
  console.log("locura:", `https://back.mettrix.com.ar/${multimedia[0]}`);

  return (
    <div className="border-gray-200 border rounded-2xl w-[350px] h-[300px] mq980:w-full bg-white shadow-md overflow-hidden">
      <div className="relative w-full h-[70%]">
        {/* Imagen */}
        <img
          src={`https://back.mettrix.com.ar/${multimedia[0]}`} 
          className="w-full h-full object-cover rounded-t-2xl"
          alt={proyecto.nombre}
        />
        
        {/* Contenedor del ícono y texto */}
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          {/* Fondo violeta con opacidad */}
          <div className="absolute inset-0 bg-violeta opacity-70"></div>
          
          {/* Ícono con evento de click */}
          <button
            onClick={goToDetail}  
            className="bg-violeta text-white text-3xl p-4 rounded-full flex items-center justify-center w-16 h-16 mb-2 relative"
          >
            <FaLink />
          </button>

          {/* Texto */}
          <p className="text-white text-md text-center px-2 relative font-semibold">
            {proyecto.nombre}
          </p>
        </div>
      </div>
      <div className="h-[30%] flex justify-center items-center">
        <h2 className="text-md text-center text-gray-500 font-semibold">
          {proyecto.nombre}
        </h2>
      </div>
    </div>
  );
};
