import { useState, useEffect, useRef } from "react";
import "../App.css";

// eslint-disable-next-line react/prop-types
const ResumeTreatments = ({ treatmentGroup, showDescription = true }) => {
  const [treatments, setTreatments] = useState([]);
  const [error, setError] = useState(null);

  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

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

  return (
    <div
      className="relative mt-3 mb-10 mx-auto max-w pt-5 pb-14 
    w-full xl:max-w-screen-xl xl:mx-auto "
    >
      <h2 className="text-center text-2xl mb-5">{treatmentGroup}</h2>

      <div
        ref={scrollRef}
        className=" overflow-x-auto whitespace-nowrap scrollbar-hide flex items-center gap-4"
      >
        {filteredTreatments.map((treatment) => (
          <a
            href={`/services#${treatment.name}`}
            key={treatment.id}
            className="text-white"
          >
            <div className="inline-block">
              <div
                className="w-48 h-60 sm:w-64 sm:h-80 px-4 py-2 rounded-md bg-cover bg-center flex items-end"
                style={{
                  backgroundImage: `linear-gradient(to top, black, transparent), url(${treatment.images[0]})`,
                }}
                alt={`Image of ${treatment.name}`}
              >
                <ul>
                  <li>
                    <h3 className="text-md italic text-white">
                      {treatment.name}
                    </h3>
                    {showDescription && (
                      <>
                        <p className="text-sm">Descripción del tratamiento: </p>
                        {treatment.description}
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="absolute right-0 flex space-x-2 p-2">
        <button
          className="w-10 h-10 rounded-full bg-gray-400 text-white flex items-center justify-center z-10"
          onClick={() => handleScroll("left")}
        >
          &#8249;
        </button>
        <button
          className="w-10 h-10 rounded-full bg-gray-400 text-white flex items-center justify-center z-10"
          onClick={() => handleScroll("right")}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ResumeTreatments;
