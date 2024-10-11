"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import {useRouter} from 'next/navigation'
import {useState} from 'react'
import Image from "@/components/Img";



function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter()
  const [error, setError] = useState(null)
  
  const onSubmit = handleSubmit(async (data) => {


    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

 
    if (res.error) {
      setError(res.error)
    } else {
      router.push('/dashboard')
      router.refresh()
    }
  });

  return (
   < >

   <div className="h-[calc(100vh-12rem)] flex justify-center bg-white items-center">
   <div className="w-1/2">
   <Image/>
   </div>

      <form onSubmit={onSubmit} className="w-1/4">

        {error && (
          <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">{error}</p>
        )}

        <h1 className=" font-bold text-2xl mb-16">INICIAR SESION</h1>

        <label htmlFor="email" className="text-black font-bold mb-2 block text-sm">
        ¿Cuál es tu correo electrónico?
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email es requerido",
            },
          })}
          className="p-3 rounded block mb-2 border text-slate-300 w-full"
          placeholder="Ejemplo: tu@correo.com"
        />

        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}

        <label htmlFor="password" className="text-black font-bold mt-6 mb-2 block text-sm">
        Contraseña
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Contraseña es requerida",
            },
          })}
          className="p-3 rounded block mb-2 border text-slate-300 w-full"
          placeholder="Escribe tu contraseña "
        />

        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}

        <button className="w-40 bg-black float-right text-white px-3 p-2 rounded-lg mt-14">
          Entrar
        </button>
        <small className="mt-36 block text-center"> ¿No tienes una cuenta brickly? <Link  className=" px-1 rounded-md text-trueGray-500 " href="/auth/register">Registrate aquí</Link> </small>
        
      </form>
    </div>
 
   </>
   
  );
}
export default LoginPage;
