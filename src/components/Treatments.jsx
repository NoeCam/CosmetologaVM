import { useState, useEffect } from "react";
import Button from "../components/Button.jsx";

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
        setTreatments(data);
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
    <div className="mt-3 mb-5">
      {seeAll && (
        <Button
          text="Ver menos entradas"
          onClick={() => setSeeAll(false)}
          className="btn btn-success  mt-5"
        />
      )}

      <div className="row mb-5">
        <h2>{treatmentGroup}</h2>
        {treatmentsToDisplay.map((treatment) => (
          <div key={treatment.id} className="col-md-3">
            <div className="card mt-5">
              <div className="card-header">
                <h3>{treatment.name}</h3>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <p>Descripción del tratamiento: </p> {treatment.description}
                </li>
                <li className="list-group-item">
                  <b>Imagen: </b>
                  {treatment.image}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {seeAll ? null : (
        <Button
          text="Ver lista completa"
          onClick={() => setSeeAll(true)}
          className="btn btn-success  mt-5"
        />
      )}
    </div>
  );
};

export default Treatments;
