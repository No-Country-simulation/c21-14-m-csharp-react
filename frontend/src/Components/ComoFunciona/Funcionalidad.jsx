import React from 'react'
import './Funcionalidad.css'

export const Funcionalidad = () => {
  return (
    <>
      <div className="c_Funcionalidad p-3 flex flex-col items-center">
        <h2 className="text-4xl font-bold">¿Cómo funciona?</h2>

        <div className="grid grid-cols-2 gap-4 w-3/4">
          <div className="bg-slate-300 rounded-lg px-4 py-4">
            <h4 className="w-75">1. Regístrate</h4>
            <p>Crea tu cuenta Brickly totalmente gratis</p>
          </div>
          <div className="bg-slate-300 rounded-lg px-4 py-4">
            <h4>2. Selecciona un proyecto</h4>
            <p>
              Selecciona la oportunidad de inversión que más se adapte a tus
              objetivos y la cantidad a invertir.
            </p>
          </div>
          <div className="bg-slate-300 rounded-lg px-4 py-4">
            <h4>3. Completa tu inversión</h4>
            <p>
              Finaliza tu inversión firmando el contrato en línea y fondea tu
              cuenta Brickly.
            </p>
          </div>
          <div className="bg-slate-300 rounded-lg px-4 py-4">
            <h4>4. Monitorea tus ganancias</h4>
            <p>
              Administra tus ganancia dentro de la plataforma de Brickly. Decide
              reinvertir o retirar tus fondos.{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
