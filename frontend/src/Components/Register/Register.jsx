
import React, { useState } from 'react';
import './Register.css';
import AsideLeft from '../AsideLeft/AsideLeft ';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      countryCode: '',
      phone: '',
      country: '',
      documentId: '',
      profileUrl: '',
      confirmPassword: '',
    });
    const navigate = useNavigate();
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
      if (formData.password !== formData.confirmPassword) {
        setError('Las contraseñas no coinciden.');
        return false;
      }
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.phone || !formData.country || !formData.documentId || !formData.profileUrl) {
        setError('Todos los campos son obligatorios.');
        return false;
      }
      if (formData.password.length < 8) {
        setError('La contraseña debe tener como mínimo 8 caracteres.');
        return false;
      }
      const phoneRegex = /^\+\d{5,}$/;
      if (!phoneRegex.test(formData.countryCode+formData.phone)) {
        console.log(formData.phone);
        
        setError('El número de teléfono debe tener el formato correcto con prefijo por país.' );
        return false;
      }
      return true;
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) {
        return;
      }
    
  
      const fullName = `${formData.firstName} ${formData.lastName}`;
      const dataToSend = {
        ...formData,
        name: fullName,
      };

      const jsonData={

        "name": dataToSend.name,

        email: dataToSend.email,

        password: dataToSend.password, // la contraseña debe de tener como mínimo 8 carácteres

        phone: dataToSend.countryCode+dataToSend.phone, // El celular debe tener el formato con prefijo por país

        country: dataToSend.country,

        documentId: dataToSend.documentId,

        profileUrl: dataToSend.profileUrl
      }
      console.log(jsonData);
      
      try {
        const response = await fetch('https://brickly-backend.onrender.com/api/v1/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jsonData),
        });
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const result = await response.json();
        setMessage('¡Registro exitoso!');
        navigate('/login')
        setError('');
      } catch (error) {
        setError('Hubo un problema con el registro.');
        setMessage('');
      }
    };
  
    return (
      <>
        <Navbar register={"register"} size={"navbar-brand col-5 "} />
        <div className='contenedorR d-flex col-12'>
          <AsideLeft />
          <div className='C_Register main-content'>
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
                  Nombre:
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </label>
                <label>
                  Apellido:
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </label>
              </div>
              <div>
                <label className='px-5'>
                  Correo Electrónico:
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
              </div>
              <div className='d-flex justify-content-around'>
                <label className='inputSize'>
                Código del País:
                    <select
                    name="countryCode"
                    className="text-center selectR"
                    value={formData.countryCode}
                    onChange={handleChange}
                    >
                    <option value="">Selecciona un país</option>
                    <option value="+52">Mexico (+52)</option>
                    <option value="+1">United States (+1)</option>
                    <option value="+44">United Kingdom (+44)</option>
                    </select>
                </label>
                <label className='inputSize'>
                  ¿Cuál es tu número móvil?:
                  <input className="text-center border" type="tel" name="phone" placeholder="Escribe tu número móvil" value={formData.phone} onChange={handleChange} required />
                </label>
              </div>
              <div style={{ padding: "0 2.5rem" }} className='d-flex justify-content-between m-1'>
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
                  <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="********" required />
                </label>
                <label className='inputSize'>
                  Confirmar Contraseña:
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} placeholder="********" onChange={handleChange} required />
                </label>
              </div>
              <div style={{ padding: "0 2.8rem" }}>
                <label>
                  URL del Perfil:
                  <input type="url" name="profileUrl" value={formData.profileUrl} onChange={handleChange} required />
                </label>
              </div>
              <button type="submit" className='btn btn-secondary'>Registrarse</button>
              <label className='text-center mt-3'>¿Ya tienes una cuenta Brickly?
                <a className="px-1 rounded-md underline" href="/login"> Ingresa aquí</a>
               
              </label>
              {message && <p style={{ color: 'green' }}>{message}</p>}
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
          </div>
        </div>
        <Footer style={{ position: 'fixed', bottom: '0', padding: "0px 16px", height: "140px", }} />
      </>
    );
  };
  