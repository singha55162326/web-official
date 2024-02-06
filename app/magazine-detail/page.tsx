import React from 'react'
import Content from './content'

const magazinedetailpage = () => {
  return (
    <section   className="z-40 h-full mb-20  dark:bg-bg-color-dark " >


<div className="flex   items-center justify-center bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/images/Group 384.png")', filter: 'blur(0)' }}>
<form className="flex w-full flex-col items-center">
  <h1 className='text-white text-center z-10'>ວາລະສານ</h1>
  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
  <div className="relative w-[25%] ">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
    </div>
    <select
      id="default-search"
      className="block w-full p-4  ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required
    >
      <option value="" disabled selected>ຄົ້ນຫາວາລະສານ</option>
      <option value="mockups">Mockups</option>
      <option value="logos">Logos</option>
      {/* Add more options as needed */}
    </select>

    <button
      style={{ backgroundColor:'#29B851' }}
      type="submit"
      className="text-white absolute end-2.5 ml-10 bottom-2.5  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      ຄົ້ນຫາ
    </button>
  </div>
</form>


<div class="absolute mt-[50%] w-[1000px] ml-[2%] h-[114px] p-6 bg-white rounded-[10px] shadow flex items-center justify-between">

  <div class="flex flex-col items-center">
    <img src='/icon/Vector (2).png' />
    <span>ການທ່ອງທ່ຽວ</span>
  </div>

  <div class="flex flex-col items-center">
    <img src='/icon/Vector (3).png' />
    <span>ການເມືອງ</span>
  </div>

  <div class="flex flex-col items-center">
    <img src='/icon/Border All.png' />
    <span>ທັງຫມົດ</span>
  </div>

  <div class="flex flex-col items-center">
    <img src='/icon/Group 387.png' />
    <span>ການແຂ່ງຂັນກິລາ</span>
  </div>

  <div class="flex flex-col items-center">
    <img src='/icon/Group.png' />
    <span>ເສດຖະກິດ-ສັງຄົມ</span>
  </div>

</div>




</div>

<Content/>


    </section>
  )
}

export default magazinedetailpage