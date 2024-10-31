import { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Leer la cookie de autenticación
    const authCookie = Cookies.get('auth')
    console.log('Auth Cookie:', authCookie) // Verifica si la cookie se lee correctamente
    if (authCookie.length > 0) setIsAuthenticated(true) // Establece isAuthenticated como true o false
  }, []) // Solo se ejecuta una vez al montar el componente

  const login = cookie => {
    Cookies.set('auth', cookie, { expires: 1 }) // Establece la cookie al iniciar sesión
    setIsAuthenticated(true) // Cambia el estado de autenticación
  }

  const logout = () => {
    Cookies.remove('auth') // Elimina la cookie al cerrar sesión
    setIsAuthenticated(false) // Cambia el estado de autenticación
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
