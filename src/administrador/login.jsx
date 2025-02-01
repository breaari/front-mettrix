import logo from "../../src/assets/logomettrix.png"
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [icon, setIcon] = useState(<IoMdEyeOff className="text-violeta text-xl" />);
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  
  const goTo = (path) => {
    navigate(path);
    };


  const handlePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setIcon(<IoEye className="text-verde text-xl" />);
    } else {
      setPasswordType("password");
      setIcon(<IoMdEyeOff className="text-verde text-xl"/>);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    console.log("email:", email)
    
    try {
      const responseBack = await axios.post("/login", {
        email,
        contraseña
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      console.log("responseBack:", responseBack.data);
    
      if (responseBack.data.success) {
        localStorage.setItem('usuario', JSON.stringify(responseBack.data.usuario));
        goTo('/admin/inicio');
      } else {
        setError("Email y/o contraseña incorrectos, intente denuevo.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response.status === 401) {
          setError("Email y/o contraseña incorrectos, intente denuevo.");
        } else {
          setError("Ocurrió un error, intente denuevo.");
        }
      } else {
        setError("Ocurrió un error, intente denuevo.");
      }
    }
  };

  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center">
      <div className=" w-[400px] h-[500px] mq980:w-full mq980:h-auto rounded-xl flex flex-col items-center justify-start shadow-xl border border-gray-200 mq980:shadow-none mq980:border-none">
         {/* Contenedor del logo */}
        <div className="bg-verde h-[150px] w-[400px] flex items-center justify-center rounded-tr-xl rounded-tl-xl overflow-hidden">
            <img src={logo} className="w-[250px] object-cover" alt="Logo" />
        </div>
        <div className="mt-12 w-[250px]">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="mb-2 font-semibold text-verde text-xl">Email:</label>
            <input className="p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700" type="email" id="email" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label className="mb-2 font-semibold text-verde text-xl">Contraseña:</label>
            <div className="relative flex flex-row items-center">
              <input className="p-2 mb-8 rounded-md border border-gray-300 focus:outline-none w-full text-gray-700" type={passwordType} id="contraseña" placeholder="*********" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
              <span className="absolute right-2 top-2 cursor-pointer" onClick={handlePasswordType}>{icon}</span>
            </div>
            <button className="bg-violeta font-semibold text-md p-2 rounded-md text-white hover:scale-95" type="submit">Ingresar</button>
            {error && <p className="text-red-800 text-sm mt-2 text-center">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}