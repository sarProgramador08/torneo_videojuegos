import React from 'react'
import Navbar from './Navbar'
import presentaciónSVG from '../../assets/SVG/presentaciónSVG.svg'

const PresentationSection = () => {
  return (
    <>
      <div className='text-black text-center flex flex-col justify-start items-center h-fit bg-slate-200 bg-gradient-to-b from-black from-10% via-[#001e1b] via-30% to-[#00c0ad] to-100%' >
        <Navbar />
        <div className='flex flex-col text-center justify-center items-center gap-[1.1vw]'>
          <h1 className='text-center mt-[4vw] w-3/5 text-pretty text-[#FCFCFC] font-Poppins font-bold text-[4vw]'>Torneo de videojuegos Sarmiento Gaming</h1>
          <p className='font-Poppins text-[#FCFCFC] text-[1.1vw] font-extralight'>Conocé el talento gamer de la escuela Sarmiento Nº8</p>
          <img className='mt-[4vw] w-[100vw]' src={presentaciónSVG} alt="Ícono torneo presentación" />
        </div>
      </div >
    </>
  )
}

export default PresentationSection