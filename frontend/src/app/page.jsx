import Navbar from "@/components/Navbar"

function HomePage() {
  return (
   <> 
     <Navbar/>
     <section className="h-[calc(100vh-7rem)] flex justify-center items-center flex-col ">
    
      <div className="text-8xl font-bold ">
        <p className="col-12 ">Invierte en bienes raíces </p>
        <p className="ml-20 col-12">desde $1000 dólares</p>
      </div>
      <button className="block p-7 rounded-md bg-gray-950 text-white mt-11 ">VER PROYECTOS</button>
    </section>
   </>
  
  )
}

export default HomePage