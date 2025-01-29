import { Form } from "../contacto/form";

export const Contacto2 = () => {
    return (
        <div id="contacto" className="w-full h-auto flex flex-row justify-center items-center px-24 py-20 ">
            <div className="w-1/3 h-full bg-white">
                <h2 className="text-xl mb-4 h-[35px] text-violeta border-gray-300 border-b inline-block">
                    Contactá con nosotros
                </h2>

                <h1 className="text-4xl font-bold mb-6 text-black">
                La era de la tecnología esta acá, vos llegaste?
                </h1>
                <h3 className="text-lg text-gray-500 mb-6">
                Los tiempos cambiaron, por lo tanto, toca adaptarse en Mettrix nos encargamos de optimizar procesos mediante el uso de la electrónica.
                </h3>
                <h3 className="text-lg text-gray-500 mb-6">
                Somos apasionados de la electrónica, tomamos cada proyecto como un desafío el cual debe ser llevado a cabo asegurándonos de que el modo en el que estamos trabajando le dará a nuestros clientes un servicio que supere sus expectativas.
                </h3>
                <h3 className="text-lg text-gray-500 mb-6">
                Las ideas pueden ser realidad de la mano de Mettrix. 
                </h3>
                <h3 className="text-lg text-gray-500">
                    <strong>¡Contáctanos y hace de tu idea una realidad!</strong>
                </h3>
            </div>
            <div className="w-2/3 flex flex-col ml-24 justify-center bg-white">
               
                <Form></Form>
            </div>
        </div>
    );
};
