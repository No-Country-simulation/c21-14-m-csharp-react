import React, { useState } from 'react'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import './PayComp.css'

export const PayComp = () => {
    const [formData, setFormData] = useState({
        projectName: '',
        location: '',
        investmentAmount: '',
        paymentMethod: 'credit',
        cardNumber: '',
        expirationMonth: '',
        expirationYear: '',
        cvv: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
      };

  return (
   <>
   <Navbar userHome={"userHome"} loggedIn={true} />
   <h2 style={{paddingTop:"95px",paddingLeft:"20px"}} className='text-primary  h-6 fs-1'>Realiza tu inversion</h2>
   <div className="payment-container">
          <form onSubmit={handleSubmit}>
            <div className="payment-grid">
              {/* Columna izquierda - Resumen */}
              <div className="summary-section">
                <h2 className='text-primary'>Resumen</h2>
                <div className="form-group">
                  <label>Nombre del proyecto:</label>
                  <p className="field-value">[Project Name]</p>
                </div>
                <div className="form-group">
                  <label>Ubicación:</label>
                  <p className="field-value">[City]</p>
                </div>
                <div className="form-group">
                  <label>Precio de inversión (mínimo):</label>
                  <p className="field-value">$000,000.00</p>
                </div>
                <div className="form-group">
                  <label>Plazo de la inversión:</label>
                  <p className="field-value">[0000]</p>
                </div>
                <div className="form-group mt-5 pt-4">
                  <label className='fs-5'>Monto a invertir:</label>
                  <input

                    type="text"
                    name="investmentAmount"
                    placeholder="Escriba el monto"
                    value={formData.investmentAmount}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
    
              {/* Columna derecha - Método de pago */}
              <div className="payment-section">
                <div className="amount-display">
                  <h3 className='fs-5'>Monto a invertir:</h3>
                  <p className="amount">[$000,000.00]</p>
                </div>
    
                <div className="payment-methods">
                  <h4>Selecciona el método de pago</h4>
                  <div className="radio-group">
                    <div className="radio-option">
                      <input
                        type="radio"
                        id="credit"
                        name="paymentMethod"
                        value="credit"
                        checked={formData.paymentMethod === 'credit'}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="credit">Tarjeta de crédito/débito</label>
                    </div>
                    <div className="radio-option">
                      <input
                        type="radio"
                        id="mercadopago"
                        name="paymentMethod"
                        value="mercadopago"
                        checked={formData.paymentMethod === 'mercadopago'}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="mercadopago">Mercado pago</label>
                    </div>
                    <div className="radio-option">
                      <input
                        type="radio"
                        id="paypal"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="paypal">Paypal</label>
                    </div>
                  </div>
                </div>
    
                <div className="card-details">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Número de tarjeta"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                  />
                  <div className="expiry-cvv">
                    <input
                      type="text"
                      name="expirationMonth"
                      placeholder="MM"
                      maxLength="2"
                      value={formData.expirationMonth}
                      onChange={handleInputChange}
                    />
                    <span className='fs-4'><b>/</b></span>
                    <input
                      type="text"
                      name="expirationYear"
                      placeholder="AA"
                      maxLength="2"
                      value={formData.expirationYear}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      maxLength="4"
                      value={formData.cvv}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
    
                <button type="submit" className="submit-button p-2 mt-2 rounded">
                  Aceptar
                </button>
              </div>
            </div>
          </form>
        </div>
   <Footer position="fixed" h="140px" b="0"/>
   </>
  )
}
