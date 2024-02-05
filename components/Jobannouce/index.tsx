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


  const getTextColor = (card) => {

    if (card.isGreen) {
      return '#29B851';
    } else if (card.isRed) {
      return 'red';
    } else if (card.isYellow) {
      return '#F7921E';
    } else {
      return 'black'; // Default color if none of the conditions match
    }
  };

  const getTextDescription = (card) => {
    if (card.isGreen) {
      return 'ເປີດປະມູນແລ້ວ';
    } else if (card.isRed) {
      return 'ປິດປະມູນແລ້ວ';
    } else if (card.isYellow) {
      return 'ລໍຖ້າການປະມູນ';
    } else {
      return ''; // Default description if none of the conditions match
    }
  };


  const getIconColor = (card) => {
    if (card.isRed) {
      return 'red';
    } else if (card.isYellow) {
      return '#F7921E';
    } else {
      return 'black'; // Default color if none of the conditions match
    }
  };

  const [isVisible, setIsVisible] = useState(true);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const isRed = true;
  const isYellow = true;
  const isGreen = true;

  const cardData = [
    {
      id: 1,
      imagePath: "images/image-72@2x.png",
      iconPath: "images/vector14.svg",
      title: "ແຈ້ງການປະມູນ",
      description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
      date: "ລົງທະບຽນວັນທີ 6/11/2023 - 10/01/2024",
      isGreen: true,


    },
    {
      id: 2,
      imagePath: "images/image-72@2x.png",
      iconPath: "images/vector14.svg",
      title: "ແຈ້ງການປະມູນ",
      description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
      date: "ລົງທະບຽນວັນທີ 6/11/2023 - 10/01/2024",
      isRed: true,
    },
    {
      id: 3,
      imagePath: "images/image-72@2x.png",
      iconPath: "images/vector14.svg",
      title: "ແຈ້ງການປະມູນ",
      description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
      date: "ລົງທະບຽນວັນທີ 6/11/2023 - 10/01/2024",
      isYellow: true,


    },
    {
      id: 4,
      imagePath: "images/image-72@2x.png",
      iconPath: "images/vector14.svg",
      title: "ແຈ້ງການປະມູນ",
      description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
      date: "ລົງທະບຽນວັນທີ 6/11/2023 - 10/01/2024",
      isGreen: true,


    },
    {
      id: 5,
      imagePath: "images/image-72@2x.png",
      iconPath: "images/vector14.svg",
      title: "ແຈ້ງການປະມູນ",
      description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
      date: "ລົງທະບຽນວັນທີ 6/11/2023 - 10/01/2024",
      isGreen: true,


    },
    {
      id: 6,
      imagePath: "images/image-72@2x.png",
      iconPath: "images/vector14.svg",
      title: "ແຈ້ງການປະມູນ",
      description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
      date: "ລົງທະບຽນວັນທີ 6/11/2023 - 10/01/2024",
      isGreen: true,


    },



    // Add more card data objects as needed
  ];

  const Dropdown = () => {
    // Your dropdown content and logic go here
    return (
      <div className="dropdown-content">
        {/* Dropdown content goes here */}
        <p>Dropdown content</p>
      </div>
    );
  };
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);

  };
  console.log(toggleDropdown)



  
  const items = Array.from({ length: 16 }, (_, index) => (
    <div key={index} className="w-[432px] h-[200px] relative" style={{ marginBottom: '20px' }}>
      <div className="w-[432px] h-[200px] left-0 top-0 absolute bg-white rounded-[10px] shadow" />
      <div className="w-[182px] left-[182px] top-[10px] absolute text-zinc-900 text-base font-bold font-['Noto Sans Lao'] leading-loose">
        ພະນັກງານພັດທະນາໂປຣແກຣມ
      </div>

      <div className="w-[234.03px] h-[78.55px] text-zinc-500 left-[182px] text-sm top-[50px] absolute">ສຳນັກງານໃຫຍ່ໄຟຟ້າລາວ-ນະຄອນຫຼວງວຽງຈັນ<br />
        ຝ່າຍເຕັກໂນໂລຊີການສື່ສານ ແລະ ຂໍ້ມູນຂ່າວສານ<br />ພະແນກ Application
      </div>
      <img
        className="w-[150px] h-[150px] left-[16px] top-[10px] absolute"
        src="images/image 82job .png"
        alt={`Placeholder ${index + 1}`}
      />
      <div className="left-[182px] top-[131px] absolute text-zinc-500 text-xs font-normal font-['Noto Sans Lao'] leading-loose">
        ເປີດຮັບວັນທີ 02/11/2023 - 04/11/2023
      </div>
      <div className="w-[100px] h-5 left-[310px] top-[173px] absolute bg-indigo-900 rounded-[5px]" />
      <button onClick={openModal} className="left-[326px] top-[170px] absolute text-white text-xs font-normal font-['Noto Sans Lao'] leading-loose">
        ສົ່ງຟອມສະໝັກ
      </button>
      <MyModal isOpen={isModalOpen}
        closeModal={closeModal}
        title="Custom Modal Title"
        onSubmit={handleSubmit} />
    </div>
  ));
  return (

    
    <div className=" container mx-auto flex mt-8">
    <Formodal/>
    
    
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
