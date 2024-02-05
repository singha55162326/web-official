import React from 'react'
import Newsdetail from '@/components/Newsdetail';
import Turnoff from '@/components/Turnoff';

type Props = {}

const TurnoffPage = (props: Props) => {
  return (
    <>
    <section   className="z-40 h-full mb-20  dark:bg-bg-color-dark " >


<div className="flex items-center justify-center bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/images/Group 179.png")', filter: 'blur(0)' }}>
  <div className="text-center text-white">
    <h1 className="relative font-bold ">ແຈ້ງມອດໄຟ</h1>
    <div className="flex items-center">
  <div className="mb-0 text-xl font-bold ml-8 mr-2">ໜ້າຫຼັກ</div>
  <img className="w-[13px] h-6 mr-2" alt="" src="images/vector10.svg" />
  <div className=" text-xl relative leading-[57.6px]">ແຈ້ງມອດໄຟ</div>
</div>

  </div>
</div>


<Turnoff/>


    </section>
    </>

  )
}

export default TurnoffPage;
