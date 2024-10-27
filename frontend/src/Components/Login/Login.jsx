import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import AsideLeft from '../AsideLeft/AsideLeft ';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('https://brickly-backend.onrender.com/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
      });

      if (response.ok) {
        
        const data = await response.json();
        setSuccess('Login successful!');
        console.log('Login successful:', data);
        localStorage.setItem('token', data.token);
        navigate('/PropertyDetail');
      } else {
        setError('Login failed: ' + response.statusText);
      }
    } catch (err) {
      setError('An error occurred: ' + err.message);
    }
  };

  return (
    <>
   <Navbar login={"login"} size={"navbar-brand col-10 "}/> 
      <div className='d-flex justify-content-between col-12'>
          <AsideLeft/>
                 <form onSubmit={handleSubmit} className="login-container main-content col-6">
                      <h1 className=" font-bold text-2xl mb-16">INICIAR SESION</h1>

                      <label htmlFor="email" className="text-black font-bold mb-2 block text-sm">
                      ¿Cuál es tu correo electrónico?
                      </label>
                            <input
                            type="email"
                            value={email}
                            className="p-3 rounded block mb-2 border text-slate-300 w-full"
                            placeholder="Ejemplo: tu@correo.com"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />



                      <label htmlFor="password" className="text-black font-bold mt-6 mb-2 block text-sm">
                      Contraseña
                      </label>
                      <input
                        type="password"

                        className="p-3 rounded block mb-2 border text-slate-300 w-full"
                        placeholder="Escribe tu contraseña "
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />



                      <button type="submit" className="w-40 bg-black float-right text-white px-3 p-2 rounded-lg mt-14">
                        Entrar
                      </button>
                      <small className="mt-36 block text-center"> ¿No tienes una cuenta brickly? <a  className=" px-1 rounded-md text-trueGray-500 " href="/auth/register">Registrate aquí</a> </small>

                </form>

          {error && <div style={{ color: 'red' }}>{error}</div>}
          {success && <div style={{ color: 'green' }}>{success}</div>}
       </div>
  
<Footer/>
    </>
  );
};


