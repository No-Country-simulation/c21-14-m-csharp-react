import React from 'react'
import './PropertyDetail.css'
import {Navbar} from '../Navbar/Navbar'
import {Footer} from '../Footer/Footer'
import LocationMap from '../LocationMap/LocationMap'
import { Property } from '../Property/Property'

export const PropertyDetail = () => {
  return (
    <>
    <Navbar/>
    <LocationMap/>
    <Property/>
    <Footer/>
    </>
  )
}
