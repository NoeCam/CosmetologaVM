import Carousel from "../components/Carousel.jsx";
import Treatments from "../components/Treatments.jsx";
import fotoRutina1 from "../assets/Advices/Rutina1.png";
import fotoRutina2 from "../assets/Advices/rutina2.png";
import fotoRutina3 from "../assets/Advices/rutina3.png";
import fotoRutina4 from "../assets/Advices/rutina4.png";
import fotoRutina5 from "../assets/Advices/Rutina5.png";

const Home = () => {
  return (
    <>
      <Treatments treatmentGroup={"Faciales"} />
      <Treatments treatmentGroup={"Cejas"} />
      <Treatments treatmentGroup={"Pestañas"} />
      <Treatments treatmentGroup={"Labios"} />

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

export default Home;
