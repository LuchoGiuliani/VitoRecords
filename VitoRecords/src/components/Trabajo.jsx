import React from 'react'

export default function Trabajo()  {


    return (
      <div className=""> 
        
        <h1 className='flex justify-end p-5 '>. Nuestro trabajo</h1>
       <div className=" p-5 grid grid-cols-3 gap-3 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100">
        <div><img src="/images/casette.png" alt="" /><p className="text-xm">Experiencia en Promoción Online, Social Media, y Tecnología, especializada en la Industria de la Música.</p></div>
        <div><img src="/images/consola.png" alt="" /><p className="text-xm">Composición de Música y Letra Original.
Pre Producción, Grabación, Mezcla y Mastering.
Artistas, Cine, Tv y Radio.</p></div>
        <div><img src="/images/mic.png" alt="" /><p className="text-xm">Grabación de voces, asesoramiento en tecnicas vocales, coros, ensamble en general</p></div>
       </div>
      
  </div>
    )
  }

