import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Landing } from './components/landing/landing';
import { NosotrosMenu } from './components/nosotrosmenu/nosotrosmenu';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from './components/footer/footer';
import { Whatsapp } from './components/whatsapp/whatsapp';
import { AnimatePresence, motion } from 'framer-motion';
import { Proyectos } from "./components/proyectos/proyectos";
import { Login } from './administrador/login'; 
import { FormularioProyectos } from './administrador/formularioproyectos';
import { Menu } from './administrador/menu'; // Importa el componente Menu
import { Listado } from './administrador/listado';
import { Editar } from './administrador/editar';
import { ContactoMenu } from './components/contactomenu/contactomenu';
import { ServiciosMenu } from './components/serviciosmenu/serviciosmenu';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Landing />
            </motion.div>
          }
        />
        <Route
          path="/nosotros"
          element={
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <NosotrosMenu />
            </motion.div>
          }
        />
        <Route
          path="/proyectos"
          element={
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Proyectos />
            </motion.div>
          }
        />
         <Route
          path="/contacto"
          element={
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <ContactoMenu />
            </motion.div>
          }
        />
         <Route
          path="/servicios"
          element={
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <ServiciosMenu />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

// Layout para rutas administrativas con Menu fijo
function AdminLayout({ children }) {
  return (
    <div className="flex">
      <Menu />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <AnimatedRoutes />
              <Whatsapp />
              <Footer />
            </>
          }
        />
        {/* Rutas administrativas */}
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <Routes>
                <Route path="agregar" element={<FormularioProyectos />} />
                <Route path="/" element={<Listado />} />
                <Route path="editar" element={<Editar />} />
                
              </Routes>
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

