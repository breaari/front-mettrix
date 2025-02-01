import { useEffect } from "react"
import nosotrosDesktop from "../../assets/nosotrosdesktop.png"
import nosotrosMobile from "../../assets/nosotrosmobile.png"
import { Cualidades } from "./cualidades"
import { Industrias } from "./industrias"
import { QuienesSomos } from "./quienessomos"

export const NosotrosMenu = () => {

    useEffect(() => {
        window.scrollTo(0, 0);  // Esto asegura que la página se desplace al principio
      }, []);

    return (
        <div className="mt-[138px]">
            <img src={nosotrosDesktop} className="mq980:hidden"></img>
            <img src={nosotrosMobile} className="hidden mq980:block w-full"></img>
            <QuienesSomos></QuienesSomos>
            <Cualidades></Cualidades>
            <Industrias></Industrias>
        </div>
    )
}