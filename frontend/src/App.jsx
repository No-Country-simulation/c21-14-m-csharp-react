import './App.css'
import { Register } from './Components/Register/Register'
import { Login } from "./Components/Login/Login";
import { Home } from './Components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PropertyDetail } from './Components/PropertyDetail/PropertyDetail.jsx';
import { Portfolio } from './Components/Portfolio/Portfolio.jsx';
import { UserHome } from './Components/UserHome/UserHome.jsx';
import VerifyCodeModal from './Components/VerifyCodeModal/VerifyCodeModal.jsx';
/*import {Tarjeta} from './Components/Tarjeta/Tarjeta.jsx';*/
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorLogin } from './Components/ErrorLogin/ErrorLogin.jsx';
import { PayComp } from './Components/PayComp/PayComp.jsx';

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => {setShowModal(true)};
  const handleClose = () => {setShowModal(false)};
/*
  const [properties, setProperties] = useState([]); 
  const [error, setError] = useState(null); 
  useEffect(() => { 
    const fetchProperties = async () => { 
      try { const response = await fetch('https://brickly-backend.onrender.com/api/v1/properties');
         if (response.ok) { const data = await response.json(); setProperties(data); } 
         else { setError('Failed to fetch properties'); } }
          catch (error) { setError('Error: ' + error.message); 

          } };
          
          fetchProperties(); },[]);*/
  return (
    <>
   
   {
   
   /*<div> 
    {error && <div style={{ color: 'red' }}>{error}</div>} 
        <div className="tarjetas-container"> {properties.map(property => ( 
                 <Tarjeta key={property.id} property={property} /> ))} 
          </div> 
      </div>
      */}
      <div>

        <Router>
          <Routes>
            <Route  path='/' element={<Home />} exact/>
            <Route path='/register' element={<Register onEmailSent={handleShow} />} />
           
            <Route path='/login' element={<Login />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path='/PropertyDetail' element={<PropertyDetail />} />
            <Route path='/UserHome' element={<UserHome />} />
            <Route path='/ErrorLogin' element={<ErrorLogin />} />
            <Route path='/PayComp' element={<PayComp/>} />

          </Routes>
        </Router>
        <VerifyCodeModal show={showModal} handleClose={handleClose} />
      </div>
    </>
  )
}

export default App
