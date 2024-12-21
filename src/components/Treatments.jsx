import { useState, useEffect } from "react";
import Button from "../components/Button.jsx";
import Carousel from "../components/Carousel.jsx";

// eslint-disable-next-line react/prop-types
const Treatments = ({ treatmentGroup }) => {
  const [treatments, setTreatments] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const response = await fetch("JSON/tratamientos.json");
        const data = await response.json();

        const treatmentsWithImages = data.map((treatment) => ({
          ...treatment,
          images:
            treatment.images?.map(
              (img) => new URL(img, import.meta.url).href
            ) || [],
        }));

        setTreatments(treatmentsWithImages);
      } catch (err) {
        setError(err);
      }
    };
    cargarDatos();
  }, []);

  if (error) {
    return <p>Error de carga: {error.message}</p>;
  }

  const filteredTreatments = treatments.filter(
    (treatment) => treatment.group === treatmentGroup
  );

  const treatmentsToDisplay = seeAll
    ? filteredTreatments
    : filteredTreatments.slice(0, 3);

  return (
    <div className="flex flex-col justify-center max-w py-5 bg-slate-200">
      <h2 className="text-center text-2xl mb-5">{treatmentGroup}</h2>

      <div className="row mb-5 overflow-x-auto">
        {treatmentsToDisplay.map((treatment) => (
          <div key={treatment.id} className="col-md-3">
            <div
              id={treatment.name}
              className="card my-5 px-4 py-2 bg-slate-400 rounded-md"
            >
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  {treatment.images && treatment.images.length > 0 ? (
                    <Carousel
                      images={treatment.images.map((img, index) => ({
                        src: img,
                        alt: `Imagen ${index + 1} de ${treatment.name}`,
                      }))}
                    />
                  ) : (
                    <p>No hay imágenes disponibles</p>
                  )}
                </li>
                <li className="list-group-item">
                  <h3 className="text-lg italic">{treatment.name}</h3>
                  <p className="text-sm">Descripción del tratamiento: </p>
                  {treatment.description}
                </li>
              </ul>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center">
          {seeAll ? null : (
            <Button text="Ver lista completa" onClick={() => setSeeAll(true)} />
          )}
          {seeAll && (
            <Button
              text="Ver menos entradas"
              onClick={() => setSeeAll(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Treatments;
