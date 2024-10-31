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
import { Portfolio } from './Components/Portfolio/Portfolio.jsx';
import { UserHome } from './Components/UserHome/UserHome.jsx';
import VerifyCodeModal from './Components/VerifyCodeModal/VerifyCodeModal.jsx';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorLogin } from './Components/ErrorLogin/ErrorLogin.jsx';
import { PayComp } from './Components/PayComp/PayComp.jsx';


function App() {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => {setShowModal(true)};
  const handleClose = () => {setShowModal(false)};
  return (
    <AuthProvider>
      <Routes>
      <Route  path='/' element={<Home />} exact/>
            <Route path='/register' element={<Register onEmailSent={handleShow} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path='/PropertyDetail' element={<PropertyDetail />} />
            <Route path='/UserHome' element={<UserHome />} />
            <Route path='/ErrorLogin' element={<ErrorLogin />} />
            <Route path='/PayComp' element={<PayComp/>} />

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
      <VerifyCodeModal show={showModal} handleClose={handleClose} />
    </AuthProvider>
  )
}

export default App
