import './App.css'
import { Register } from './Components/Register/Register'
import { Login } from "./Components/Login/Login";
import { Home } from './Components/Home/Home'
import {Routes,Route} from 'react-router-dom'
import { PropertyDetail } from './Components/PropertyDetail/PropertyDetail.jsx';


function App() {


  return (
    <>
    <div>
    
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/PropertyDetail' element={<PropertyDetail />} />
     
      </Routes>
    </div>
    </>
  )
}

export default App
