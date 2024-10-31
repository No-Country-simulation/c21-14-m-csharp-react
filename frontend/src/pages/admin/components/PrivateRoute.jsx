// PrivateRoute.js
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './AuthContext'

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth()

  // Espera a que isAuthenticated tenga un valor (puedes usar un loading state si lo prefieres)
  if (isAuthenticated === null) return null

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" />
}

export default PrivateRoute
