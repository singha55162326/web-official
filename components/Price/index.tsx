/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { useState } from "react";

import {
  FaFire,
  FaGithub,
  FaNewspaper,
  FaMoneyBillAlt,
  FaSearch,
} from "react-icons/fa";
import ScrollAnimationWrapper from "../Scrolltozoomin";

const Price = () => {

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'ແຮງດັນຕ່ຳ 0.4 ກວ',
      content: [
        { title: 'ທີຢູ່ອາໄສ', description: '6-8.2024', date: '9-12.2024', electric: '0-25 kwh', electricv: '355', numberw: 'ຮັກສາລາຄາເກົ່າ' ,electric2:'26-150Kwh',electricv2:'422',electric3:'151-300 Kwh',
        electric4:'301-400kwh',electric5:'401-500kwh',electricv3:'815',electricv4:'898',electricv5:'984'
      },
        

        // { title: 'ທຸລະກິດອຸດສາຫະກຳ', description: '6-8.2024', date: '9-12.2024', electric: 'ອົງການຈັດຕັ້ງສາກົນ', electricv: '355', numberw: '1288',electric2:'26-150Kwh',electricv2:'422',electric3:'151-300 Kwh',
        // electric4:'301-400kwh',electric5:'401-500kwh',electricv3:'815',electricv4:'898',electricv5:'984' },
        

      ],

    },
    {
      label: 'ແຮງດັນກາງ 22 ກວ',
      content: [
        { title: 'ທີຢູ່ອາໄສ', description: '10-8.2024', date: '9-12.2024', electric: '0-25 kwh', electricv: '355', numberw: '1.288',electric2:'26-150Kwh',electricv2:'422',electric3:'151-300 Kwh',
        electric4:'301-400kwh',electric5:'401-500kwh',electricv3:'815',electricv4:'898',electricv5:'984' },

        // { title: 'ທຸລະກິດອຸດສາຫະກຳ', description: '16-8.2024', date: '9-12.2024', electric: 'ອົງການຈັດຕັ້ງສາກົນ', electricv: '355', numberw: '1288',electric2:'26-150Kwh',electricv2:'422',electric3:'151-300 Kwh',
        // electric4:'301-400kwh',electric5:'401-500kwh',electricv3:'815',electricv4:'898',electricv5:'984' },

      ],
    },
    {
      label: 'ແຮງດັນສູງ 115 ກວ',
      content: [
        { title: 'ທີຢູ່ອາໄສ', description: '6-8.2024', date: '9-12.2024', electric: '0-30 kwh', electricv: '455', numberw: '180',electric2:'26-150Kwh',electricv2:'422',electric3:'151-300 Kwh',
        electric4:'301-400kwh',electric5:'401-500kwh',electricv3:'815',electricv4:'898',electricv5:'984' },

        // { title: 'ທຸລະກິດອຸດສາຫະກຳ', description: '6-8.2024', date: '9-12.2024', electric: 'ອົງການຈັດຕັ້ງສາກົນ', electricv: '355', numberw: '1288',electric2:'26-150Kwh',electricv2:'422',electric3:'151-300 Kwh',
        // electric4:'301-400kwh',electric5:'401-500kwh',electricv3:'815',electricv4:'898',electricv5:'984' },

      ],
    },
    // Add more tabs as needed
  ];

  const checkboxData = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    label: `0-25kWh`,
  }));

  const values = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    value: "1.500",
  }));

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
<section
  id="blog"
  style={{ backgroundImage: 'url("/images/Group 249.png")' }}
  className="z-40 bg-cover w-full h-screen mt-10 dark:bg-bg-color-dark"
>
  <ScrollAnimationWrapper>
  <div className="container mx-auto">
  <h1 className="text-white text-4xl text-center font-bold md:pt-10 sm:pt-10 lg:pt-10">
    ລາຄາໄຟຟ້າ
  </h1>
  <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-4 md:mt-6 lg:mt-8">
    <div className="bg-opacity-25 bg-indigo-900 text-white md:p-4 rounded-lg mb-4 md:mb-0">
      ປະເພດນຳໃຊ້ໄຟຟ້າ
    </div>
    <Link href={"/#0"}>
      <button className="flex items-center border-solid rounded-xl border-2 border-white p-2 text-white transition-all hover:bg-blue-900">
        ເພີ່ມເຕີມ
        <img src="images/Group149.png" alt="Icon" className="ml-2 h-8 w-8" />
      </button>
    </Link>
  </div>
  <div className="container mx-auto sm:pt-8 lg:pt-8 xl:pt-8 md:pt-8 flex flex-col sm:flex-row gap-4">
    {/* Tabs */}
    <div className="w-full sm:w-[300px] px-4 sm:px-6 lg:px-6 pt-8 pb-8 bg-white rounded-xl shadow-md">
      <div className="flex flex-col gap-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${index === 0 ? 'rounded-tl-[5px] rounded-tr-[5px]' : ''
              } ${index === tabs.length - 1 ? 'rounded-bl-[5px]' : ''} ${activeTab === index
                ? 'bg-indigo-900 text-white'
                : 'bg-stone-50 text-zinc-900'
              } text-lg font-normal py-2 px-4 focus:outline-none transition-all`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>

    <div className="flex-1 flex flex-col md:flex-row gap-4">
      {tabs[activeTab].content.map((card, cardIndex) => (
        <div
          key={cardIndex}
          className="flex-1 p-4 md:w-full md:max-w-[50%] rounded-lg shadow-2xl transition-transform transform hover:scale-105"
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:space-x-8 place-items-center">
            <img className="mb-2 md:mb-0" src="/Group 196.png" />
            <h3 className="text-lg text-white font-semibold mb-2 md:mb-0">{card.title}</h3>
            <div className="bg-opacity-25 bg-green-500 flex rounded-md p-1 items-center mb-2 md:mb-0">
              <h3 className="text-md font-semibold text-green-500">{card.description}</h3>&nbsp;
              <img src="/Vector.png" />
            </div>
            <div className="bg-opacity-25 bg-green-500 flex rounded-md p-1 items-center mb-2 md:mb-0">
              <h3 className="text-md  font-semibold text-green-500">{card.date}</h3>&nbsp;
              <img src="/Vector.png" />
            </div>
          </div>

          

          {/* Electric Card Section */}
          <div className="flex md:flex-row  mb-2">
            <img className="mb-2 md:mb-0" src="/Group 198.png" />&nbsp;&nbsp;
            <h3 className="text-md text-white ml-4 font-semibold mb-2 md:mb-0">{card.electric}</h3>
            <div className="flex justify-center md:ml-8">
              <h3 className="text-md text-white font-semibold ml-2 mb-2 md:mb-0">{card.electricv}</h3>
           
            </div>
            <div className="flex items-center md:ml-20">
              <h3 className="text-md text-white ml-2 font-semibold mb-2 md:mb-0">{card.numberw}</h3>
            </div>
          </div>


          <div className="flex md:flex-row items-center mb-2">
            <img className="mb-2 md:mb-0" src="/Group 198.png" />&nbsp;&nbsp;
            <h3 className="text-md text-white ml-2 font-semibold mb-2 md:mb-0">{card.electric2}</h3>
            <div className="flex items-center md:ml-8">
              <h3 className="text-md text-white font-semibold  text-center mb-2 md:mb-0">{card.electricv2}</h3>
          
            </div>
            <div className="flex items-center md:ml-20">
              <h3 className="text-md text-white ml-2 font-semibold mb-2 md:mb-0">{card.numberw}</h3>
            </div>
          </div>
          <div className="flex md:flex-row items-center mb-2">
            <img className="mb-2 md:mb-0" src="/Group 198.png" />&nbsp;&nbsp;
            <h3 className="text-md text-white   font-semibold mb-2 md:mb-0">{card.electric3}</h3>
            <div className="flex items-center md:ml-7">
              <h3 className="text-md text-white font-semibold text-center mb-2 md:mb-0">{card.electricv3}</h3>
          
            </div>
            <div className="flex items-center md:ml-20">
              <h3 className="text-md text-white ml-2 font-semibold mb-2 md:mb-0">{card.numberw}</h3>
            </div>
          </div>
          <div className="flex md:flex-row items-center mb-2">
            <img className="mb-2 md:mb-0" src="/Group 198.png" />&nbsp;&nbsp;
            <h3 className="text-md text-white text-center font-semibold mb-2 md:mb-0">{card.electric4}</h3>
            <div className="flex items-center md:ml-8">
              <h3 className="text-md text-white font-semibold  text-center mb-2 md:mb-0">{card.electricv4}</h3>
          
            </div>
            <div className="flex items-center md:ml-20">
              <h3 className="text-md text-white ml-2 font-semibold mb-2 md:mb-0">{card.numberw}</h3>
            </div>
          </div>

          <div className="flex md:flex-row items-center mb-2">
            <img className="mb-2 md:mb-0" src="/Group 198.png" />&nbsp;&nbsp;
            <h3 className="text-md text-white text-center font-semibold mb-2 md:mb-0">{card.electric5}</h3>
            <div className="flex items-center md:ml-8">
              <h3 className="text-md text-white font-semibold  text-center mb-2 md:mb-0">{card.electricv5}</h3>
          
            </div>
            <div className="flex items-center md:ml-20">
              <h3 className="text-md text-white ml-2 font-semibold mb-2 md:mb-0">{card.numberw}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


  </ScrollAnimationWrapper>
  
</section>

  );
};

export default Price;
