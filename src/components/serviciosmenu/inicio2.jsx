import { useNavigate } from "react-router-dom";
import inicio from "../../assets/inicio.png"

export const Inicio2 = () => {

    const navigate = useNavigate();;
  
    const goToSection = (route) => {
      navigate(route);
    };
  

    return (
        <div className="relative">
        <img src={inicio} className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white p-6 text-start px-12">
          {/* <h2 className="text-md font-bold mb-4 text-violeta">METTRIX: INNOVAMOS PARA AUTOMATIZAR TU MUNDO.</h2> */}
          <h1 className="text-3xl font-bold mb-6 text-black max-w-[60%]">
          DESARROLLAMOS ELECTRÓNICA A MEDIDA DE ACUERDO A TUS NECESIDADES.
          </h1>
          <h3 className="text-[12px] text-gray-500 max-w-[40%] mb-12">
          NOS ENCARGAMOS DE INVESTIGAR Y DESARROLLAR LA ELECTRÓNICA NECESARIA PARA TRABAJOS DE AUTOMATIZACIÓN, GESTIÓN Y MONITOREO DE ACUERDO CON LO QUE USTEDED REQUIERE. 
          </h3>
          <button className="bg-violeta text-white py-2 px-8 text-[12px] rounded-[50px] hover:scale-95 duration-300 transform"
            onClick={() => goToSection('/contacto')}>
            CONTÁCTANOS
            </button>
        </div>
      </div>
      
    )
}