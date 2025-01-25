import { Inicio } from '../inicio/inicio';
import { Nosotros } from '../nosotros/nosotros';
import { Servicios } from '../servicios/servicios';
import { Proyectos } from '../proyectos/proyectos';
import { Contacto } from '../contacto/contacto';
import { Footer } from '../footer/footer';
import { Whatsapp } from '../whatsapp/whatsapp';

export const Landing = () => {
  return (
    <div className='mt-[138px]'>
      <Inicio />
      <Nosotros />
      <Servicios />
      <Proyectos />
      <Contacto />
    </div>
  );
};
