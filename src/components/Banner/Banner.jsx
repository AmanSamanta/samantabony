import React from "react";
import software from "../../assets/hero/software.jpg";
import puja from "../../assets/hero/puja.jpg";
import lady from "../../assets/hero/lady.jpg";
// import software from "../../assets/hero/software.jpg";
import aman3 from "../../assets/hero/aman3.jpg";

// import group from "../../assets/hero/group.jpg";
import OIP from "../../assets/hero/OIP.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
<div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-gradient-to-b from-white/10 to-transparent"  style={{ backgroundImage: `url(${OIP})` }}>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={aman3}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-yellow-500">
              About Tutorial class details class
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              samanta private center
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4 font-bold text-3xl text-yellow-500">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 bg-violet-100 dark:bg-violet-400" />
                <p>Cyber security</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4 font-bold text-3xl text-yellow-500">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 bg-orange-100 dark:bg-orange-400" />
                <p>Medical Lab & organic</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4 font-bold text-3xl text-yellow-500">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4  bg-green-100 dark:bg-green-400"/>
                <p>Higher secondary education</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4 font-bold text-3xl text-yellow-500">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4  bg-yellow-100 " />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
