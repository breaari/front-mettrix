import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = 'https://back.mettrix.com.ar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
