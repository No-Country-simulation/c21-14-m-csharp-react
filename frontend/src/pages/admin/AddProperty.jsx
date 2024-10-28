import { useState } from 'react'
import Header from './components/Header'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Error from './components/Error'

const AddProperty = () => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    city: '',
    location: '',
    description: '',
    type: '',
    area: '',
    minAmount: '',
    time: '',
    status: '',
    profit: '',
  })

  const [photoInput, setPhotoInput] = useState('')
  const [photoList, setPhotoList] = useState([])
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState(false)
  const navigate = useNavigate()

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleAddPhoto = () => {
    if (photoInput && photoList.length < 5) {
      setPhotoList([...photoList, photoInput])
      setPhotoInput('')
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const isEmpty = Object.values(formData).some(value => value.trim() === '')

    if (isEmpty) {
      return setFormError('Completa todos los campos')
    }

    if (photoList.length < 5) {
      return setFormError('Favor agrega todas las imagenes')
    }

    setLoading(true)
    setFormError(null)

    const convertNumericValues = data => {
      return Object.entries(data).reduce((acc, [key, value]) => {
        // Intenta convertir el valor a número
        const numericValue = Number(value)
        // Si la conversión es exitosa, asigna el número; de lo contrario, asigna el valor original
        acc[key] = isNaN(numericValue) ? value : numericValue
        return acc
      }, {})
    }

    try {
      const response = await fetch(
        'https://brickly-backend.onrender.com/api/v1/properties',
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + Cookies.get('auth'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...convertNumericValues(formData),
            photosUrl: photoList.join(','),
          }),
        }
      )

      if (response.ok) {
        const data = await response.json()
        console.log('successful', data)

        navigate('/admin/dashboard')
      } else {
        setFormError('Error')
        console.log(await response.json())
      }

      // Simulando éxito de envío
    } catch (error) {
      console.log(error)
      setFormError('Ocurrió un error al guardar la propiedad.')
    } finally {
      setTimeout(() => setLoading(false), 2000)
    }
  }

  return (
    <div>
      <Header />
      <main className="flex justify-center pb-5">
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/3 flex flex-col items-center"
        >
          <h3 className="text-2xl font-bold text-main mb-3">
            Agregar propiedad
          </h3>

          <div className="grid grid-cols-2 gap-3 py-3 ">
            <label htmlFor="name" className="col-span-2">
              Nombre de la propiedad
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="col-span-2 focus:outline-none border-2 border-slate-300 rounded-md px-2 py-2"
            />

            <label htmlFor="location" className="col-span-2">
              Ubicación
            </label>
            <input
              type="text"
              name="country"
              placeholder="País"
              value={formData.country}
              onChange={handleChange}
              className="col-span-1 focus:outline-none border-2 border-slate-300 rounded-md px-2 py-2"
            />
            <input
              type="text"
              name="city"
              placeholder="Ciudad"
              value={formData.city}
              onChange={handleChange}
              className="col-span-1 focus:outline-none border-2 border-slate-300 rounded-md px-2 py-2"
            />

            <label htmlFor="name" className="col-span-2">
              URL Google Maps
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="col-span-2 focus:outline-none border-2 border-slate-300 rounded-md px-2 py-2"
            />

            <label htmlFor="description" className="col-span-2">
              Descripción
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              placeholder="Escribe una descripción"
              className="resize-none col-span-2 focus:outline-none border-2 border-slate-300 rounded-md px-2 py-2"
            ></textarea>

            <div className="col-span-1 flex flex-col gap-2">
              <label htmlFor="type">Tipo de propiedad</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="col-span-1 focus:outline-none border-2 border-slate-300 rounded-md px-2 py-2"
              >
                <option value="" disabled>
                  Elige uno
                </option>
                <option value="residential">Residencial</option>
                <option value="commercial">Comercial</option>
                <option value="industrial">Industrial</option>
              </select>
            </div>

            <div className="col-span-1 flex flex-col gap-2">
              <label htmlFor="status">Estado de la propiedad</label>
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="col-span-1 focus:outline-none border-2 border-slate-300 rounded-md px-2 py-2"
              />
            </div>

            <div className="col-span-1 flex flex-col gap-2">
              <label htmlFor="area">Tamaño (M²)</label>
              <input
                type="number"
                name="area"
                value={formData.area}
                onChange={handleChange}
                min={1}
                className="col-span-1 focus:outline-none border-2 border-slate-300 rounded-md px-2 py-2"
              />
            </div>

            <div className="col-span-1 flex flex-col gap-2">
              <label htmlFor="profit">Rendimiento estimado (%)</label>
              <input
                type="number"
                name="profit"
                value={formData.profit}
                onChange={handleChange}
                min={1}
                className="col-span-1 focus:outline-none border-2 border-slate-300 rounded-md px-2 py-2"
              />
            </div>

            <div className="col-span-1 flex flex-col gap-2">
              <label htmlFor="minAmount">Inversión mínima (USD)</label>
              <input
                type="number"
                name="minAmount"
                value={formData.minAmount}
                onChange={handleChange}
                min={1}
                form
                className="col-span-1 focus:outline-none border-2 border-slate-300 rounded-md px-2 py-2"
              />
            </div>

            <div className="col-span-1 flex flex-col gap-2">
              <label htmlFor="time">Plazo de inversión (meses)</label>
              <input
                type="number"
                name="time"
                value={formData.time}
                onChange={handleChange}
                min={1}
                className="col-span-1 focus:outline-none border-2 border-slate-300 rounded-md px-2 py-2"
              />
            </div>

            <div className="col-span-2 flex flex-col gap-2">
              <label htmlFor="photos">Fotos de la propiedad</label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="URL de la foto"
                  value={photoInput}
                  onChange={e => setPhotoInput(e.target.value)}
                  className="flex-grow focus:outline-none border-2 border-slate-300 rounded-md px-2 py-2"
                />
                <button
                  type="button"
                  onClick={handleAddPhoto}
                  disabled={photoList.length >= 5}
                  className="bg-main text-white px-3 py-2 rounded-md"
                >
                  +
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2 mt-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="w-16 h-16 border border-slate-300 flex items-center justify-center relative"
                  >
                    {photoList[index] ? (
                      <div className="w-full h-full overflow-hidden">
                        <img
                          src={photoList[index]}
                          alt={`Foto ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <button
                          className="bg-red-600 text-white font-extrabold px-1 rounded-full w-6 h-6 flex justify-center items-center absolute -top-2 -right-2"
                          onClick={() => {
                            const newPhotoList = [...photoList]
                            newPhotoList.splice(index, 1)
                            setPhotoList(newPhotoList)
                          }}
                        >
                          <i className="fa-solid fa-trash fa-2xs"></i>
                        </button>
                      </div>
                    ) : (
                      <span className="text-slate-300">Vacío</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {formError && <Error text={formError} />}

          <button
            type="submit"
            disabled={loading}
            className="bg-main text-white py-3 px-6 rounded-md w-full flex justify-center"
          >
            {loading ? 'Cargando...' : 'Agregar propiedad'}
          </button>
        </form>
      </main>
    </div>
  )
}

export default AddProperty
