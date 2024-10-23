import React from 'react'


import './Property.css'



const propiedad=[
{
    id:1,
  name:'[Nombre de la Propiedad]',
  precio: 1000000,
  description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,  ",
 
},


]
export const Property = () => {
 
  return (
   <section className=''>
    {
      propiedad.map(user=>{
        return (
<>
<div class="parent">
        <div class="div1 div" style={{ backgroundImage: "url(/img/d_1.jpg)", backgroundRepeat: 'no-repeat',backgroundPosition: 'center' , width:"100%"}}></div>
        <div class="div"><img src="https://via.placeholder.com/150" alt="Logo" /></div>
        <div class="div"><img src="https://via.placeholder.com/150" alt="Logo" /></div>
        <div class="div"><img src="https://via.placeholder.com/150" alt="Logo" /></div>
        <div class="div"><img src="https://via.placeholder.com/150" alt="Logo" /></div>
    </div>
</>
      
        )
         
      })
    }
   </section>
  )
}
