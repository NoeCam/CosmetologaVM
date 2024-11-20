import Carousel from "../components/Carousel.jsx";
import fotoRutina1 from "../assets/Advices/Rutina1.png";
import fotoRutina2 from "../assets/Advices/rutina2.png";
import fotoRutina3 from "../assets/Advices/rutina3.png";
import fotoRutina4 from "../assets/Advices/rutina4.png";
import fotoRutina5 from "../assets/Advices/Rutina5.png";

const About = () => {
  return (
    <>
      {/* Slice con imagenes de Valery trabajando */}
      {/* Imagen estilo avatar de Valery, en tamaño pequeño */}
      <h1>Cosmetologa VM</h1>
      <h2>Valery Miranda</h2>
      <p>
        Mi Nombre es Valery (pero algunos me conocen por Shishi). Taurina, 35
        años, mamá de Julián. Soy cosmetóloga, lashista, micropigmentadora en
        labios y cejas.
      </p>
      {/* Sector de los diplomas */}

      <Carousel
        images={[
          { src: fotoRutina1, alt: "" },
          { src: fotoRutina2, alt: "" },
          { src: fotoRutina3, alt: "" },
          { src: fotoRutina4, alt: "" },
          { src: fotoRutina5, alt: "" },
        ]}
      />
    </>
  );
};

export default About;
