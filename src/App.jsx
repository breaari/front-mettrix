import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Landing } from './components/landing/landing';
import { NosotrosMenu } from './components/nosotrosmenu/nosotrosmenu';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from './components/footer/footer';
import { Whatsapp } from './components/whatsapp/whatsapp';
import { AnimatePresence, motion } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Página principal ("/") entra de derecha a izquierda */}
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
        {/* Página "nosotros" ("/nosotros") entra de izquierda a derecha */}
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
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Whatsapp />
      <Footer />
    </Router>
  );
}

export default App;

