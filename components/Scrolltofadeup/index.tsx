"use client";

import React, { useEffect } from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link as ScrollLink, Element } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';

type Props = {}

const ScrollAnimationWrapper = ({ children }) => {
    
  
    return (
      <Element name="home">
        <div data-aos="zoom-in">
          {children}
        </div>
      </Element>
    );
  };
  

export default ScrollAnimationWrapper;