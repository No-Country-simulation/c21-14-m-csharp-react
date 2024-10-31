import { useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import PropTypes from 'prop-types'

const SearchProperties = ({ setData, setLoading }) => {
  const [searchParams, setSearchParams] = useState({
    name: '',
    country: '',
    type: '',
    status: '',
    minamount: 0,
  })

  function buildUrl(params) {
    const query = new URLSearchParams(params)
    return `?${query.toString()}`
  }

  const debouncedName = useDebouncedCallback(e => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value })
  }, 800)

  useEffect(() => {
    async function handleSubmit() {
      try {
        setLoading(true)
        const response = await fetch(
          'https://brickly-backend.onrender.com/api/v1/properties' +
            buildUrl(searchParams)
        )

        if (response.ok) {
          const data = await response.json()
          setData(data)
        } else {
          console.log(response)
        }
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    handleSubmit()
  }, [searchParams, setData, setLoading])

  return (
    <div className="flex flex-col gap-4 w-2/3">
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex flex-col md:w-2/3">
          <label className="mb-1 font-semibold">Nombre de Propiedad</label>
          <input
            type="text"
            name="name"
            placeholder="Escribe aquí"
            className="border border-gray-300 rounded-md px-3 py-2 min-w-56"
            onChange={debouncedName}
          />
        </div>
        <div className="flex flex-col md:w-1/3">
          <label className="mb-1 font-semibold">País</label>
          <select
            name="country"
            className="border border-gray-300 rounded-md px-3 py-2"
            onChange={e => {
              setSearchParams({ ...searchParams, country: e.target.value })
            }}
          >
            <option default value="">
              Todos los paises
            </option>
            <option value="argentina">Argentina</option>
            <option value="méxico">México</option>
            <option value="dominicana">Rca. Dominicana</option>
            <option value="paraguay">Paraguay</option>
          </select>
        </div>
      </div>
      <div className="flex md:flex-row w-full gap-4">
        <div className="flex flex-col w-1/5">
          <label className="mb-1 font-semibold">Tipo de propiedad</label>
          <select
            className="border border-gray-300 rounded-md px-3 py-2"
            onChange={e => {
              setSearchParams({ ...searchParams, type: e.target.value })
            }}
          >
            <option default value="">
              Todos los tipos
            </option>
            <option value="commercial">Comercial</option>
            <option value="industrial">Industrial</option>
            <option value="residential">Residencial</option>
          </select>
        </div>
        <div className="flex flex-col w-1/5">
          <label className="mb-1 font-semibold">Estado de propiedad</label>
          <select
            className="border border-gray-300 rounded-md px-3 py-2"
            onChange={e => {
              setSearchParams({ ...searchParams, status: e.target.value })
            }}
          >
            <option value="">Todos los estados</option>
            <option value="construcción">En construcción</option>
            <option value="operación">En operación</option>
            <option value="terminado">Terminado</option>
          </select>
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col w-3/5">
          <label className="mb-1 font-semibold">Inversión mínima</label>
          <input
            type="range"
            step="500"
            min="0"
            max="15000"
            value={searchParams.minamount}
            onChange={e => {
              setSearchParams({ searchParams, minamount: e.target.value })
            }}
            className="w-full"
          />
          <span className="text-gray-700 mt-1">${searchParams.minamount}</span>
        </div>
      </div>
    </div>
  )
}

SearchProperties.propTypes = {
  setData: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
}

export default SearchProperties
