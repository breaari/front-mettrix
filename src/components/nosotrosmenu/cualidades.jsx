import { FaGraduationCap } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { TbLockFilled } from "react-icons/tb";
import { FaFileAlt } from "react-icons/fa";

export const Cualidades = () => {
    return (
        <div className="bg-violeta h-[800px] text-white grid grid-cols-2 gap-8 p-20 mq980:grid-cols-1 mq980:h-auto mq980:p-8">
            <div className="flex flex-col">
                <div className="flex items-center text-2xl mb-4">
                    <div className="bg-white p-2 rounded-full">
                        <FaGraduationCap className="text-violeta" />
                    </div>
                    <a className="font-semibold ml-4">CONOCIMIENTO</a>
                </div>
                <div className="text-lg">
                    En cada paso que damos se deja ver como nuestro equipo usando el ingenio, la electrónica y las herramientas más novedosas en la que vivimos satisfacen sus necesidades de manera eficiente y creativa.
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center text-2xl mb-4">
                    <div className="bg-white p-2 rounded-full">
                        <FaStar className="text-violeta" />
                    </div>
                    <a className="font-semibold ml-4">EXPERIENCIA</a>
                </div>
                <div className="text-lg">
                    Lideramos proyectos focalizados en la resolución de problemáticas complejas. Desarrollamos tecnologías innovadoras para satisfacer necesidades desde 2022.
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center text-2xl mb-4">
                    <div className="bg-white p-2 rounded-full">
                        <FaHandshake className="text-violeta" />
                    </div>
                    <a className="font-semibold ml-4">CALIDAD</a>
                </div>
                <div className="text-lg">
                    Durante el desarrollo de un proyecto, escuchar Mettrix es lo que cualquier persona puede desear, ya que significa , detrás de cada circuito hay una persona que garantiza haber desarrollado el mismo pensando en cada detalle para que su funcionamiento sea prolongado, sin fallas y supere sus expectativas.
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center text-2xl mb-4">
                    <div className="bg-white p-2 rounded-full">
                        <TbLockFilled className="text-violeta" />
                    </div>
                    <a className="font-semibold ml-4">SEGURIDAD</a>
                </div>
                <div className="text-lg">
                    Con el énfasis puesto en hacer que la tecnología no presente fallas a la hora de llevar a cabo su tarea creemos en la frase “Trust is Good, control is better”. Asegurándonos del correcto desempeño de nuestros sistemas durante el inicio, desarrollo y fin del proyecto.
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center text-2xl mb-4">
                    <div className="bg-white p-2 rounded-full">
                        <FaHeart className="text-violeta" />
                    </div>
                    <a className="font-semibold ml-4">ESCUCHA CONSTANTE</a>
                </div>
                <div className="text-lg">
                    El objetivo que nos planteamos en cada proyecto es superar las expectativas de nuestros clientes. Para esto nos comprometemos a entender y analizar sus propuestas, con el fin de llegar a cumplirlas de un modo que se ajuste a cada detalle.
                </div>
            </div>         
            <div className="flex flex-col">
                <div className="flex items-center text-2xl mb-4">
                    <div className="bg-white p-2 rounded-full">
                        <FaFileAlt className="text-violeta" />
                    </div>
                    <a className="font-semibold ml-4">PLANIFICACIÓN DE PRESUPUESTO</a>
                </div>
                <div className="text-lg">
                    Nos enfocamos en estudiar su caso, para ofrecerles un precio competitivo en el mercado que le sea rentable a usted o su empresa.
                </div>
            </div>
        </div>
    );
};
