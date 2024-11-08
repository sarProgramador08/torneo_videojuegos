import React, { useState } from 'react';
import LogoImage from '../../assets/Imágenes/sarmientoGaming.png';
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
      <div className={`h-[4vw] w-[100vw] flex items-center justify-between py-[4%] px-[2vw] ${navbarPin ? 'bg-[#061514]' : ''}`} >
        {/* Contenedor del logo y texto de la barra de navegación */}
        <div className='flex items-center gap-[1.5vw]'>
          <a href="#">
            <img className='w-[5vw]' src={LogoImage} alt="" />
          </a>
          {/* Texto del logo */}
          <a href="#">
            <img className='w-[20vw]' src={SarmientoGamingTextIcon} alt="" />
          </a>
        </div>

        {/* Texto de la barra de navegación */}
        <ul className='flex max-md:hidden text-[#FCFCFC] gap-[1.2vw] font-light mr-[1vw]'>
          <li><a href="#">Inicio</a></li>
          <li><a href="#infoTorneo">Información del torneo</a></li>
          <li><a href="#cronograma">Cronograma</a></li>
          <li><a href="#puntuaciones">Puntuaciones</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        {/* Íconos de menú celular */}
        <div className='md:hidden'>
          <div className='bg-none w-fit h-fit flex items-center justify-center' >
            {/* Ícono de hamburguesa menú */}
            <button onClick={handleSideMenu} >
              <img className={`ml-[3vw] z-10 absolute top-[1.5vw] right-[2.5vw] w-[5vw] ${sideMenu ? 'hidden' : 'block'}`} src={burgerMenuIcon} alt="Menú desplegable" />
            </button>
            {/* Ícono equis menú */}
            <button onClick={handleSideMenu} >
              <img className={`ml-[3vw] z-10 absolute top-[1.5vw] right-[2.5vw] w-[5vw] ${sideMenu ? 'block' : 'hidden'}`} src={crossMenuIcon} alt="Cerrar menú" />
            </button>
          </div>
          {sideMenu ? (
            /* Contenido del menú lateral */
            <div className='bg-[#061514] absolute z-0 top-0 right-0 h-lvh w-[40vw] transition-opacity duration-300 ease-in-out' >
              <h2 className='font-Inter border-b-[0.28vw] border-b-white pb-[1.5vw] text-[#FCFCFC] font-semibold mt-[2.1vw]' >Navegación</h2>
              <ul className='flex flex-col mt-[3vw] text-[#FCFCFC] gap-[1.5vw] font-light mr-[1vw]'>
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