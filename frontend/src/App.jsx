import './App.css'
import { Register } from './Components/Register/Register'
import { Login } from "./Components/Login/Login";
import { Home } from './Components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PropertyDetail } from './Components/PropertyDetail/PropertyDetail.jsx';
import { Portfolio } from './Components/Portfolio/Portfolio.jsx';
import { UserHome } from './Components/UserHome/UserHome.jsx';


function App() {


  return (
    <>
    <div>
    
    <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route  path='/register' element={<Register />} />
            <Route  path='/login' element={<Login />} />
            <Route  path='/Portfolio' element={<Portfolio />} />
            <Route  path='/UserHome' element={<UserHome />} />
        
          </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
