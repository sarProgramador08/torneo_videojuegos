import React from 'react';
import imagen1 from '../../assets/Imágenes/nebulosa.jpg';
import imagen2 from '../../assets/Imágenes/axel.jpg';
import imagen3 from '../../assets/Imágenes/maca.jpg';
import imagen4 from '../../assets/Imágenes/lucas.jpg';
import imagen5 from '../../assets/Imágenes/max.jpg';
import imagen6 from '../../assets/Imágenes/nicolas.jpg';
import imagen7 from '../../assets/Imágenes/denis.jpg';

const QualifiersSection = () => {
  return (
    <div style={{ textAlign: 'center', backgroundImage: `url(${imagen1})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '20px' }}>
      <div>
        <h1 style={{ fontSize: '48px', color: 'turquoise', fontWeight: 'bold' }}>Ganadores de Sarmiento Gaming</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ margin: '10px' }}>
            <h2 style={{ fontSize: '32px', color: 'turquoise' }}>BRAWL STARS</h2>
            <img src={imagen3} alt="Maca" style={{ width: '400px', height: '400px' }} />
            <p style={{ color: 'white', fontSize: '18px' }}>Macarena Llanos</p>
          </div>
          <div style={{ margin: '10px' }}>
            <h2 style={{ fontSize: '32px', color: 'turquoise' }}>TETRI</h2>
            <img src={imagen4} alt="Lucas" style={{ width: '400px', height: '400px' }} />
            <p style={{ color: 'white', fontSize: '18px' }}>Lucas Humacata </p>
          </div>
          <div style={{ margin: '10px' }}>
            <h2 style={{ fontSize: '32px', color: 'turquoise' }}>FREE FIRE-COUNTER STRIKE</h2>
            <img src={imagen2} alt="Axel" style={{ width: '400px', height: '400px' }} />
            <p style={{ color: 'white', fontSize: '18px' }}> Axel Mamani</p>
          </div>
        </div>
      </div>
      <div>
        <h3 style={{ fontSize: '32px', color: 'turquoise' }}>TEAM COUNTER STRIKE 1.6</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}></div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ margin: '10px' }}>
            <img src={imagen5} alt="Max" style={{ width: '400px', height: '400px' }} />
            <p style={{ color: 'white', fontSize: '18px' }}>Maximo Condori</p>
          </div>
          <div style={{ margin: '10px' }}>
            <img src={imagen6} alt="Nicolas" style={{ width: '400px', height: '400px' }} />
            <p style={{ color: 'white', fontSize: '18px' }}>Nicolas Di Brigida</p>
          </div>
          <div style={{ margin: '10px' }}>
            <img src={imagen7} alt="Denis" style={{ width: '400px', height: '400px' }} />
            <p style={{ color: 'white', fontSize: '18px' }}>Denis Alexander</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualifiersSection;