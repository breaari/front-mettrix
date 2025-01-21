import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Inicio } from './components/inicio/inicio'
import { Nosotros } from './components/nosotros/nosotros'
import { Servicios } from './components/servicios/servicios'
import { Proyectos } from './components/proyectos/proyectos'
import { Contacto } from './components/contacto/contacto'
import { Footer } from './components/footer/footer'

function App() {

  return (
    <>
       <Navbar></Navbar>
       <Inicio></Inicio>
       <Nosotros></Nosotros>
       <Servicios></Servicios>
       <Proyectos></Proyectos>
       <Contacto></Contacto>
       <Footer></Footer>
    </>
  )
}

export default App
