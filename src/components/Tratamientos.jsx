import { useState, useEffect } from "react";

const Tratamientos = () => {
  const [tratamientos, setTratamientos] = useState([]);
  const [mostrarTodo, setMostrarTodo] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const response = await fetch("JSON/tratamientos.json");
        const data = await response.json();
        setTratamientos(data);
      } catch (err) {
        setError(err);
      }
    };
    cargarDatos();
  }, []);

  if (error) {
    return <p>Error de carga: {error.message}</p>;
  }

  const tratamientosFiltrados = mostrarTodo
    ? tratamientos
    : tratamientos.slice(0, 3);

  // const paisesFiltrados = mostrarTodo ? paises : paises.slice(0, paises.length / 2);

  return (
    <div className="mt-3 mb-5">
      {mostrarTodo && (
        <button
          onClick={() => setMostrarTodo(false)}
          className="btn btn-danger mt-5"
        >
          Ver menos entradas
        </button>
      )}

      <div className="row mb-5">
        {tratamientosFiltrados.map((tratamiento) => (
          <div key={tratamiento.id} className="col-md-3">
            <div className="card mt-5">
              <div className="card-header">
                <h2>{tratamiento.name}</h2>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Descripción del tratamiento: </b> {tratamiento.description}
                </li>
                <li className="list-group-item">{tratamiento.image}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {mostrarTodo ? null : (
        <button
          onClick={() => setMostrarTodo(true)}
          className="btn btn-success  mt-5"
        >
          Ver lista completa
        </button>
      )}
    </div>
  );
};

export default Tratamientos;
