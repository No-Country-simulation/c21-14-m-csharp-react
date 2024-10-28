
import React, { useState } from 'react';
import './Register.css';
import AsideLeft from '../AsideLeft/AsideLeft ';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { Link } from 'react-router-dom'

export const Register = () =>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        country: '',
        documentId: '',
        profileUrl: '',
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.password || !formData.phone || !formData.country || !formData.documentId || !formData.profileUrl) {
            setError('Todos los campos son obligatorios.');
            return false;
        }
        if (formData.password.length < 8) {
            setError('La contraseña debe tener como mínimo 8 caracteres.');
            return false;
        }
        // Aquí puedes agregar más validaciones, como formato de correo electrónico y número de teléfono
        const phoneRegex = /^\+\d{1,3}\d{9,15}$/;
        if (!phoneRegex.test(formData.phone)) {
            setError('El número de teléfono debe tener el formato correcto con prefijo por país.');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await fetch('https://brickly-backend.onrender.com/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const result = await response.json();
            setMessage('¡Registro exitoso!');
            setError('');
        } catch (error) {
            setError('Hubo un problema con el registro.');
            setMessage('');
        }
    };

    return (
        <>
        <Navbar register={"register"} size={"navbar-brand col-5 "}/> 
        <div className='contenedorR d-flex  col-12 '>
          <AsideLeft/>
        <div className='C_Register main-content' >
   
        <form onSubmit={handleSubmit} className='container-fluid w-100 form-register'>
            <h1 className=" font-bold text-2xl mb-4">CREA TU CUENTA</h1>
            <p className='px-3'>
                Al crear una cuenta en Brickly aceptas el{" "}
                <Link href="#">
                <b>Aviso de Privacidad y Términos y Condiciones.</b>
                </Link>
            </p>
            <div className='d-flex justify-content-around'>
                    <label>
                            Nombre :
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
                    <label>
                            Apellido :
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
            </div>
           <div>
           <label className='px-4'>
                Correo Electrónico:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>       
           </div>
            
            <div className='d-flex justify-content-around '>
                    <label className='inputSize'>
                            Codigo del Pais
                            <select className="text-center ">
                                 <option > Mexico (+52) </option>
                           </select>
                    </label>

                    <label className='inputSize'>
                            ¿Cuál es tu número móvil?:
                
                             <input className="  text-center border" type="tel" name="phone" placeholder="Escribe tu número móvil" value={formData.phone} onChange={handleChange} required />
                    </label>
            </div>
           <div style={{padding:"0 2.5rem"}} className='d-flex justify-content-between  m-1'>
                <label className='inputSize'>
                    País:
                    <input type="text" name="country" value={formData.country} onChange={handleChange} required />
                </label>
                <label className='inputSize'>
                    Documento de Identificación:
                    <input type="text" name="documentId" value={formData.documentId} onChange={handleChange} required />
                </label>
            </div>
                <div className='d-flex justify-content-around'>
                        <label className='inputSize'>
                        Contraseña:
                        <input type="password" name="password" value={formData.password} onChange={handleChange}  placeholder="********" required />
                    </label>

                    <label className='inputSize'>
                        Confirmar Contraseña:
                        <input type="ConfirmarPassword" name="ConfirmarPassword" value={formData.password}  placeholder="********" onChange={handleChange} required />
                    </label>
                </div>
        
           <div style={{padding:"0 2.8rem"}}>
           <label>
                URL del Perfil:
                <input type="url" name="profileUrl" value={formData.profileUrl} onChange={handleChange} required />
            </label>
           </div>
          
            <button type="submit" className='btn btn-secondary'>Registrarse</button>
             <label className='text-center mt-3'>¿Ya tienes una cuenta Brickly?
                 <Link  className=" px-1 rounded-md underline" href="/auth/login"> Ingresa aquí</Link>
             </label>

                {message && <p style={{ color: 'green' }}>{message}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
         </div>
    </div>



        <Footer style={{    position: 'fixed',
    bottom: '0',
    padding:"0px 16px",
    height:"140px",}}/>
        </>
    );
}


