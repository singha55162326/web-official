import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
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

const Features = () => {


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

        <ScrollAnimationWrapper>
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
        25 ພ.ຍ 2023 | 9:30 AM - 3:30 PM | ຢູ່ບ້ານ.......ເມືອງ.......ແຂວງ.....
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
        </ScrollAnimationWrapper>
   


<ScrollAnimationWrapper>
<div className="container ">
          <SectionTitle />

          <div className="grid grid-cols-1  gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <div
                style={{ backgroundColor: "#F9F9F7" }}
                key={feature.id}
                className="transition-transform transform hover:scale-110"
              >
                <SingleFeature feature={feature} />
              </div>
            ))}
          </div>
        </div>
</ScrollAnimationWrapper>
       
      </section>
    </>
  );
};

export default Features;
