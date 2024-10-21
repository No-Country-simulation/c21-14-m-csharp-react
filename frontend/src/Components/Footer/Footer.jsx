import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <div className="footer">
    <div className="contact-info">
      <h3>Contacto</h3>
      <p>Tel: 592-586 925-584</p>
    </div>
    <div className="office-info ">
      <p>Oficina:</p>
      <p>Av. La Paz</p>
      <p>Santiago, Chile</p>
    </div>
    <div className="social-icons float-start pb-5 ">
      <span className="icon"><i class="fa-brands fa-facebook-f"></i></span>
      <span className="icon"><i class="fa-brands fa-instagram"></i></span>
      <span className="icon"><i class="fa-brands fa-linkedin-in"></i></span>
    </div>
  </div>
  )
}
