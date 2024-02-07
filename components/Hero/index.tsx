/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { FaFire, FaGithub, FaNewspaper, FaMoneyBillAlt, FaSearch } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link as ScrollLink, Element } from 'react-scroll';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "../../styles/index.css"

const gifIcon = '/images/energy.gif';

const ScrollAnimationWrapper = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Element name="home">
      <div data-aos="fade-up">
        {children}
      </div>
    </Element>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        right: '10px',
        zIndex: 999,
        fontSize: '50px',
        backgroundColor: 'darkgrey',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '25%',
        cursor: 'pointer',
      }}
    >

    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        left: '5px',
        zIndex: 999,
        backgroundColor: 'darkgrey',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '25%',
        cursor: 'pointer',
      }}
    >
      <FaArrowLeft style={{ color: 'white' }} />
    </div>
  );
};

const Hero = () => {

  const storedPopupState = localStorage.getItem('isPopupOpen');
  const [isPopupOpen, setPopupOpen] = useState(storedPopupState ? JSON.parse(storedPopupState) : true);

  useEffect(() => {
    // Set a timer to close the popup after a certain duration (e.g., 5 seconds)
    const timer = setTimeout(() => {
      setPopupOpen(false);
      // Store the popup state in localStorage when it is closed
      localStorage.setItem('isPopupOpen', JSON.stringify(false));
    }, 50000); // Adjust the duration as needed (in milliseconds)

    // Clear the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  const handlePopupClose = () => {
    setPopupOpen(false);
    // Store the popup state in localStorage when it is closed
    localStorage.setItem('isPopupOpen', JSON.stringify(false));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 50000,
    arrows: true,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
   
  };

  const sliderContent = [
    {
      imageUrl: '/BN2 (1).jpg'
    },

    {
        imageUrl:'/edltransfor.jpg'
    },

    {

      imageUrl: '/price1.JPG',
    },
,
    {
      imageUrl: '/BN2.JPG'
    },
    {
      imageUrl:'/cover.jpg'
    }

    // Add more slides as needed
  ];




  return (
    <>
      <ScrollAnimationWrapper >

        {isPopupOpen && (
          <div className="fixed  top-0 left-0 w-full h-full z-30 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-[500px] mx-auto">
              <h2 className="text-2xl font-bold text-center mb-4">Welcome to Our Website</h2>

              <img
                src="/IMG_1443.jpeg"
                alt="Popup Image"
                className="mb-4 rounded-lg w-full h-auto object-cover"
                style={{ maxHeight: '500px' }}
              />
              <p className="text-gray-700 mb-4">
                This is a popup message with important information. You can provide additional details or instructions here.
              </p>
              <button
                onClick={handlePopupClose}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Got it!
              </button>
            </div>
          </div>
        )}

<div className="  ">
  
  {/* Slider */}
  <Slider {...sliderSettings}>
    {sliderContent.map((slide, index) => (
      <div key={index}>
        <Link href={"/#"}>

          <img
            src={slide.imageUrl}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto    pt-20   "
          />
        </Link>

        <div className="absolute top-0 z-50 left-0 w-full h-full flex items-center justify-center">
          {/* Additional content, if any */}
        </div>
      </div>
    ))}
  </Slider>

  {/* Your existing content */}

</div>



      </ScrollAnimationWrapper>
    </>
  );
};

export default Hero;
