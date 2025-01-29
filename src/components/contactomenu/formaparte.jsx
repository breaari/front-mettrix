import { FormaParteForm } from "./formaparteform";

export const FormaParte = () => {
    return (
        <div id="contacto" className="w-full h-auto flex flex-row justify-center items-center px-24 py-20 ">
            <div className="w-1/3 h-full bg-white">
                <h2 className="text-xl mb-4 h-[35px] text-violeta border-gray-300 border-b inline-block">
                    Únete a nuestro equipo
                </h2>

                <h1 className="text-4xl font-bold mb-6 text-black">
                ¡Forma parte de Mettrix!
                </h1>
                <h3 className="text-lg text-gray-500 mb-6">
                La pasión forma parte de Mettrix, si sos un apasionado por tu trabajo nos interesa conocerte. 
                </h3>
                <h3 className="text-lg text-gray-500 mb-6">
                Si estas interesado en formar parte de Mettrix completa el formulario y adjunta tu currículum vitae.
                </h3>
                <h3 className="text-lg text-gray-500 mb-6">
                Nos es de sumo agrado escuchar acerca de vos y tus habilidades.
                </h3>
                <h3 className="text-lg text-gray-500">
                    <strong>¡Gracias por tu interés en formar parte de Mettrix!</strong>
                </h3>
            </div>
            <div className="w-2/3 flex flex-col ml-24 justify-center bg-white">
               
                <FormaParteForm></FormaParteForm>
            </div>
        </div>
    );
};
