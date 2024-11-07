import React, { useState } from 'react';
import LogoImage from '../../assets/Imágenes/sarmientoGaming.png'
import Headroom from 'react-headroom';

const Navbar = () => {
  const [navbarPin, setNavbarPin] = useState(false);
  const handlePin = () => setNavbarPin(true);
  const handleUnpin = () => setNavbarPin(false);
  return (
    /* Estructura del HTML (Elementos visuales de la web) */
    <Headroom onPin={handlePin} onUnfix={handleUnpin} downTolerance={20} upTolerance={10} pinStart={30}>
      
      {/* Contenedor de la barra de navegación */}
      <div className={`h-[4vw] w-[100vw] flex items-center justify-between py-[4%] px-[2vw] ${navbarPin ? 'bg-[#061514]' : 'bg-transparent'}`} >
        
        {/* Logo de la barra de navegación */}
        <a href="#" className='flex items-center gap-[1.5vw]'><img className='w-[4vw]' src={LogoImage} alt="" />
          {/* Texto del logo */}
          <h2 className='text-[2vw] text-transparent text-stroke-[1.3px] text-stroke-[#00E3CD]'>Sarmiento Gaming</h2>
        </a>
        
        {/* Texto de la barra de navegación */}
        <ul className='flex max-md:hidden text-white gap-[1.2vw] font-light mr-[6vw]'>
          <li><a href="#">Inicio</a></li>
          <li><a href="#infoTorneo">Información del torneo</a></li>
          <li><a href="#cronograma">Cronograma</a></li>
          <li><a href="#puntuaciones">Puntuaciones</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        
        {/* Ícono de hamburguesa */}
        <div className='md:hidden'>
          <div className='bg-white w-[10vw] h-[10vw]' ></div>
        </div>
      </div>
    </Headroom>
  )
}

export default Navbar