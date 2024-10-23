import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'


import { SectionProject} from '../SectionProject/SectionProject'
import { Funcionalidad } from '../ComoFunciona/Funcionalidad'
import { SectionInformation } from '../SectionInformation/SectionInformation'
import { SectionContact } from '../SectionContact/SectionContact'
import LocationMap from '../LocationMap/LocationMap'
import { Footer } from '../Footer/Footer'
import Jumbotron from '../Jumbotron/jumbotron'
export const Home = () => {
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
