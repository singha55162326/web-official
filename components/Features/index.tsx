"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import api from "@/lib/api";
import {
  FaFire,
  FaGithub,
  FaNewspaper,
  FaMoneyBillAlt,
  FaSearch,
  FaCalendar,
} from "react-icons/fa";

import Slider from 'react-slick';

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollAnimationWrapper from "../Scrollanimate";
import { useEffect, useState } from "react";
import { Center } from "@/types/center";
import { Province } from "@/types/province";
import Fixelectic from "./fixelectic";
import Changepower from "./changepower.";
import Evcharger from "./evcharger";
import Turnoff1 from "./turn-off";
import Notice from "../Notice";
import Notice2 from "./notice";
import Serviceother from "./service-other";
import Link from "next/link";
import { Turnoff } from "@/types/turnoff";


const Features = () => {

  const [data, setData] = useState<Turnoff[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<Turnoff[]>('customer-svc/noti/get', {
         
        });

        setData(response.data?.data[0]);
        console.log(response.data.data[0])
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Set loading to false once the request is complete
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return ''; // Handle the case when the date string is not available
  
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split('T')[0]; // Extract YYYY-MM-DD from ISO string
    return formattedDate;
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
      <section id="features" className=" mt-6 ">

      


        <div
          style={{ backgroundImage: 'url("/images/Group 229.png")' }}
          className="container flex justify-between flex-col sm:flex-row  rounded-lg bg-cover p-4"
        > <div className="text-left items-center text-xl p-4 sm:p-6 text-gray-800">
            {/* Date, Time, Location */}
            <div className=" flex items-center">
              <div className="font-bold text-2xl">
                {/* Title */}
                {data && (
                  <>
                  {data.title_head}
                  </>
                )

                }
              
              </div>

              {/* Icon */}
              <i

                className="fas fa-calendar md:ml-48"
              ></i>

<div className="text-black font-extrabold sm:ml-4  text-lg">
      {data && (
        <>
   {formatDate(data.start_date)} ຫາ {formatDate(data.end_date)}    | {data.start_time}-{data.end_time} | {data.sub_title}
        </>
      )}
    </div>


              {/* Date, Time, Location Information */}
             
            </div>
          </div>

          {/* Right Column */}
          <div className=" flex items-center">
            {/* Button */}
            <Link href={"/turn-off-light"}>
            <button className="rounded-full bg-white px-6 py-3 text-black hover:bg-blue-900 hover:text-white">
              {/* Button Content */}
              ເບິ່ງເພີ່ມເຕີມ
            </button>
            </Link>
            
          </div>
          {/* Left Column */}

        </div>




        <ScrollAnimationWrapper>
          <div className="container mx-auto">
            <SectionTitle title={""} paragraph={""} />

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">

              <div

                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
              >
                <Fixelectic />

              </div>
              <div

                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
              >
                <Changepower />

              </div>
              <div

                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
              >
                <Evcharger />

              </div>
              <div

                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
              >
                <Turnoff1 />

              </div>
              <div

                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
              >
                <Notice2 />

              </div>
              <div

                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
              >
                <Serviceother />

              </div>

            </div>
          </div>

        </ScrollAnimationWrapper>

      </section>
    </>
  );
};

export default Features;
