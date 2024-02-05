"use client"
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { FaFire, FaGithub, FaNewspaper, FaMoneyBillAlt,FaSearch } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link as ScrollLink, Element } from 'react-scroll';

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

const Hero = () => {

  const storedPopupState = localStorage.getItem('isPopupOpen');
  const [isPopupOpen, setPopupOpen] = useState(storedPopupState ? JSON.parse(storedPopupState) : true);

  useEffect(() => {
    // Set a timer to close the popup after a certain duration (e.g., 5 seconds)
    const timer = setTimeout(() => {
      setPopupOpen(false);
      // Store the popup state in localStorage when it is closed
      localStorage.setItem('isPopupOpen', JSON.stringify(false));
    }, 5000); // Adjust the duration as needed (in milliseconds)

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
  };
  return (
    <>
    <ScrollAnimationWrapper >
      
    {isPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full z-30 bg-black bg-opacity-50 flex items-center justify-center">
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

      <div className="bg-cover   bg-center h-screen" style={{ backgroundImage: 'url("/images/hb.png")', filter: 'blur(0)' }}>
        <div className="container h-full ">
          <div className="wow fadeInUp flex md:pt-[300px] sm:pt-auto max-xl:pt-[300px] mx-auto w-full text text-white dark:text-white">
            <div className="flex-shrink-0">
              <h1 className="line-clamp-4 mb-6 text-4xl font-bold leading-tight sm:text-4xl max-xl:text-5xl sm:leading-tight md:text-5xl md:leading-tight">
                EDL<br/> ແອັບພິເຄຊັນ
              </h1>

              <div className="flex md:space-x-4">
                <span className="leading-[21px]">Nunc et dui nullam aliquam eget<br/>
                  velit. Consectetur nulla convallis<br/>
                  viverra quisque eleifend</span>
                <Link href="/blog">
                  <img  src="/link.png"/>
                </Link>
              </div>
            </div>
            <div>
              {/* Add content for the right column here */}
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimationWrapper>
    </>
  );
};

export default Hero;
