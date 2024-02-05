import React from 'react'
import Mycontent from './mycontent'

const branchdetailpage = () => {
  return (
    <section   className="z-40 h-full mb-20  dark:bg-bg-color-dark " >


<div className="flex items-center justify-center bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/images-branch/image 84.png")', filter: 'blur(0)' }}>
<div className=" w-full left-0 top-0 absolute bg-black h-screen bg-opacity-70" />
  <div className="text-center text-white">
    <h1 className="relative font-bold ">ສາຂາແຂວງອັດຕະປື</h1>
    <div className="flex items-center">
  <div className="mb-0 text-xl z-10 text-white font-bold ml-8 mr-2">ໜ້າຫຼັກ</div>
  <img className="w-[13px]  z-10 h-6 mr-2" alt="" src="images/iconarrow.png" />
  <div className=" text-xl relative leading-[57.6px]">ສາຂາ</div>
 <img className="w-[13px] z-10 h-6 mr-2" alt="" src="images/iconarrow.png" />
  <div className=" text-xl relative leading-[57.6px]">ສາຂາແຂວງອັດຕະປື</div>

</div>


  </div>
</div>
<Mycontent/>





    </section>

  )
}

export default branchdetailpage
