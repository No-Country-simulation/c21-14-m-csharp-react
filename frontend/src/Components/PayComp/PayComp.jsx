import React from 'react'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'

export const PayComp = () => {

  return (
   <>
   <Navbar userHome={"userHome"} loggedIn={true} />
   <h2 style={{paddingTop:"95px",paddingLeft:"20px"}} className='text-primary  h-6 fs-1'>Realiza tu inversion</h2>
   <Footer position="fixed" h="140px" b="0"/>
   </>
  )
}
