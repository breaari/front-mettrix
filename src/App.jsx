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
import { Detalle } from './components/proyectos/detalle';
import { PrivateRoute } from './administrador/privateRoute'
import { ProyectosMenu } from './components/proyectosmenu/proyectosmenu';

// Rutas Animadas para la interfaz pública
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
              <ProyectosMenu />
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
        <Route
          path="/proyectos/:nombre"
          element={
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Detalle />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function AdminLayout({ children }) {
  return (
    <div className="flex mq980:flex-col">
      <Menu />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
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
        {/* Ruta de Login */}
        <Route path="/admin/login" element={<Login />} />
        
        {/* Rutas protegidas administrativas */}
        <Route
          path="/admin/*"
          element={
            <PrivateRoute>
              <AdminLayout>
                <Routes>
                  <Route path="agregar" element={<FormularioProyectos />} />
                  <Route path="inicio" element={<Listado />} />
                  <Route path="editar/:id" element={<Editar />} />
                </Routes>
              </AdminLayout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;