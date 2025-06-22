import React from "react";

import bb1 from "../../assets/hero/bb1.jpg";
import aman2 from "../../assets/hero/aman2.jpg";
import software from "../../assets/hero/software.jpg";
import skill from "../../assets/hero/skill.jpg";
import book1 from "../../assets/hero/book1.jpg";
import book3 from "../../assets/hero/book3.jpg";
import institute1 from "../../assets/hero/institute1.jpg";
import book from "../../assets/hero/book.jpg";


// import '/Hero.css';

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  
  FaMobileAlt,
} from "react-icons/fa";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: software,
    title: "Education & Tutorial Hub",
    description:
      "",
  },
  {
    id: 2,
    img: bb1,
    title: "Select Faculty Member",
    description:
      "",
  },
  {
    id: 3,
    img: book1,
    title: "Choose your stream",
    description:
      "",
  },
  
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="hero-section" style={{ backgroundImage: `url(${skill})` }}>
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

     {/* 🔗 Social Media Links */}
  <div className="flex gap-4 justify-center sm:justify-start mt-4">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline font-bold">
      <FaFacebook className="text-4xl font-bold" /> Facebook
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline ">
      <FaInstagram className="text-4xl font-bold" /> Instagram
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline font-bold  text-3xl">
      <FaLinkedin className="text-4xl font-bold" /> Linkdin
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline font-bold  text-3xl">
      <FaMobileAlt className="text-4xl font-bold" /> MobileAlert
    </a>

  </div>
      </div>
    </div>
  );
};

export default Hero;
