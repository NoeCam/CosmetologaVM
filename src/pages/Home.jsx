import Carousel from "../components/Carousel.jsx";
import fotoRutina1 from "../assets/Advices/Rutina1.png";
import fotoRutina2 from "../assets/Advices/rutina2.png";
import fotoRutina3 from "../assets/Advices/rutina3.png";
import fotoRutina4 from "../assets/Advices/rutina4.png";
import fotoRutina5 from "../assets/Advices/Rutina5.png";
import ResumeTreatments from "../components/ResumeTreatments.jsx";

const Home = () => {
  return (
    <>
      <Carousel
        images={[
          { src: fotoRutina1, alt: "" },
          { src: fotoRutina2, alt: "" },
          { src: fotoRutina3, alt: "" },
          { src: fotoRutina4, alt: "" },
          { src: fotoRutina5, alt: "" },
        ]}
      />

      <ResumeTreatments treatmentGroup={"Faciales"} showDescription={false} />
      <ResumeTreatments treatmentGroup={"Cejas"} showDescription={false} />
      <ResumeTreatments treatmentGroup={"Pestañas"} showDescription={false} />
      <ResumeTreatments treatmentGroup={"Labios"} showDescription={false} />
    </>
  );
};

export default Home;
