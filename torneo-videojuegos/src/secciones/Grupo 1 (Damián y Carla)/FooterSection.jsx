import React from 'react'

const FooterSection = () => {
  return (
    <div className='text-white flex justify-center pt-[4vw] h-[20vw] text-center bg-white bg-gradient-to-b from-black from-10% via-[#001e1b] via-30% to-[#00c0ad] to-100%' >
      <ul className='flex text-white gap-[1.2vw] font-light mr-[6vw]'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#infoTorneo">Información del torneo</a></li>
        <li><a href="#cronograma">Cronograma</a></li>
        <li><a href="#puntuaciones">Puntuaciones</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </div>
  )
}


export default FooterSection