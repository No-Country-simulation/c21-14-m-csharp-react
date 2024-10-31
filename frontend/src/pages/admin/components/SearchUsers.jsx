import { useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'

const SearchUsers = ({ setData, setLoading }) => {
  const [searchParams, setSearchParams] = useState({
    search: '',
    totalinv: 0,
  })

  function buildUrl(params) {
    const query = new URLSearchParams(params)
    return `?${query.toString()}`
  }

  const debouncedSearch = useDebouncedCallback(e => {
    setSearchParams({ ...searchParams, search: e.target.value })
  }, 800)

  useEffect(() => {
    async function handleSubmit() {
      try {
        setLoading(true)
        const response = await fetch(
          'https://brickly-backend.onrender.com/api/v1/users' + buildUrl(searchParams),
          {
            headers: {
              Authorization: 'Bearer ' + Cookies.get('auth'),
            },
          }
        )

        if (response.ok) {
          const data = await response.json()
          console.log(data)
          setData(data)
        } else {
          console.log(await response.json())
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
      <div className="flex gap-4 w-full">
        <div className="flex flex-col w-1/2">
          <label className="mb-1 font-semibold">Buscar Usuario</label>
          <input
            type="text"
            name="search"
            placeholder="Escribe aquí"
            className="border border-gray-300 rounded-md px-3 py-2 min-w-56"
            onChange={debouncedSearch}
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="mb-1 font-semibold">Monto total invertido</label>
          <input
            type="range"
            step="500"
            min="0"
            max="15000"
            value={searchParams.totalinv}
            onChange={e => {
              setSearchParams({
                ...searchParams,
                totalinv: e.target.value,
              })
            }}
            className="w-full"
          />
          <span className="text-gray-700 mt-1">${searchParams.totalinv}</span>
        </div>
      </div>
    </div>
  )
}

SearchUsers.propTypes = {
  setData: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
}

export default SearchUsers
