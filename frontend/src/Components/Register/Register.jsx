
import React, { useState } from 'react';
import './Register.css';

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
 <div className='C_Register' >
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
                Correo Electrónico:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
                Contraseña:
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            <label>
                Teléfono:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
            <label>
                País:
                <input type="text" name="country" value={formData.country} onChange={handleChange} required />
            </label>
            <label>
                Documento de Identificación:
                <input type="text" name="documentId" value={formData.documentId} onChange={handleChange} required />
            </label>
            <label>
                URL del Perfil:
                <input type="url" name="profileUrl" value={formData.profileUrl} onChange={handleChange} required />
            </label>
            <button type="submit">Registrarse</button>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        </div>
    );
}


