import React, { useState } from 'react';
import Imagen1 from '../../assets/Imágenes/imagen1.jpg'
import Imagen2 from '../../assets/Imágenes/imagen2.jpg'
import Imagen3 from '../../assets/Imágenes/imagen3.jpg'
import Imagen4 from '../../assets/Imágenes/imagen4.jpg'
import Imagen5 from '../../assets/Imágenes/imagen5.jpg'
import Imagen6 from '../../assets/Imágenes/imagen6.jpg'
import Imagen7 from '../../assets/Imágenes/imagen7.jpg'
import Imagen8 from '../../assets/Imágenes/imagen8.jpg'
import Imagen9 from '../../assets/Imágenes/imagen9.jpg'
import Imagen10 from '../../assets/Imágenes/imagen10.jpg'
import Imagen11 from '../../assets/Imágenes/imagen11.jpg'
import Imagen12 from '../../assets/Imágenes/imagen12.jpg'
import Imagen13 from '../../assets/Imágenes/imagen13.jpg'
import Imagen14 from '../../assets/Imágenes/imagen14.jpg'



const RulesSection = () => {
  return (
    <div className="bg-black text-white py-10">
      <h2 className="text-center text-3xl font-bold mb-6">Exposición y Entrega de Premios</h2>

      {/* Botones de filtro */}
      <div className="flex justify-center space-x-4 mb-8">
      </div>

      {/* Grid de imágenes */}
      <div className="grid bg-[#c349fc] gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
        <img className='aspect-auto w-40' src={Imagen1} alt="imagen1" />
        <img className='aspect-auto w-40' src={Imagen2} alt="imagen2" />
        <img className='aspect-auto w-40' src={Imagen3} alt="imagen3" />
        <img className='aspect-auto w-40' src={Imagen4} alt="imagen4" />
        <img className='aspect-auto w-40' src={Imagen5} alt="imagen5" />
        <img className='aspect-auto w-40' src={Imagen6} alt="imagen6" />
        <img className='aspect-auto w-40' src={Imagen7} alt="imagen7" />
        <img className='aspect-auto w-40' src={Imagen8} alt="imagen8" />
        <img className='aspect-auto w-40' src={Imagen9} alt="imagen9" />
        <img className='aspect-auto w-40' src={Imagen10} alt="imagen10" />
        <img className='aspect-auto w-40' src={Imagen11} alt="imagen11" />
        <img className='aspect-auto w-40' src={Imagen12} alt="imagen12" />
        <img className='aspect-auto w-40' src={Imagen13} alt="imagen13" />
        <img className='aspect-auto w-40' src={Imagen14} alt="imagen14" />

        {/* Efecto de hover con texto */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <span className="text-white text-center"></span>
        </div>
      </div>

      <section className='flex flex-col'>
        {/* Carrusel 1 */}
        <div className="carousel w-[30%] h-[30%] aspect-auto">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={Imagen1}
              className="w-full" />

            {/* Botones carrusel */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              {/* Botón izquierda */}
              <a href="#slide6" className="btn btn-circle">❮</a>
              {/* Botón derecha */}
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>

          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={Imagen2}
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={Imagen3}
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src={Imagen4}
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <img
              src={Imagen11}
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide6" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
            <img
              src={Imagen12}
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide5" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>

        {/* Carrusel 2 */}
        <div className="carousel w-[40%] aspect-video">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={Imagen5}
              className="w-full aspect-auto" />

            {/* Botones carrusel */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              {/* Botón izquierda */}
              <a href="#slide6" className="btn btn-circle">❮</a>
              {/* Botón derecha */}
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>

          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={Imagen6}
              className="w-full aspect-auto" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={Imagen7}
              className="w-full aspect-auto" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src={Imagen8}
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide5" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <img
              src={Imagen11}
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide6" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
            <img
              src={Imagen12}
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide5" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default RulesSection;