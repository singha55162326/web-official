'use client';

import React, { useState } from 'react';
import MyModal from './mymodal';

import Formodal from './gg';


const Jobannouce = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);

  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };

  const toggleDropdown3 = () => {
    setDropdownOpen3(!isDropdownOpen3);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    closeModal();
  };







  return (


    <div className=" container mx-auto flex mt-8">
      <Formodal />


      <div className=" col-span-12  ">
        <div className="space-y-8">
          {/* Search Widget */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-md mb-8 animate__animated animate__fadeInUp">
            <h4 className="text-xl font-semibold mb-4">ຄົ້ນຫາ</h4>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="flex items-center space-x-2">
                <label className="text-gray-600">

                </label>
                <input
                  type="text"
                  className="border-2 border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="ຄົ້ນຫາຕຳແຫນ່ງວຽກ"
                  name="search"
                  required
                />
                <i className="fas fa-search" />
              </div>
            </form>
          </div>




          {/* Category Widget */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 animate__animated animate__fadeInUp">
            <h4 className="text-xl font-semibold mb-4">ລະດັບການສຶກສາ</h4>

            <div className='flex space-y-2 items-center justify-between'>


              <a href='#' className=' font-semibold hover:text-blue-900 hover:underline'>
                ລະດັບການສຶກສາ
              </a>
              <i className={`fas fa-arrow-${isDropdownOpen1 ? 'down' : 'right'}`} onClick={toggleDropdown1}></i>



            </div>

            <div className='flex space-y-2 items-center justify-between'>


              <a href='#' className=' font-semibold hover:text-blue-900 hover:underline'>
                ປະສົບການເຮັດວຽກ
              </a>
              <i className={`fas fa-arrow-${isDropdownOpen2 ? 'down' : 'right'}`} onClick={toggleDropdown2}></i>




            </div>
            <div className='flex space-y-2 items-center justify-between'>


              <a href='#' className=' font-semibold hover:text-blue-900 hover:underline'>
                ພາສາທີ່ຕ້ອງການ
              </a>
              <i className={`fas fa-arrow-${isDropdownOpen3 ? 'down' : 'right'}`} onClick={toggleDropdown3}></i>




            </div>



          </div>







          {/* Tag Widget */}


        </div>
      </div>


    </div>




  )
}

export default Jobannouce
