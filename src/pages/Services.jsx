import Treatments from "../components/Treatments.jsx";

const Services = () => {
  return (
    <>
      <Treatments treatmentGroup={"Faciales"} showDescription={true} />
      <Treatments treatmentGroup={"Cejas"} showDescription={true} />
      <Treatments treatmentGroup={"Pestañas"} showDescription={true} />
      <Treatments treatmentGroup={"Labios"} showDescription={true} />
    </>
  );
};

export default Services;
