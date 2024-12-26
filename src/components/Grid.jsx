import grid1 from "../assets/Grid/grid-1.jpg";
import grid2 from "../assets/Grid/grid-2.jpg";
import grid3 from "../assets/Grid/grid-3.jpg";
import grid4 from "../assets/Grid/grid-4.jpg";
import grid5 from "../assets/Grid/grid-5.jpg";
import grid6 from "../assets/Grid/grid-6.jpg";
import grid7 from "../assets/Grid/grid-7.jpg";
import grid8 from "../assets/Grid/grid-8.jpg";

const Grid = () => {
  const images = [grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-4">
      {images.map((src, index) => (
        <div key={index} className="relative col-span-1 row-span-1">
          <img
            src={src}
            alt={`Grid ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xl font-bold">
              Texto {index + 1}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Grid;
