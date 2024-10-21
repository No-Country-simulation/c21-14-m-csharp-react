import './App.css'
import { Navbar} from './Components/Navbar/Navbar'
import { Jumbotron } from './Components/Jumbotron/jumbotron'
import { SectionProject} from './Components/SectionProject/SectionProject'
import { Funcionalidad } from './Components/ComoFunciona/Funcionalidad'
import { SectionInformation } from './Components/SectionInformation/SectionInformation'
import { SectionContact } from './Components/SectionContact/SectionContact'
import LocationMap from './Components/LocationMap/LocationMap'
import { Footer } from './Components/Footer/Footer'

function App() {


  return (
    <>
      <Navbar/>
      <Jumbotron/>
      <SectionProject/>
      <Funcionalidad/>
      <SectionInformation/>
      <SectionContact/>
      <LocationMap/>
      <Footer/>
    </>
  )
}

export default App
