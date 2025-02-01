import { useEffect } from "react"
import contactodesktop from "../../assets/contactodesktop.png"
import contactomobile from "../../assets/contactomobile.png"
import { Datos } from "./datos";
import { Contacto2 } from "./contacto2";
import { FormaParte } from "./formaparte";

export const ContactoMenu = () => {

    useEffect(() => {
        window.scrollTo(0, 0);  // Esto asegura que la página se desplace al principio
      }, []);

    return (
        <div className="mt-[138px]">
            <img src={contactodesktop} className="mq980:hidden"></img>
            <img src={contactomobile} className="hidden mq980:block w-full"></img>
            <div className="bg-gray-100 py-12 px-16 mq980:p-4">
            <Datos></Datos>
            </div>
            <Contacto2></Contacto2>
            <FormaParte></FormaParte>
        </div>
   )
}
