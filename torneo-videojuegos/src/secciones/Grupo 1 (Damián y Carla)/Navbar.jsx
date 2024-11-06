import React from 'react'
import LogoImage from '../../assets/Imágenes/sarmientoGaming.png'

const Navbar = () => {
  /* Lógica de Javascript */
  return (
    /* Estructura del HTML (Elementos visuales de la web) */
    <div className='bg-transparent h-[10vw] flex items-center justify-between my-[10%]' >
      <a href="#" className='flex items-center gap-[3vw]'><img className='w-[20%]' src={LogoImage} alt="" />
        <h2 className='text-[#00E3CD] text-[5vw]'>Sarmiento Gaming</h2>
      </a>
      <ul className='flex max-md:hidden'>
        <li>Inicio</li>
        <li>Inicio</li>
        <li>Inicio</li>
        <li>Inicio</li>
        <li>Inicio</li>
      </ul>
      <div className='md:hidden'>
        <div className='bg-white w-[10vw] h-[10vw]' ></div>
      </div>
    </div>
  )
}

export default Navbar