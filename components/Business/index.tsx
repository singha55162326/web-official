/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';

import CountUp from "react-countup";

type Props = {}

const Business = (props: Props) => {
  const [count, setCount] = useState(253000);

  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 10000);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
    }, 30000);


    // Cleanup on unmount
    return () => clearInterval(intervalId);

  }, [count]);
  return (
    <div >
      <div className='container mx-auto'>
        <h1 style={{ color: "#505050" }} className='text-center'>ທຸລະກິດປິ່ນອອ້ມ</h1>


        <div className="w-full  relative">
  <div className="w-full h-[50vw] md:h-[404px]  relative">
    <img className="w-full md:w-[33.33%] h-[100%] transition-transform transform hover:scale-110 left-0 top-0 absolute" src='/images-business/image 47.png' />
    <img className="w-full md:w-[33.33%] h-[100%] transition-transform transform hover:scale-110 left-[33.33%] top-0 absolute" src='/images-business/image 48.png' />
    <img className="w-full md:w-[33.33%] h-[100%] transition-transform transform hover:scale-110 left-[66.66%] top-0 absolute" src='/images-business/image 49.png' />
    <img src='/images-business/Rectangle 91.png' className="w-full  h-[25vw] md:h-[190.46px] left-0 top-[35%] md:top-[213.54px] absolute" />
  </div>
  <div className="w-full md:w-[33.33%] h-[5vw] md:h-[21.93px] left-0 top-[40%] md:top-[251.63px] absolute text-white text-xs md:text-lg font-semibold font-'Noto Sans Lao' leading-[19px]">O&M Supply line</div>
  <div className="w-full md:w-[33.33%] h-[5vw] md:h-[21.93px] left-[33.33%] top-[40%] md:top-[251.63px] absolute text-white text-xs md:text-lg font-semibold font-'Noto Sans Lao' leading-[19px]">EV Charger</div>
  <div className="w-full md:w-[33.33%] h-[5vw] md:h-[21.93px] left-[66.66%] top-[40%] md:top-[251.63px] absolute text-white text-xs md:text-lg font-semibold font-'Noto Sans Lao' leading-[19px]">Optical Ground Wire</div>
  <div className="w-full md:w-[33.33%] h-[15vw] md:h-[66.95px] left-0 top-[50%] md:top-[298.96px] absolute text-white text-xs md:text-lg font-semibold font-'Noto Sans Lao' leading-[39px] md:text-[32px]">ບໍລິການສ້ອມແປງ-ບຳລຸງຮັກສາ<br />ສາຍສົ່່ງໄຟຟ້າ</div>
  <div className="w-full md:w-[33.33%] h-[15vw] md:h-[66.95px] left-[33.33%] top-[50%] md:top-[298.96px] absolute text-white text-xs md:text-lg font-semibold font-'Noto Sans Lao' leading-[39px] md:text-[32px]">ບໍລິການ ສະຖານີສາກ<br />ລົດໄຟຟ້າ</div>
  <div className="w-full md:w-[33.33%] h-[15vw] md:h-[66.95px] left-[66.66%] top-[50%] md:top-[298.96px] absolute text-white text-xs md:text-lg font-semibold font-'Noto Sans Lao' leading-[39px] md:text-[32px]">ບໍລິການ ເຊົ່າສາຍໄຍແກ້ວ <br />OPGW</div>
</div>



<div className="flex flex-wrap justify-center    gap-14 mt-8">

<a href="#" className="flex-shrink-0 w-64 h-80 p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow text-center hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
  <img className='ml-10'  width={120} height={120} src='/images/Group 98.png'></img>
  <h5 className="pt-8 text-xl font-bold tracking-tight text-gray-900 dark:text-white">

  <CountUp end={300}  suffix="k" duration={70} /> +</h5>
  <p style={{ color: '#7F7F7F' }} className="pt-8 font-normal dark:text-gray-400">ລູກຄ້າລາຍຍ່ອຍ</p>
</a>

<a href="#" className="flex-shrink-0 w-64 h-80 p-6 mb-4 bg-white border border-gray-200 rounded-lg text-center shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
  <img className='ml-10'  width={120} height={120} src='/images/Group 221.png'></img>
  <h5 className=" text-xl font-bold tracking-tight pt-8 text-gray-900 dark:text-white">

  <CountUp end={18}  suffix="k" duration={70} /> +</h5>
  <p style={{ color: '#7F7F7F' }} className="pt-8 font-normal dark:text-gray-400">ລູກຄ້າລາຍໃຫຍ່</p>
</a>

<a href="#" className="flex-shrink-0 w-64 h-80 p-6 mb-4 bg-white border border-gray-200 rounded-lg text-center shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
  <img  className='ml-10' width={120} height={120} src='/images/Group 95.png'></img>
  <h5 className="pt-8 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
  <CountUp end={100}  duration={70} /> %
  </h5>
  <p style={{ color: '#7F7F7F' }} className="pt-8 font-normal dark:text-gray-400">ສະຖິຕິຜູ້ຊົມໃຊ້ໄຟທົ່ວປະເທດ</p>
</a>

<a href="#" className="flex-shrink-0 w-64 h-80 p-6 mb-4 bg-white items-center border border-gray-200 text-center rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
  <img className='ml-10' width={120} height={120} src='/images/Group 97.png'></img>
  <h5 className="pt-8 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
  <CountUp end={5}  suffix="M" duration={70} /> Kwh/day</h5>
  <p style={{ color: '#7F7F7F' }} className="pt-8 font-normal dark:text-gray-400">ຈຳນວນຊົມໃຊ້ໄຟຕໍ່ມື້</p>
</a>

</div>

      </div>


    </div>

  )
}

export default Business;
