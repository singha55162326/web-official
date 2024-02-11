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
import Turnoff from "./turn-off";
import Notice from "../Notice";
import Notice2 from "./notice";
import Serviceother from "./service-other";

const Features = () => {

  const [data, setData] = useState<Province[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<Province[]>('address-svc/province/provinces', {
          params: {
            order: 'id',
          },
        });

        setData(response.data?.data);
        console.log(response.data?.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Set loading to false once the request is complete
        setLoading(false);
      }
    };

    fetchData();
  }, []);



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
                ແຈ້ງການມອດໄຟຟ້າ
              </div>

              {/* Icon */}
              <i

                className="fas fa-calendar md:ml-48"
              ></i>


              {/* Date, Time, Location Information */}
              <div className=" text-black  font-semibold sm:ml-4 text-xl">
                25 ພ.ຍ 2023 | 9:30 AM - 3:30 PM | ຢູ່ບ້ານ.......ເມືອງ.......ແຂວງ{data?.province_name}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className=" flex items-center">
            {/* Button */}
            <button className="rounded-full bg-white px-6 py-3 text-black hover:bg-blue-900 hover:text-white">
              {/* Button Content */}
              ເບິ່ງເພີ່ມເຕີມ
            </button>
          </div>
          {/* Left Column */}

        </div>




        <ScrollAnimationWrapper>
          <div className="container mx-auto">
            <SectionTitle title={""} paragraph={""} />

            <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3">

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
                <Turnoff />

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
