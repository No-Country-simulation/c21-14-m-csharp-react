import React from 'react'
import imagen from '../../../../public/img/carta_img_propiedad.jpg'
import './Mexico.css'



const propiedad=[
{
    id:1,
  name:'[Nombre de la Propiedad]',
  img:imagen,
  precio: 1000000,
  description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,  ",
 
},
{
  id:2,
name:'[Nombre de la Propiedad]',
img:imagen,
precio: 1000000,
description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, ",

},
{
  id:3,
name:'[Nombre de la Propiedad]',
img:imagen,
precio: 1000000,
description:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, ",

}

]
export const Mexico = () => {
 
  return (
   <section className='c-mexico d-flex mx-auto'>
    {
      propiedad.map((user,index)=>{
        return (

         <div key={index} className='card p-2 ' >
        
          <h2>{user.name}</h2>
            <img src={user.img} alt=" " />
            <div className='card-body '>
            <h3 className='p-0'>Precio de inversión:</h3>
            <p>{user.precio}</p>
            <h3>Descripción</h3>
            <p>{user.description}</p>

          </div>
         
            <button className='btn btnC btn-primary'>Ver más</button>
          </div>

      
        )
         
      })
    }
   </section>
  )
}
