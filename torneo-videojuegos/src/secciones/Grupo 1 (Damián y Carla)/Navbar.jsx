import React, { useState } from 'react';
import LogoImage from '../../assets/Imágenes/sarmientoGaming.svg';
import SarmientoGamingTextIcon from '../../assets/SVG/Sarmiento Gaming.svg';
import burgerMenuIcon from '../../assets/SVG/burgerMenuIcon.svg';
import crossMenuIcon from '../../assets/SVG/crossMenuIcon.svg';
import Headroom from 'react-headroom';


const Navbar = () => {
  const [navbarPin, setNavbarPin] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);

  const handlePin = () => setNavbarPin(true);
  const handleUnpin = () => setNavbarPin(false);

  // Cambiar el estado del menú lateral
  const handleSideMenu = () => setSideMenu(prevState => !prevState);

  return (
    /* Estructura del HTML (Elementos visuales de la web) */
    <Headroom onPin={handlePin} onUnfix={handleUnpin} downTolerance={20} upTolerance={10} pinStart={100}>
      {/* Contenedor de la barra de navegación */}
      <div className={`max-md:h-fit max-md:pt-[8vw] max-md:px-[5vw] h-[4vw] w-[100vw] flex items-center justify-between py-[4%] px-[2vw] ${navbarPin ? 'bg-[#061514]' : ''}`} >
        {/* Contenedor del logo y texto de la barra de navegación */}
        <div className='flex items-center gap-[1.5vw] max-md:gap-[2vw]'>
          <a href="#">
            <img className='max-md:w-[12vw] w-[5vw] hover:[filter:drop-shadow(0px_6px_10px_#00E3CD);] hover:shadow-emerald-300' src={LogoImage} alt="" />
          </a>
          {/* Texto del logo */}
          <a href="#">
            <img className='max-md:w-[58vw] w-[20vw] hover:[filter:drop-shadow(0px_1px_2px_#00E3CD);]' src={SarmientoGamingTextIcon} alt="" />
          </a>
        </div>

        {/* Texto de la barra de navegación */}
        <ul className='flex items-center justify-end max-md:hidden text-[#FCFCFC] gap-[1.2vw] w-full font-light mr-[1vw]'>
          <li><a href="#"><h2 className='font-light text-[1.25vw] hover:border-b-[2px] transition-all duration-75 h-[2.2vw] mt-2'>Inicio</h2></a></li>
          <li><a href="#infoTorneo"><h2 className='font-light text-[1.25vw] hover:border-b-[2px] transition-all duration-75 h-[2.2vw] mt-2'>Información del torneo</h2></a></li>
          <li><a href="#cronograma"><h2 className='font-light text-[1.25vw] hover:border-b-[2px] transition-all duration-75 h-[2.2vw] mt-2'>Cronograma</h2></a></li>
          <li><a href="#puntuaciones"><h2 className='font-light text-[1.25vw] hover:border-b-[2px] transition-all duration-75 h-[2.2vw] mt-2'>Puntuaciones</h2></a></li>
          <li><a href="#contacto"><h2 className='font-light text-[1.25vw] hover:border-b-[2px] transition-all duration-75 h-[2.2vw] mt-2'>Contacto</h2></a></li>
        </ul>

        {/* Íconos de menú celular */}
        <div className='md:hidden'>
          <div className='bg-none w-fit h-fit flex items-center justify-center' >
            {/* Ícono de hamburguesa menú */}
            <button onClick={handleSideMenu} >
              <img className={`max-md:top-[10.8vw] max-md:right-[6vw] max-md:w-[7vw] ml-[3vw] z-10 absolute top-[1.5vw] right-[2.5vw] w-[5vw] ${sideMenu ? 'hidden' : 'block'}`} src={burgerMenuIcon} alt="Menú desplegable" />
            </button>
            {/* Ícono equis menú */}
            <button onClick={handleSideMenu} >
              <img className={`top-[10.8vw] right-[6vw] bg-[#061514] rounded w-[8vw] ml-[3vw] z-10 absolute ${sideMenu ? 'block' : 'hidden'}`} src={crossMenuIcon} alt="Cerrar menú" />
            </button>
          </div>
          {sideMenu ? (
            /* Contenido del menú lateral */
            <div className='bg-[#061514] absolute z-0 top-0 right-0 h-lvh w-fit transition-opacity duration-300 ease-in-out mr-[17vw]' >
              <h2 className='font-Inter border-b-[0.28vw] border-b-white pb-[1.5vw] text-[#FCFCFC] font-semibold mt-[10.1vw] mr-[0vw]'>Navegación</h2>
              <ul className='flex flex-col mt-[3vw] text-[#FCFCFC] text-[4vw] gap-[4vw] font-light mr-[0vw]'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#infoTorneo">Información del torneo</a></li>
                <li><a href="#cronograma">Cronograma</a></li>
                <li><a href="#puntuaciones">Puntuaciones</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>
          ) : ""
          }
        </div>

      </div>
    </Headroom >
  );
}

export default Navbar;