import { Form } from "./form";

export const Contacto = () => {
    return (
        <div id="contacto" className="w-full h-auto flex flex-row mq980:flex-col justify-center items-center px-32 py-20 mq980:px-8">
            <div className="w-1/2 mq980:w-full h-full bg-white">
                <h2 className="text-xl font-bold mb-4 text-violeta border-gray-300 border-b inline-block">
                    Contáctanos y juntos haremos realidad tus proyectos tecnológicos.
                </h2>

                <h1 className="text-5xl font-bold mb-6 text-black">
                    ¿Listo para dar el siguiente paso hacia la innovación?
                </h1>
                <h3 className="text-lg text-gray-500 mb-6">
                Nos especializamos en desarrollar proyectos personalizados que integran innovación tecnológica y eficiencia para responder a las necesidades específicas de cada cliente. Trabajamos estrechamente para comprender objetivos y desafíos, diseñando soluciones a medida que optimizan procesos y generan resultados efectivos. 
                </h3>
                <h3 className="text-lg text-gray-500 mb-6">
                Con un equipo altamente capacitado y comprometido, te acompañamos en cada etapa del proyecto, desde la idea inicial hasta su implementación, asegurando un impacto positivo y sostenible en tus operaciones. 
                </h3>
                <h3 className="text-lg text-gray-500 mb-6">
                Nuestro equipo está listo para colaborar contigo y llevar tus ideas al siguiente nivel. 
                </h3>
                <h3 className="text-lg text-gray-500">
                    <strong>¡Estamos listos para convertir tus ideas en realidad!</strong>
                </h3>
            </div>
            <div className="w-1/2 mq980:w-full mq980:ml-0 flex flex-col ml-24 justify-center bg-white mq980:mt-8">
               
                <Form></Form>
            </div>
        </div>
    );
};
