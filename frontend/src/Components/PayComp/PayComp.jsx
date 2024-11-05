import { useEffect, useState } from 'react'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import './PayComp.css'
import { addInvestment, getPropertyInfo } from '../../lib/data'
import { useNavigate, useParams } from 'react-router-dom'

export const PayComp = () => {
  const [formData, setFormData] = useState({
    amount: '',
  })
  const [property, setProperty] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function getData() {
      setProperty(await getPropertyInfo(id))
    }

    getData()
  }, [id])

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await addInvestment(property.id, Number(formData.amount))
      navigate('/portfolio')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Navbar userHome={'userHome'} loggedIn={true} />
      <main className="px-20 py-10">
        <h2 className="text-main font-bold text-4xl text-center">
          Realiza tu inversion
        </h2>
        <div className="payment-container">
          <form onSubmit={handleSubmit}>
            <div className="payment-grid">
              {/* Columna izquierda - Resumen */}
              <div className="summary-section">
                <h2 className="text-primary">Resumen</h2>
                <div className="form-group">
                  <label>Nombre del proyecto:</label>
                  <p className="field-value">{property.name}</p>
                </div>
                <div className="form-group">
                  <label>Ubicación:</label>
                  <p className="field-value">
                    {property.city}, {property.country}
                  </p>
                </div>
                <div className="form-group">
                  <label>Precio de inversión (mínimo):</label>
                  <p className="field-value">{property.minAmount}</p>
                </div>
                <div className="form-group">
                  <label>Plazo de la inversión:</label>
                  <p className="field-value">{property.time} meses</p>
                </div>
                <div className="form-group mt-5 pt-4">
                  <label className="fs-5">Monto a invertir:</label>
                  <input
                    type="text"
                    name="amount"
                    placeholder="Escriba el monto"
                    value={formData.amount}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Columna derecha - Método de pago */}
              <div className="payment-section">
                <div className="amount-display">
                  <h3 className="fs-5">Monto a invertir:</h3>
                  <p className="amount">${formData.amount}</p>
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
                    <span className="fs-4">
                      <b>/</b>
                    </span>
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

                <button
                  type="submit"
                  className="submit-button p-2 mt-2 rounded"
                >
                  Aceptar
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer position="fixed" h="140px" b="0" />
    </>
  )
}
