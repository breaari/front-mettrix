import React from 'react';
import { Navigate } from 'react-router-dom';

// Suponemos que tienes alguna lógica para comprobar si el usuario está logueado
// Como ejemplo, uso `localStorage` para verificar si existe un token
export const PrivateRoute = ({ children }) => {
  const isLogged = localStorage.getItem('usuario'); // O usa cualquier otro mecanismo de autenticación

  if (!isLogged) {
    // Si no está logueado, redirige al login
    return <Navigate to="/admin/login" />;
  }

  return children; // Si está logueado, renderiza las rutas hijas
};




