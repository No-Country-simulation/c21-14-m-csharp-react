import React from 'react'
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import img from '../../assets/alert.svg'
import './ErrorLogin.css'

export const ErrorLogin = () => {
  return (
    <>
    <Navbar login={"login"} size={"navbar-brand col-2"} />
        <div className='d-flex flex-column justify-content-center align-content-center gap-5 errorLogin'>
            <h1>Hubo un error al ingresar tu cuenta Brickly. </h1>
            <img className='w-25' src={img} alt="" />
             <a className='d-block' href="/login">Reintentar</a>

        </div>    
    <Footer style={{ position: 'fixed', bottom: '0', padding: "0px 16px", height: "140px" }} />
    </>
    
  )
}
