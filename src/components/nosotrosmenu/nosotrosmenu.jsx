import { useEffect } from "react"
import nosotrosDesktop from "../../assets/nosotrosdesktop.png"
import { Cualidades } from "./cualidades"
import { Industrias } from "./industrias"
import { QuienesSomos } from "./quienessomos"

export const NosotrosMenu = () => {

    useEffect(() => {
        window.scrollTo(0, 0);  // Esto asegura que la página se desplace al principio
      }, []);

    return (
        <div className="mt-[138px]">
            <img src={nosotrosDesktop}></img>
            <QuienesSomos></QuienesSomos>
            <Cualidades></Cualidades>
            <Industrias></Industrias>
        </div>
    )
}