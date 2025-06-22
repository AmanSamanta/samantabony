import React from "react";
import { FaStar } from "react-icons/fa";

import institute1 from "../../assets/hero/institute1.jpg";
import institute from "../../assets/hero/institute.jpg";
import school2 from "../../assets/hero/school2.jpg";

const ProductsData = [
  {
    id: 1,
    img: school2,
    title: "Inner Side View",
    description: "Explore the detailed layout of our school's interior and classroom arrangements."
  },
  {
    id: 2,
    img: institute,
    title: "Outside Full View",
    description: "View the entire front-facing campus, including entry gate and landscaping."
  },
  {
    id: 3,
    img: institute1,
    title: "Full Campus",
    description: "A full aerial view of our academic campus and surroundings."
  },
];

const VisitCampuse = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container container container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Quality Faculty Suggest for You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            VISIT OUR FULL CAMPUS
          </h1>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* Image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>

              {/* Details section */}
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1 mb-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Book a Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default VisitCampuse;
