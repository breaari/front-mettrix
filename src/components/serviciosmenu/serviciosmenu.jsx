import inicio from "../../assets/inicio.png"
import { Diferencial } from "./diferencial";
import { Inicio2 } from "./inicio2";
import { Tipos } from "./tipos";
import { Xqelerginos } from "./xqelegirnos";

export const ServiciosMenu = () => {

  const goToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

    return (
        <div className="relative mt-[138px]">
       <Inicio2></Inicio2>
       <Tipos></Tipos>
       <Xqelerginos></Xqelerginos>
       <Diferencial></Diferencial>
      </div>
      
    )
}