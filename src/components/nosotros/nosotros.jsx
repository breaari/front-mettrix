import { useNavigate } from "react-router-dom";
import logomsombra from "../../assets/logomsombra.png";

export const Nosotros = () => {
  const navigate = useNavigate();

  const goToSection = () => {
    navigate("/nosotros");  // Redirige a la ruta "/nosotros"
  };

  return (
    <div className="w-full h-auto flex flex-row mq980:flex-col justify-center items-center px-32 py-24 mq980:p-8 ">
      <div className="w-1/2 h-full bg-white mq980:w-full">
        <h2 className="text-xl font-bold mb-4 text-violeta border-gray-300 border-b inline-block">
          LIDERANDO LA INNOVACIÓN DIGITAL PARA EMPRESAS Y HOGARES
        </h2>

        <h1 className="text-5xl font-bold mb-6 text-black">
          SOMOS METTRIX
        </h1>
        <h3 className="text-lg mb-6">
          Nos especializamos en <strong>diseñar y fabricar soluciones tecnológicas a medida, integrando IoT y automatización para transformar procesos y mejorar la eficiencia en empresas y hogares.</strong>
        </h3>
        <h3 className="text-lg mb-6">
          Trabajamos de la mano con nuestros clientes para entender sus necesidades específicas y crear proyectos innovadores que optimicen recursos, reduzcan costos y lleven la tecnología a un nuevo nivel.
        </h3>
        <h3 className="text-lg mb-6">
          <strong>
            En Mettrix, conectamos ideas con soluciones inteligentes.
          </strong>
        </h3>
        <button className="bg-violeta text-white font-semibold py-4 px-12 text-lg rounded-[50px]"
          onClick={goToSection}>
          Más detalles
        </button>
      </div>
      <div className="w-1/2 mq980:w-full flex flex-col ml-24  mq980:ml-0 mq980:mt-8 justify-center items-center bg-white">
        <img src={logomsombra} className="w-[350px] mq980:hover:translate-x-0 hover:translate-x-5 duration-500 transform"></img>
      </div>
    </div>
  );
};
