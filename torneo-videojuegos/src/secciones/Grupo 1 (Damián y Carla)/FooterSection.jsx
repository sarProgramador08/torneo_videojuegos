  /* Dependencias */
  import React from 'react';
  
  /* Imágenes e íconos */
  import LogoImage from '../../assets/Imágenes/sarmientoGaming.svg';
  import SarmientoGamingTextIcon from '../../assets/SVG/Sarmiento Gaming.svg';
  import FacebookIcon from '../../assets/SVG/Facebook_Icon.svg';
  import InstagramIcon from '../../assets/SVG/Instagram_Icon.svg';
  import WhatsappIcon from '../../assets/SVG/Whatsapp_Icon.svg';

  
  const FooterSection = () => {
    return (
      /* Contenedor principal de la sección footer */
      <footer id='contacto' className='max-md:justify-center max-md:h-fit max-md:border-t-gray-900 max-md:border-[0.2vw] max-md:py-[20vw] text-white flex flex-col items-center justify-start pt-[4vw] h-[20vw] text-center bg-white bg-gradient-to-b from-black from-10% via-[#001e1b] via-30% to-[#00c0ad] to-100%' >
        {/* Contenedor Logo */}
        <div className='flex flex-col items-center gap-[0.4vw] max-md:gap-[3vw]'>
          
          {/* Logo */}
          <a href="#">
            <img className='max-md:w-[22vw] w-[4vw] hover:[filter:drop-shadow(0px_6px_10px_#00E3CD);]' src={LogoImage} alt="" />
          </a>
          
          {/* Título del logo */}
          <a href="#">
            <img className='max-md:w-[70vw] w-[17vw] hover:[filter:drop-shadow(0px_1px_2px_#00E3CD);]' src={SarmientoGamingTextIcon} alt="" />
          </a>

        </div>

        {/* Contenedor íconos */}
        <div className='flex gap-[1.4vw] mt-[1vw] max-md:mt-[4.5vw] max-md:gap-[5vw]' >
          {/* Redireccionamiento del ícono Facebook */}
          <a href="https://www.facebook.com/share/6RWq4gZkRrRhVZ3v/">
            {/* Ícono Facebook */}
            <img className='max-md:w-[9vw] w-[1.9vw]' src={FacebookIcon} alt="Ícono de Facebook de la escuela" />
          </a>
          
          {/* Redireccionamiento del ícono Instagram */}
          <a href="https://www.instagram.com/esc.profesional8sarmiento/profilecard/?igsh=Y2I4N2JjMWMxbDU4">
            {/* Ícono Instagram */}
            <img className='max-md:w-[9vw] w-[1.9vw]' src={InstagramIcon} alt="Ícono de Instagram de la escuela" />
          </a>
          
          {/* Redireccionamiento del ícono Whatsapp */}
          <a href="https://whatsapp.com/channel/0029VaoINrb1XquVgC786E3j">
            {/* Ícono Whatsapp */}
            <img className='max-md:w-[9vw] w-[1.9vw]' src={WhatsappIcon} alt="Ícono de Whatsapp del canal de Sarmiento Gaming" />
          </a>
          
        </div>
      </footer>
    )
  }


  export default FooterSection