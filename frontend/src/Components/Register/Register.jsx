
import React, { useState } from 'react';
import './Register.css';
import AsideLeft from '../AsideLeft/AsideLeft ';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

export const Register = ({ onEmailSent }) => {
  
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

        name: dataToSend.name,

        email: dataToSend.email,

        password: dataToSend.password, // la contraseña debe de tener como mínimo 8 carácteres

        phone: dataToSend.countryCode+dataToSend.phone, // El celular debe tener el formato con prefijo por país

        country: dataToSend.country,

        documentId: dataToSend.documentId,

        profileUrl: dataToSend.profileUrl
      }
      
      
      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
      console.log(dataToSend.email);
          emailjs.send('service_qb514fa', 'template_sklhw76', {
            
                        to_name:dataToSend.name,
                        verification_code: verificationCode,
                        to_email: dataToSend.email
                        ,
                      },'4CopOlCmJnnzv8g3e')

                  .then((response) => {
                    // Limpiar todo localStorage
                        localStorage.clear();
                        console.log('Correo enviado!', response.status, response.text);
                        localStorage.setItem('verificationCode', verificationCode);
                      // Convertir el objeto a una cadena JSON 
                        const userJSON = JSON.stringify(jsonData);
                        // Guardar la cadena JSON en localStorage
                        localStorage.setItem('jsonData', userJSON);
                 onEmailSent(); // Abre el modal cuando el correo es enviado
        })
        .catch((error) => {
          console.log('Error al enviar el correo:', error);
        });

    
    };
  
    return (
      <>
        <Navbar register={"register"} size={"navbar-brand col-5 "} />
        <div className='contenedorR d-flex col-11'>
          <AsideLeft />
          
            <form onSubmit={handleSubmit} className='container col-6 col-lg-6 col-md-6 C_Register'>
              <h1 className=" font-bold text-2xl mb-4">CREA TU CUENTA</h1>
              <p className='px-3'>
                Al crear una cuenta en Brickly aceptas el{" "}
                <Link href="#">
                  <b>Aviso de Privacidad y Términos y Condiciones.</b>
                </Link>
              </p>
              <div className='container w-75 containerR'>    
                      <div className='d-flex justify-content-between'>
                        <label>
                          Nombre:
                          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                        </label>
                        <label>
                          Apellido:
                          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                        </label>
                      </div>
 
                        <label >
                          Correo Electrónico:
                          <input className=' rc ' type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </label>
                      <div className='d-flex col-12 w-100 justify-content-between'>
                        <label className='col-6 '>
                        Código del País:
                            <select
                            name="countryCode"
                            className="text-center w-75 selectR"
                            value={formData.countryCode}
                            onChange={handleChange}
                            >
                            <option value="">Selecciona un país</option>
                            <option value="+52">Mexico (+52)</option>
                            <option value="+1">United States (+1)</option>
                            <option value="+44">United Kingdom (+44)</option>
                            </select>
                        </label>
                        <label className='w-50 col-5'>
                          ¿Cuál es tu número móvil?:
                          <input className="text-center border" type="tel" name="phone" placeholder="Escribe tu número móvil" value={formData.phone} onChange={handleChange} required />
                        </label>
                      </div>
                      <div className='d-flex justify-content-between m-1'>
                        <label className='inputSize '>
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
                      <div >
                        <label>
                          URL del Perfil:
                          <input className='rc' type="url" name="profileUrl" value={formData.profileUrl} onChange={handleChange} required />
                        </label>
                      </div>
              </div>
              <button type="submit" className='btn btn-secondary'>Registrarse</button>
              <label className='text-center mt-3'>¿Ya tienes una cuenta Brickly?
                <a className="px-1 rounded-md underline" href="/login"> Ingresa aquí</a>
               
              </label>
              {message && <p style={{ color: 'green' }}>{message}</p>}
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
          
        </div>
        <Footer position="fixed" h="140px" b="0"/>
      </>
    );
  };
  