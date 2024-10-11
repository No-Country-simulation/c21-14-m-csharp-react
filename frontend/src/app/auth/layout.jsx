import NavbarL from '@/components/NavbarLogin'
import React, { Children } from 'react'

const Layout =({ children}) =>{
    return <div className=''>
<NavbarL/>
        {children}
        
        </div>
}
export default Layout