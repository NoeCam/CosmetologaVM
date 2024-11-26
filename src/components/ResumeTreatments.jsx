import { useState, useEffect } from "react";
import Button from "./Button.jsx";

// eslint-disable-next-line react/prop-types
const ResumeTreatments = ({ treatmentGroup, showDescription = true }) => {
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
    <div className="mt-3 mb-5 mx-auto flex flex-col justify-center max-w py-5  bg-slate-200">
      <h2 className="text-center">{treatmentGroup}</h2>
      <div className="row mb-5 flex flex-row gap-4 overflow-x-auto">
        {treatmentsToDisplay.map((treatment) => (
          <div key={treatment.id} className="col-md-3">
            <div className="card mt-5 px-4 py-2 bg-slate-400 rounded-md">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h3 className="text-lg italic">{treatment.name}</h3>
                  {showDescription && (
                    <>
                      <p className="text-sm">Descripción del tratamiento: </p>
                      {treatment.description}
                    </>
                  )}
                </li>
                <li className="list-group-item">
                  <img
                    src={treatment.images[0]}
                    alt={`Image of ${treatment.name}`}
                    style={{ width: "100%" }}
                    className="rounded-md"
                  />
                </li>
              </ul>
            </div>
          </div>
        ))}

        {seeAll ? null : (
          <Button
            text="Ver lista completa"
            onClick={() => setSeeAll(true)}
            className="btn btn-success mt-5"
          />
        )}
        {seeAll && (
          <Button
            text="Ver menos entradas"
            onClick={() => setSeeAll(false)}
            className="btn btn-success mt-5"
          />
        )}
      </div>
    </div>
  );
};

export default ResumeTreatments;
