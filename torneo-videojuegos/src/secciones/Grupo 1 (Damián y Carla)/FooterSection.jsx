import React from 'react'
import LogoImage from '../../assets/Imágenes/sarmientoGaming.png';
import SarmientoGamingTextIcon from '../../assets/SVG/Sarmiento Gaming.svg';
import FacebookIcon from '../../assets/SVG/Facebook_Icon.svg'
import InstagramIcon from '../../assets/SVG/Instagram_Icon.svg'
import WhatsappIcon from '../../assets/SVG/Whatsapp_Icon.svg'

const FooterSection = () => {
  return (
    <div id='contacto' className='text-white flex flex-col items-center justify-start pt-[4vw] h-[20vw] text-center bg-white bg-gradient-to-b from-black from-10% via-[#001e1b] via-30% to-[#00c0ad] to-100%' >
      <div className='flex flex-col items-center gap-[0.4vw]'>
        <a href="#">
          <img className='w-[4vw] hover:[filter:drop-shadow(0px_6px_10px_#00E3CD);]' src={LogoImage} alt="" />
        </a>
        {/* Texto del logo */}
        <a href="#">
          <img className='w-[17vw] hover:[filter:drop-shadow(0px_1px_2px_#00E3CD);]' src={SarmientoGamingTextIcon} alt="" />
        </a>
      </div>
      <div className='flex gap-[1.4vw] mt-[1vw]' >
        <a href="https://www.facebook.com/share/6RWq4gZkRrRhVZ3v/">
          <img className='w-[1.9vw]' src={FacebookIcon} alt="Ícono de Facebook de la escuela"/>
        </a>
        <a href="https://www.instagram.com/esc.profesional8sarmiento/profilecard/?igsh=Y2I4N2JjMWMxbDU4">
          <img className='w-[1.9vw]' src={InstagramIcon} alt="Ícono de Instagram de la escuela"/>
        </a>
        <a href="https://whatsapp.com/channel/0029VaoINrb1XquVgC786E3j">
          <img className='w-[1.9vw]' src={WhatsappIcon} alt="Ícono de Whatsapp del canal de Sarmiento Gaming"/>
        </a>
      </div>
    </div>
  )
}


export default FooterSection