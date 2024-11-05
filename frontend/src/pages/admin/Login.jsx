import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from './components/Header'
import Error from './components/Error'
import Cookies from 'js-cookie'
import { useAuth } from './components/AuthContext'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleChange = event => {
    const { name, value } = event.target
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    if (form.email == '' || form.password == '') {
      return setError('Favor completa todos los campos')
    }
    if (form.password.length < 6) {
      return setError('Credenciales inválidas')
    }

    setLoading(true)

    try {
      const response = await fetch(
        'https://brickly-backend.onrender.com/api/v1/auth/admin/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      )

      if (response.ok) {
        const data = await response.json()
        console.log('Login successful:', data)
        Cookies.set(data.token)

        login(data.token)

        navigate('/admin/dashboard')
      } else {
        setError('Credenciales inválidas')
      }
    } catch (err) {
      console.log(err)
      setError('Ocurrió un error con la conexión al servidor')
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center">
        <div className="h-3/4 lg:w-1/3 flex flex-col items-center">
          <h2 className="text-main text-4xl font-bold mb-10">Administrador</h2>

          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full text-lg"
          >
            <h2 className="text-main font-bold text-2xl mb-3">
              INICIAR SESIÓN
            </h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Correo electrónico de administrador</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="focus:outline-none border-2 border-slate-300 rounded-md px-2 py-2 text-gray"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Contraseña</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="focus:outline-none border-2 border-slate-300 rounded-md px-2 py-2"
              />
            </div>
            <div
              className={`h-20  transition-all duration-300 ease-in ${
                error ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}
            >
              {error && <Error text={error} />}
            </div>

            <div className="flex justify-end">
              <button
                className="rounded-md bg-mainBlack text-white px-4 py-2 w-2/5"
                type="submit"
              >
                {loading && (
                  <div>
                    <i
                      key="spinner"
                      className="fa-solid fa-spinner fa-spin"
                    ></i>
                  </div>
                )}
                {!loading && <span key="text">ENTRAR</span>}
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default Login
