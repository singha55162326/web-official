'use client';

import { useCallback, useState } from "react";

const Contentknowledgedetail = () => {

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

  const isRed = true;
  const isYellow = true;
  const isGreen = true;

  const cardData = [
    {
      id: 1,
      imagePath: "/know2.jpg",
      iconPath: "images/vector14.svg",
      title: "ສາເຫດໄຟຟ້າລັດວົງຈອນ",
    category:"ສາລະໜ້າຮູ້ ", 
      description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
      date: "ລົງວັນທີ 16 ມິຖຸນາ 2023",
      isGreen: true,


    },
    {
      id: 2,
      imagePath: "/know1 (1).jpg",
      iconPath: "images/vector14.svg",
      title: "ວິທີປະຢັດໄຟຟ້າ ຕອນຫ້ອງນອນ",
      category:"ສາລະໜ້າຮູ້ ", 
      description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
      date: "ລົງວັນທີ 16 ມິຖຸນາ 2023",
      isRed: true,
    },
    {
      id: 3,
      imagePath: "/images/image-38@2x.png",
      iconPath: "images/vector14.svg",
      title: "November 15, 2022 Smashing Podcast Episode See With Paul Billion Dollar Idea",
      description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
      date: "ລົງວັນທີ 16 ມິຖຸນາ 2023",
      isYellow: true,


    },
    {
      id: 4,
      imagePath: "/images/image-38@2x.png",
      iconPath: "images/vector14.svg",
      title: "November 15, 2022 Smashing Podcast Episode See With Paul Billion Dollar Idea",
      description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
      date: "ລົງວັນທີ 16 ມິຖຸນາ 2023",
      isGreen: true,


    },
    {
      id: 5,
      imagePath: "/images/image-38@2x.png",
      iconPath: "images/vector14.svg",
      title: "November 15, 2022 Smashing Podcast Episode See With Paul Billion Dollar Idea",
      description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
      date: "ລົງວັນທີ 16 ມິຖຸນາ 2023",
      isGreen: true,


    },
    {
      id: 6,
      imagePath: "/images/image-38@2x.png",
      iconPath: "images/vector14.svg",
      title: "November 15, 2022 Smashing Podcast Episode See With Paul Billion Dollar Idea",
      description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
      date: "ລົງວັນທີ 16 ມິຖຸນາ 2023",
      isGreen: true,


    },



    // Add more card data objects as needed
  ];

  return (
    <div className="container mx-auto mt-10 flex flex-col lg:flex-row">
      <div className="lg:w-3/4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
  {cardData.map((card) => (
    <div key={card.id} className="rounded-md flex overflow-hidden shadow-lg mb-8">
      <img
        className="h-48 rounded-lg w-auto p-2 object-cover"
        src={card.imagePath}
        alt="Image Alt Text"
      />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">{card.title}</h1>
        <div className="flex items-center mb-4">
          <img
            className="text-zinc-50"
            alt=""
            src="images/Group.svg"
          />&nbsp;
          <span style={{ color: '#7F7F7F' }} className="text-sm">
            {card.category}
          </span>
        </div>
        <p className="text-gray-600">{card.description}</p>
        <p className="text-gray-600 mt-2">
          <img
            className="inline-block mr-2 w-4 h-4"
            alt=""
            src="images/vector6.svg"
          />
          <span>{card.date}</span>
        </p>
        <button className="mt-4 py-2 px-4 border text-black rounded-lg hover:bg-blue-900 hover:text-white transition duration-300">
          ອ່ານລາຍລະອຽດ
        </button>
      </div>
    </div>
  ))}
</div>

      </div>

      <div className="lg:w-1/4 lg:ml-8">
        {/* Right Sidebar Content */}
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
                  placeholder="ຄົ້ນຫາຫົວຂໍ້ສາລະຄວາມຮູ້"
                  name="search"
                  required
                />
                <i className="fas fa-search" />
              </div>
            </form>
          </div>




         {/* Category Widget */}
    <div className="bg-white p-6 rounded-lg shadow-md mb-8 animate__animated animate__fadeInUp">
      <h4 className="text-xl font-semibold mb-4">ປະເພດຄວາມຮູ້</h4>

      {/* Dropdown items */}
      <div className="flex flex-col space-y-2">
      <div className="flex items-center justify-between">
        <a href="#" className="font-semibold hover:text-blue-900 hover:underline">
          ທັງຫມົດ
        </a>
        <i className={`fas fa-arrow-${isDropdownOpen1 ? 'down' : 'right'}`} onClick={toggleDropdown1}></i>
        
      </div>
      <div className="flex items-center justify-between">
        <a href="#" className="font-semibold hover:text-blue-900 hover:underline">
          ຄວາມຮູ້ກ່ຽວກັບໄຟຟ້າ
        </a>
        <i className={`fas fa-arrow-${isDropdownOpen2 ? 'down' : 'right'}`} onClick={toggleDropdown2}></i>
      </div>
      <div className="flex items-center justify-between">
        <a href="#" className="font-semibold hover:text-blue-900 hover:underline">
          ສາລະໜ້າຮູ້
        </a>
        <i className={`fas fa-arrow-${isDropdownOpen3 ? 'down' : 'right'}`} onClick={toggleDropdown3}></i>
      </div>

      {/* Display additional items when the dropdown is open */}
      {/* {isDropdownOpen1 && (
        <div className="flex items-center justify-between">
          <a href="#" className="font-semibold hover:text-blue-900 hover:underline">
            ຄວາມຮູ້ກ່ຽວກັບໄຟຟ້າ
          </a>
        </div>
      )} */}

      {/* Add more items and toggle logic as needed */}
    </div>
    </div>


          {/* Recent Post Widget */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 animate__animated animate__fadeInUp">
            <h4 className="text-xl font-semibold mb-4">ວິດີໂອ</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <img src="images/rectangle-1031@2x.png" alt="post thumb" className="w-24 h-24 object-cover rounded-md" />
                <div className="flex-1">


                  <h6 className=" text-sm line-clamp-1 font-semibold">
                    ຄວາມຮູ້ໄຟຟ້າລາວເພື່ອການພັດທະນາ
                  </h6>
                  <p className=" text-xs">
                    ຊ່ອງ: EDL Laos
                    View: 22.5K ຄັ້ງ
                    #ພະລັງງານ #ລັດວິສາຫະກິດໄຟຟ້າ #ຄວາມຮູ້
                  </p>
                  <div className="flex items-center ">
                    <i className="fas fa-calendar">

                    </i>&nbsp;
                    <span className=" text-xs">
                      ລົງວັນທີ 16 ມີຖຸນາ 2023
                    </span>

                  </div>
                  <button className="mt-4  py-2 px-4 border  text-black rounded-lg hover:bg-blue-900 hover:text-white transition duration-300">
                    ອ່ານລາຍລະອຽດ
                  </button>
                </div>
              </li>
              <li className="flex items-center  space-y-2 space-x-4">
                <img src="images/rectangle-1031@2x.png" alt="post thumb" className=" w-24 h-24 object-cover rounded-md" />
                <div className="flex-1">


                  <h6 className=" text-sm line-clamp-1 font-semibold">
                    ຄວາມຮູ້ໄຟຟ້າລາວເພື່ອການພັດທະນາ
                  </h6>
                  <p className=" text-xs">
                    ຊ່ອງ: EDL Laos
                    View: 22.5K ຄັ້ງ
                    #ພະລັງງານ #ລັດວິສາຫະກິດໄຟຟ້າ #ຄວາມຮູ້
                  </p>
                  <div className="flex items-center ">
                    <i className="fas fa-calendar">

                    </i>&nbsp;
                    <span className=" text-xs">
                      ລົງວັນທີ 16 ມີຖຸນາ 2023
                    </span>

                  </div>
                  <button className="mt-4  py-2 px-4 border  text-black rounded-lg hover:bg-blue-900 hover:text-white transition duration-300">
                    ອ່ານລາຍລະອຽດ
                  </button>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <img src="images/rectangle-1031@2x.png" alt="post thumb" className="w-24 h-24 object-cover rounded-md" />
                <div className="flex-1">


                  <h6 className=" text-sm line-clamp-1 font-semibold">
                    ຄວາມຮູ້ໄຟຟ້າລາວເພື່ອການພັດທະນາ
                  </h6>
                  <p className=" text-xs">
                    ຊ່ອງ: EDL Laos
                    View: 22.5K ຄັ້ງ
                    #ພະລັງງານ #ລັດວິສາຫະກິດໄຟຟ້າ #ຄວາມຮູ້
                  </p>
                  <div className="flex items-center ">
                    <i className="fas fa-calendar">

                    </i>&nbsp;
                    <span className=" text-xs">
                      ລົງວັນທີ 16 ມີຖຸນາ 2023
                    </span>

                  </div>
                  <button className="mt-4  py-2 px-4 border  text-black rounded-lg hover:bg-blue-900 hover:text-white transition duration-300">
                    ອ່ານລາຍລະອຽດ
                  </button>
                </div>
              </li>
            </ul>
          </div>



          {/* Tag Widget */}


        </div>
      </div>
    </div>

  );
};

export default Contentknowledgedetail;
