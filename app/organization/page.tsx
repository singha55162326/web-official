import Organichart from '@/components/Organichart'
import React from 'react'

const organizpage = () => {
  return (
    <section   className="z-40 h-full mb-20  dark:bg-bg-color-dark " >
            <div className="relative flex items-center justify-center h-screen">
  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/image 81.png")', filter: 'blur(0)' }}></div>

  <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-[5px]"></div>

  <div className="text-center text-white relative z-10">
    <h1 className="font-bold ">ໂຄງຮ່າງການຈັດຕັ້ງ</h1>

    <div className="flex items-center">
      <div className="mb-0 text-xl font-bold ml-8 mr-2">ໜ້າຫຼັກ</div>
      <img className="w-[13px] h-6 mr-2" alt="" src="images/vector10.svg" />
      <div className="text-xl relative leading-[57.6px]">ໂຄງຮ່າງການຈັດຕັ້ງ</div>
    </div>
  </div>
</div>

<Organichart/>
    </section>




  )
}

export default organizpage
