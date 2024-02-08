"use client"

import Link from 'next/link';
import React, { useState } from 'react'

type Props = {}

const Noticelist = (props: Props) => {

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


    const cardData = [
        {
            id: 1,
            imagePath: "/Smart meter 021.jpg",
            iconPath: "images/vector14.svg",
            title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
            description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
            date: "ລົງທະບຽນວັນທີ 23/01/2024 -29/01/2024",
            date1: "29/01/2024",
            isGreen: true,
        },
        {
            id: 2,
            imagePath: "/0074.jpg",
            iconPath: "images/vector14.svg",
            title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
            description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
            date: "ລົງທະບຽນວັນທີ 09/01/2024 - 17/01/2024",
            date1: "17/01/2024",
            isRed: true,
        },
        {
            id: 3,
            imagePath: "/107.jpg",
            iconPath: "images/vector14.svg",
            title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
            description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
            date: "ລົງທະບຽນວັນທີ 8/01/2024 - 15/02/2024",
            date1: "08/01/2024",
            isYellow: true,
        },
        {
            id: 4,
            imagePath: "/3286.jpg",
            iconPath: "images/vector14.svg",
            title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
            description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
            date: "ລົງທະບຽນວັນທີ 04/01/2024 - 17/01/2024",
            date1: "04/01/2024",
            isGreen: true,
        },
        {
            id: 5,
            imagePath: "/3080.jpg",
            iconPath: "images/vector14.svg",
            title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
            description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
            date: "ລົງທະບຽນວັນທີ 4/01/2024 - 12/01/2024",
            date1: "04/01/2024",
            isGreen: true,
        },
        {
            id: 6,
            imagePath: "/3889.jpg",
            iconPath: "images/vector14.svg",
            title: "ຫນັງສືເຊີນເຂົ້າຮ່ວມປະມູນ",
            description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
            date: "ລົງທະບຽນວັນທີ 26/12/2023 - 30/01/2024",
            date1: "26/12/2023",

            isGreen: true,
        },

        // Add more card data objects as needed
    ];
    return (
        <div className="container mx-auto p-8">
            {/* Main Content and Right Sidebar Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-2 gap-8">
                {/* Main Content */}
                <div className="col-span-2 grid grid-cols-1 gap-8">
                    {cardData.map((card) => (
                        <div key={card.id} className="bg-white  hover:shadow-xl transition duration-300 p-4 flex rounded-md shadow-md overflow-hidden">
                            {/* Card Content */}
                            <img
                                className="object-cover shadow-md rounded-md w-[300px] h-[200px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500"
                                src={card.imagePath}
                                alt="Image Alt Text"
                            />
                            <img className=' absolute ml-4' src="images/Group 228.png" />

                            <p className="text-base absolute p-3   bg-slate-100 [backdrop-filter:blur(4px)] mt-[%] text-red-600 ">{card.date}</p>

                            <p className="text-sm absolute p-2 mt-36  bg-slate-100 [backdrop-filter:blur(4px)] text-blue-800 mb-4">{card.description}</p>
                            <div className="p-4 space-y-4">

                                <h2 className='text-xl line-clamp-2 font-bold mb-4'>
                                    {card.title}
                                </h2>

                                <p className='mb-2'>
                                    ເວລາ: 09:00 ໂມງ ຫາ 16:30 ໂມງ
                                </p>

                                <span className='text-sm font-semibold block mb-4'>
                                    ສະຖານທີ່: ຫ້ອງການໄຟຟ້າລາວ, ຫ້ອງປະຊຸມໃຫຍ່ຊັ້ນ 8 ຫ້ອງ 801
                                </span>

                                <p className="text-xs  ml-1  font-semibold">
                                    <i className='fas fa-calendar'>

                                    </i>&nbsp;
                                    ເປີດປະມູນ  {card.date1}
                                </p>

                                <div className="flex items-center justify-between">
                                    <button className="flex items-center text-sm text-blue-800">

                                        <img
                                            className=" h-4 w-4"
                                            alt="icon"
                                            src="images/Vectorໄມ້ຄ້ອນ.svg"
                                        />&nbsp;
                                        ເປີດປະມູນແລ້ວ
                                    </button>

                                </div>
                                <div className="author flex items-center border border-solid rounded-full p-2 mt-2 md:ml-[60%]">



                                    <button className="font-semibold text-black mr-2 rounded-full  relative">
                                        ອ່ານລາຍລະອຽດ
                                        <img
                                            className="rounded-full absolute left-[90%] md:left-full  xl:left-full max-xl:left-full right-2 top-1/2 p-2 transform -translate-y-1/2 md:w-[34px] h-[34px]"
                                            style={{ backgroundColor: '#2E3192' }}
                                            src="/images/vector14.png"
                                            alt="Read More"
                                        />
                                    </button>



                                </div>

                            </div>
                        </div>
                    ))}
                    <div
                        className="wow flex align-bottom fadeInUp top-0 -mx-4 "
                        data-wow-delay=".15s"
                    >
                        <div className="w-full px-4">
                            <ul className="flex items-center justify-center pt-8">
                                <li className="mx-1">
                                    <a
                                        href="#0"
                                        className="flex h-9 min-w-[36px] items-center justify-center  rounded-full bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                                    >
                                        Prev
                                    </a>
                                </li>
                                <li className="mx-1">
                                    <a
                                        href="#0"
                                        className="flex h-9 min-w-[36px] items-center justify-center rounded-full bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                                    >
                                        1
                                    </a>
                                </li>
                                <li className="mx-1">
                                    <a
                                        href="#0"
                                        className="flex h-9 min-w-[36px] items-center justify-center rounded-full bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                                    >
                                        2
                                    </a>
                                </li>
                                <li className="mx-1">
                                    <a
                                        href="#0"
                                        className="flex h-9 min-w-[36px] items-center justify-center rounded-full bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                                    >
                                        3
                                    </a>
                                </li>
                                <li className="mx-1">
                                    <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-full bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                                        ...
                                    </span>
                                </li>
                                <li className="mx-1">
                                    <a
                                        href="#0"
                                        className="flex h-9 min-w-[36px] items-center justify-center rounded-full bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                                    >
                                        12
                                    </a>
                                </li>
                                <li className="mx-1">
                                    <a
                                        href="#0"
                                        className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                                    >
                                        Next
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Right Sidebar */}
                <div className="hidden md:block col-span-1">
                    {/* Search */}
                    <div className="bg-gray-200 rounded-md shadow-md p-4 mb-8">
                        <h2 className="text-lg font-bold mb-4">ຄົ້ນຫາ</h2>
                        {/* Your search input goes here */}
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                            placeholder="ຫົວຂໍ້ການປະມູນ"
                        />
                        <i>

                        </i>
                    </div>

                    {/* Category */}
                    <div className="p-4 bg-white rounded-lg shadow-md mt-4 ">
                        <h2 className="text-xl  font-extrabold mb-2">ສະຖານະການປະມູນ</h2>
                        {/* Add your category links here */}
                        <ul className=' space-y-4'>
                            <li className='flex hover:text-blue-900 font-semibold justify-between'><a href="#">ເປີດປະມູນ</a>
                                <i className={`fas fa-arrow-${isDropdownOpen1 ? 'down' : 'right'}`} onClick={toggleDropdown1}></i>
                            </li>
                            <li className='flex hover:text-blue-900 font-semibold justify-between'><a href="#">ປິດປະມູນແລ້ວ</a>
                                <i className={`fas fa-arrow-${isDropdownOpen2 ? 'down' : 'right'}`} onClick={toggleDropdown2}></i>
                            </li>
                            <li className='flex hover:text-blue-900 font-semibold justify-between'><a href="#">ລໍຖ້າເປີດປະມູນ</a>
                                <i className={`fas fa-arrow-${isDropdownOpen3 ? 'down' : 'right'}`} onClick={toggleDropdown3}></i>
                            </li>

                            {/* ... Add more categories */}
                        </ul>
                    </div>

                    {/* Popular */}
                    <div className="p-4 bg-gray-100 shadow-md rounded-lg mt-4">
                        <h2 className="text-l font-bold mb-2">ກຳລັງຈະເປີດປະມູນ</h2>
                        {/* Add your popular items links or content here */}
                        <div className="lg:flex bg-white rounded-lg overflow-hidden shadow-md p-4 bg-gray-100 mt-4">
                            {/* First Column (Image) */}
                            <div className="lg:w-1/3">
                                <img
                                    className="w-full rounded-md h-48 lg:h-full object-cover object-center mb-4 lg:mb-0"
                                    alt=""
                                    src="images/image-72@2x.png"
                                />
                            </div>

                            {/* Second Column (Text Content) */}
                            <div className="lg:w-2/3 lg:pl-4">
                                <h2 className=" text-sm font-bold mb-2">ແຈ້ງເຊີນເຂົ້າຮ່ວມປະມູນ ກວດສຸຂະພາບພະນັກງານໄຟຟ້າລາວ </h2>
                                <p className="text-gray-800 mb-2">
                                    ເວລາ: 09:00 ໂມງ ຫາ 16:30 ໂມງ


                                </p>
                                <span>

                                </span>
                                <h3 className="title font-bold mb-2  line-clamp-2">
                                    <i className='fas fa-calendar'>

                                    </i>&nbsp;
                                    ເປີດປະມູນວັນທີ 14/01/2024
                                </h3>


                                <div className="flex items-center justify-between">
                                    <button className="flex items-center text-sm text-blue-800">

                                        <img
                                            className=" h-4 w-4"
                                            alt="icon"
                                            src="images/Vectorໄມ້ຄ້ອນ.svg"
                                        />&nbsp;
                                        ເປີດປະມູນແລ້ວ
                                    </button>
                                    <button>
                                        ອ່ານລາຍລະອຽດ
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex bg-white rounded-lg overflow-hidden shadow-md p-4 bg-gray-100 mt-4">
                            {/* First Column (Image) */}
                            <div className="lg:w-1/3">
                                <img
                                    className="w-full h-48 rounded-md lg:h-full object-cover object-center mb-4 lg:mb-0"
                                    alt=""
                                    src="images/image-72@2x.png"
                                />
                            </div>

                            {/* Second Column (Text Content) */}
                            <div className="lg:w-2/3 lg:pl-4">
                                <h2 className="text-l font-bold mb-2">ແຈ້ງການມອດໄຟຟ້າ ແຂວງຈຳປາສັກ</h2>
                                <p className="text-gray-800 mb-2">
                                    ເວລາ: 09:00 ໂມງ ຫາ 16:30 ໂມງ


                                </p>
                                <span>

                                </span>
                                <h3 className="title font-bold mb-2  line-clamp-2">
                                    <i className='fas fa-calendar'>

                                    </i>&nbsp;
                                    ເປີດປະມູນວັນທີ 14/01/2024
                                </h3>


                                <div className="flex items-center justify-between">
                                    <button className="flex items-center text-sm text-blue-800">

                                        <img
                                            className=" h-4 w-4"
                                            alt="icon"
                                            src="images/Vectorໄມ້ຄ້ອນ.svg"
                                        />&nbsp;
                                        ເປີດປະມູນແລ້ວ
                                    </button>
                                    <button>
                                        ອ່ານລາຍລະອຽດ
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex bg-white rounded-lg overflow-hidden shadow-md p-4 bg-gray-100 mt-4">
                            {/* First Column (Image) */}
                            <div className="lg:w-1/3">
                                <img
                                    className="w-full h-48  rounded-md lg:h-full object-cover object-center mb-4 lg:mb-0"
                                    alt=""
                                    src="images/image-72@2x.png"
                                />
                            </div>

                            {/* Second Column (Text Content) */}
                            <div className="lg:w-2/3 lg:pl-4">
                                <h2 className="text-l font-bold mb-2">ແຈ້ງການມອດໄຟຟ້າ ແຂວງຈຳປາສັກ</h2>
                                <p className="text-gray-800 text-sm mb-2">
                                    ເວລາ: 09:00 ໂມງ ຫາ 16:30 ໂມງ


                                </p>
                                <span>

                                </span>
                                <h3 className="title text-sm font-bold mb-2  line-clamp-2">
                                    <i className='fas fa-calendar'>

                                    </i>&nbsp;
                                    ເປີດປະມູນວັນທີ 14/01/2024
                                </h3>


                                <div className="flex items-center justify-between">
                                    <button className="flex items-center text-sm text-blue-800">

                                        <img
                                            className=" h-4 w-4"
                                            alt="icon"
                                            src="images/Vectorໄມ້ຄ້ອນ.svg"
                                        />&nbsp;
                                        ເປີດປະມູນແລ້ວ
                                    </button>
                                    <button>
                                        ອ່ານລາຍລະອຽດ
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default Noticelist