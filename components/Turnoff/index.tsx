/* eslint-disable @next/next/no-img-element */
"use client"
import Link from 'next/link';
import React, { useState,useEffect} from 'react'
import api from '@/lib/api';
import { Turnoff } from '@/types/turnoff';

const Turnoff = () => {

  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);

  const [data, setData] = useState<Turnoff[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<Turnoff[]>('customer-svc/notiDistrict/get', {
          params: {
            order: 'news_id',
          },
        });

        setData(response.data?.data);
        console.log(response.data.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Set loading to false once the request is complete
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };

  const formatDate = (dateString) => {
    if (!dateString) return ''; // Handle the case when the date string is not available
  
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split('T')[0]; // Extract YYYY-MM-DD from ISO string
    return formattedDate;
  };

  const toggleDropdown3 = () => {
    setDropdownOpen3(!isDropdownOpen3);
  };

  return (
    <div className="container mx-auto p-10">
      <div className=" grid grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="col-span-2 space-y-6">
          {/* ... Your existing content */}

          {/* ... Your existing content */}
          {data.map((item) => (
          <div key={item.noti_detail_id} className="lg:flex bg-white rounded-lg overflow-hidden p-4 shadow-lg hover:shadow-xl transition duration-300">
            <div className="lg:w-2/2">
              <img
                className="w-full h-auto lg:h-full object-cover object-center"
                alt=""
                src="images/image-151@2x.png"  // Replace with the actual property from your API response
              />
            </div>
            <div className="lg:w-1/2 p-6">
              <h2 className="font-bold text-xl mb-4">
                {item.noti?.title_head}
              </h2>
              <p className="text-gray-800 mb-2">
                ມອດໄຟເວລາ: {item.noti?.start_time}ໂມງ ຫາ {item.noti?.end_time} ໂມງ
              </p>
              <h3 className="title font-bold mb-2 line-clamp-2">
              {item.noti?.sub_title}  {/* Replace with the actual property from your API response */}
              </h3>
            

              <div className="flex mt-4 items-center">
                <img
                  className="mr-2"
                  src="images/disconnected@2x.png"
                  alt="Icon"
                  width={20}
                  height={20}
                />
                <div className="text-sm text-red-500">
                ວັນທີມອດໄຟ {formatDate(item.noti?.start_date)} ຫາ {formatDate(item.noti?.end_date)}
                </div>
              </div>

              <div className="author flex  ml-[0%]   rounded-full p-2 mt-12 ">
                <Link href="/comingsoon">
                  <button className="font-semibold text-black  rounded-full p-2 relative">
                    ອ່ານລາຍລະອຽດ
                    <img
                      className="rounded-full absolute left-[90%] md:left-full -left-2 top-1/2 p-2 transform -translate-y-1/2 md:w-[34px] h-[34px] border border-solid border-white"
                      style={{ backgroundColor: '#2E3192' }}
                      src="/images/vector14.png"
                      alt="Read More"
                    />
                  </button>
                </Link>
              </div>
              {/* ... Rest of your content */}
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
        <div className="col-span-1">
          {/* Search Bar */}
          <div className="p-4 bg-gray-200 rounded-lg">
            <h1 className='font-bold'>
              ຄົ້ນຫາ
            </h1>
            <input
              type="text"
              placeholder="ຫົວຂໍ້ແຈ້ງການມອດໄຟ"
              className="w-full p-2 border border-gray-300 rounded"
            />

          </div>


          {/* Categories */}
          <div className="p-4 bg-white rounded-lg shadow-md mt-4 ">
            <h2 className="text-xl  font-extrabold mb-2">ເລືອກສະຖານທີ</h2>
            {/* Add your category links here */}
            <ul className=' space-y-4'>
              <li className='flex hover:text-blue-900 font-semibold justify-between'><a href="#">ເລືອກແຂວງ</a>
              <i className={`fas fa-arrow-${isDropdownOpen1 ? 'down' : 'right'}`} onClick={toggleDropdown1}></i>
              </li>
              <li className='flex hover:text-blue-900 font-semibold justify-between'><a href="#">ເລືອກເມືອງ</a>
              <i className={`fas fa-arrow-${isDropdownOpen2 ? 'down' : 'right'}`} onClick={toggleDropdown2}></i>
              </li>
              <li className='flex hover:text-blue-900 font-semibold justify-between'><a href="#">ເລືອກບ້ານ</a>
              <i className={`fas fa-arrow-${isDropdownOpen3 ? 'down' : 'right'}`} onClick={toggleDropdown3}></i>
              </li>

              {/* ... Add more categories */}
            </ul>
          </div>

          {/* Popular Items */}
          <div className="p-4 bg-gray-100 shadow-md rounded-lg mt-4">
            <h2 className="text-l font-bold mb-2">ແຈ້ງການມອດໄຟດ່ວນ!!!</h2>
            {/* Add your popular items links or content here */}
            <div className="lg:flex  rounded-lg overflow-hidden shadow-md p-4 bg-gray-100 mt-4">
              {/* First Column (Image) */}
              <div className="lg:w-1/3">
                <img
                  className="w-full roun h-48 lg:h-full object-cover object-center mb-4 lg:mb-0"
                  alt=""
                  src="images/image-151@2x.png"
                />
              </div>

              {/* Second Column (Text Content) */}
              <div className="lg:w-2/3 lg:pl-4">
                <h2 className="text-l font-bold mb-2">ແຈ້ງການມອດໄຟຟ້າ ແຂວງຈຳປາສັກ</h2>
                <p className="text-gray-800 mb-2">
                  ມອດໄຟເວລາ: 09:00ໂມງ ຫາ 12:00 ໂມງ
                </p>
                <span>

                </span>
                <h3 className="title font-bold mb-2  line-clamp-2">
                  ເມືອງ: ນະຄອນປາກເຊ
                </h3>

                <span className=''>
                  ບ້ານ: ໂຊກອຳນວຍ, ສ້າງທ່ຽງ, ນາແທກ
                </span>
                <div className="flex mt-4 items-center">
                  <img
                    className="mr-2"
                    src="images/disconnected@2x.png"
                    alt="Icon"
                    width={20}
                    height={20}
                  />
                  <div className="text-sm text-red-500">
                    ວັນທີມອດໄຟ 16 ມີຖຸນາ 2023
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex bg-white rounded-lg overflow-hidden shadow-md p-4 bg-gray-100 mt-4">
              {/* First Column (Image) */}
              <div className="lg:w-1/3">
                <img
                  className="w-full h-48 rounded-md lg:h-full object-cover object-center mb-4 lg:mb-0"
                  alt=""
                  src="images/image-151@2x.png"
                />
              </div>

              {/* Second Column (Text Content) */}
              <div className="lg:w-2/3 lg:pl-4">
                <h2 className="text-l font-bold mb-2">ແຈ້ງການມອດໄຟຟ້າ ແຂວງຈຳປາສັກ</h2>
                <p className="text-gray-800 mb-2">
                  ມອດໄຟເວລາ: 09:00ໂມງ ຫາ 12:00 ໂມງ
                </p>
                <span>

                </span>
                <h3 className="title font-bold mb-2  line-clamp-2">
                  ເມືອງ: ນະຄອນປາກເຊ
                </h3>

                <span className=''>
                  ບ້ານ: ໂຊກອຳນວຍ, ສ້າງທ່ຽງ, ນາແທກ
                </span>
                <div className="flex mt-4 items-center">
                  <img
                    className="mr-2"
                    src="images/disconnected@2x.png"
                    alt="Icon"
                    width={20}
                    height={20}
                  />
                  <div className="text-sm text-red-500">
                    ວັນທີມອດໄຟ 16 ມີຖຸນາ 2023
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex bg-white rounded-lg overflow-hidden shadow-md p-4 bg-gray-100 mt-4">
              {/* First Column (Image) */}
              <div className="lg:w-1/3">
                <img
                  className="w-full h-48  rounded-md lg:h-full object-cover object-center mb-4 lg:mb-0"
                  alt=""
                  src="images/image-151@2x.png"
                />
              </div>

              {/* Second Column (Text Content) */}
              <div className="lg:w-2/3 lg:pl-4">
                <h2 className="text-l font-bold mb-2">ແຈ້ງການມອດໄຟຟ້າ ແຂວງຈຳປາສັກ</h2>
                <p className="text-gray-800 text-sm mb-2">
                  ມອດໄຟເວລາ: 09:00ໂມງ ຫາ 12:00 ໂມງ
                </p>
                <span>

                </span>
                <h3 className="title text-sm font-bold mb-2  line-clamp-2">
                  ເມືອງ: ນະຄອນປາກເຊ
                </h3>

                <span className='text-sm'>
                  ບ້ານ: ໂຊກອຳນວຍ, ສ້າງທ່ຽງ, ນາແທກ
                </span>
                <div className="flex mt-4 items-center">
                  <img
                    className="mr-2"
                    src="images/disconnected@2x.png"
                    alt="Icon"
                    width={20}
                    height={20}
                  />
                  <div className="text-sm text-red-500">
                    ວັນທີມອດໄຟ 16 ມີຖຸນາ 2023
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

    </div>



  )
}

export default Turnoff;
