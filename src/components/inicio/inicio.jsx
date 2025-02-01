import inicio from "../../assets/inicio.png"
import iniciomobile from "../../assets/iniciomobile.png"

export const Inicio = () => {

  const goToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

    return (
        <div className="relative ">
        <img src={inicio} className="mq980:hidden w-full h-auto" />
        <img src={iniciomobile} className="hidden mq980:block w-full h-auto" />
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white p-6 text-start px-12 mq980:px-8">
          <h2 className="text-md font-bold mb-4 text-violeta">METTRIX: INNOVAMOS PARA AUTOMATIZAR TU MUNDO.</h2>
          <h1 className="text-3xl font-bold mb-6 text-black max-w-[60%] mq980:max-w-full mq980:text-2xl">
            DESARROLLAMOS TECNOLOGÍA Y AUTOMATIZACIÓN DE PROCESOS
          </h1>
          <h3 className="text-[12px] text-gray-500 max-w-[40%] mb-12 mq980:max-w-full">
            EN METTRIX DESARROLLAMOS TECNOLOGÍA INNOVADORA PARA AUTOMATIZAR PROCESOS, OPTIMIZAR RECURSOS Y FACILITAR LA TRANSFORMACIÓN DIGITAL EN EMPRESAS Y HOGARES.
          </h3>
          <button className="bg-violeta text-white py-2 px-8 text-[12px] rounded-[50px] hover:scale-95 duration-300 transform"
            onClick={() => goToSection("contacto")}>
            SOLICITÁ TU DESARROLLO PERSONALIZADO
            </button>
        </div>
      </div>
      
    )
}