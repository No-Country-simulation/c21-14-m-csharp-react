import { Register } from './Components/Register/Register'
import { Login } from './Components/Login/Login'
import { Home } from './Components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import { PropertyDetail } from './Components/PropertyDetail/PropertyDetail.jsx'
import LoginAdmin from './pages/admin/Login.jsx'
import AddProperty from './pages/admin/AddProperty.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'
import PropertiesPortfolio from './pages/admin/PropertiesPortfolio.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/PropertyDetail" element={<PropertyDetail />} />

        <Route path="/admin">
          <Route path="login" element={<LoginAdmin />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="addproperty" element={<AddProperty />}></Route>
          <Route path="portfolio" element={<PropertiesPortfolio />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
