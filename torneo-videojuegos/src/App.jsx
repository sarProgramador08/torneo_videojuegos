import { React } from 'react';

/* Importación de secciones */
import Navbar from './secciones/Grupo 1 (Damián y Carla)/Navbar';
import PresentationSection from './secciones/Grupo 1 (Damián y Carla)/PresentationSection';
import InfoSection from './secciones/Grupo 2 (Pablo y Mika)/InfoSection';
import RulesSection from './secciones/RulesSection';
import ScheduleSection from './secciones/Grupo 3 (Axel y Luis)/ScheduleSection';
import QualifiersSection from './secciones/Grupo 4 (Aldo y Rodrigo)/QualifiersSection';
import ContactSection from './secciones/Grupo 5 (Rocío y Agustina)/ContactSection';
import GallerySection from './secciones/Grupo 6 (Dante y Julieta)/GallerySection';
import FooterSection from './secciones/Grupo 1 (Damián y Carla)/FooterSection';


function App() {
  
  return (
    <>
      <Navbar />
      <PresentationSection />
      <InfoSection />
      <RulesSection />
      <ScheduleSection />
      <QualifiersSection />
      <ContactSection />
      <GallerySection />
      <FooterSection />
    </>
  )
}

export default App
