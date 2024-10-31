// App.js
import { Register } from './Components/Register/Register'
import { Login } from './Components/Login/Login'
import { Home } from './Components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import { PropertyDetail } from './Components/PropertyDetail/PropertyDetail.jsx'
import PropertyDetailAdmin from './pages/admin/PropertyDetail.jsx'
import LoginAdmin from './pages/admin/Login.jsx'
import AddProperty from './pages/admin/AddProperty.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'
import PropertiesPortfolio from './pages/admin/PropertiesPortfolio.jsx'
import UsersView from './pages/admin/UsersView.jsx'
import { AuthProvider } from './pages/admin/components/AuthContext.jsx'
import PrivateRoute from './pages/admin/components/PrivateRoute.jsx'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/PropertyDetail" element={<PropertyDetail />} />

        {/* Rutas para el administrador */}
        <Route path="/admin">
          <Route path="login" element={<LoginAdmin />} />
          {/* Rutas protegidas con PrivateRoute */}
          <Route element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="addproperty" element={<AddProperty />} />
            <Route path="portfolio" element={<PropertiesPortfolio />} />
            <Route path="users" element={<UsersView />} />
            <Route path="property/:id" element={<PropertyDetailAdmin />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
