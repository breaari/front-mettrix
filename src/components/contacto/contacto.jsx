import { Form } from "./form";

export const Contacto = () => {
    return (
        <div className="w-full h-auto flex flex-row justify-center items-center p-32 ">
            <div className="w-1/2 h-full bg-white">
                <h2 className="text-xl font-bold mb-4 text-violeta border-gray-300 border-b inline-block">
                    Lorem ipsum dolor sit amet.
                </h2>

                <h1 className="text-5xl font-bold mb-6 text-black">
                ¿Lorem ipsum dolor sit amet?
                </h1>
                <h3 className="text-lg text-gray-500 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                </h3>
                <h3 className="text-lg text-gray-500 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                </h3>
                <h3 className="text-lg text-gray-500 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
                <h3 className="text-lg text-gray-500">
                    <strong>¡Lorem ipsum dolor sit amet, consectetur adipiscing elit!</strong>
                </h3>
            </div>
            <div className="w-1/2 flex flex-col ml-24 justify-center bg-white">
               
                <Form></Form>
            </div>
        </div>
    );
};
