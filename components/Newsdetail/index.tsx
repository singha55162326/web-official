/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from 'react';
import api from '@/lib/api';
import Link from 'next/link';
import NewsList from './newslist';


interface NewsData {
  // Define the data structure based on your API response
  image: string;
  date: string;
  comments: number;
  news_title_la: string;
  author: string;
  authorImage: string;
  content: string;
}




const Newsdetail = () => {

  const [newsData, setNewsData] = useState<NewsData[]>([]);


  
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setDropdownOpen4] = useState(false);


  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };

  const toggleDropdown3 = () => {
    setDropdownOpen3(!isDropdownOpen3);
  };

  const toggleDropdown4 = () => {
    setDropdownOpen4(!isDropdownOpen4);
  };


  


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Replace '/api/news' with the actual API endpoint
  //       const response = await api.get<NewsData[]>('/newsType/get');
  //       setNewsData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching news data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);



  return (
    <div className="container ">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <div className="space-y-8 pt-8">
            <NewsList

              image="images/rectangle-1031@2x.png"
              date="25 December 2022"
              comments={5}
              news_title_la="ພິທີປາຖະກະຖາເລົ່າມູນເຊື້ອວັນສ້າງຕັ້ງ 
            ຄຊປປລ ພ້ອມປະດັບຫຼຽນ 
            ຊາວໜຸ່ມຕະລຸມບອນ ..."
              author="Michael"
              authorImage="assets/images/blog/author-thumb-4.jpg"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"
            />
            <NewsList
              image="images/rectangle-1031@2x.png"
              date="25 December 2022"
              comments={5}
              news_title_la="ພິທີປາຖະກະຖາເລົ່າມູນເຊື້ອວັນສ້າງຕັ້ງ 
            ຄຊປປລ ພ້ອມປະດັບຫຼຽນ 
            ຊາວໜຸ່ມຕະລຸມບອນ ..."
              author="Michael"
              authorImage="assets/images/blog/author-thumb-4.jpg"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"
            />
            <NewsList
              image="images/rectangle-1031@2x.png"
              date="25 December 2022"
              comments={5}
              news_title_la="ພິທີປາຖະກະຖາເລົ່າມູນເຊື້ອວັນສ້າງຕັ້ງ 
            ຄຊປປລ ພ້ອມປະດັບຫຼຽນ 
            ຊາວໜຸ່ມຕະລຸມບອນ ..."
              author="Michael"
              authorImage="assets/images/blog/author-thumb-4.jpg"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"
            />
            <NewsList
              image="images/rectangle-1031@2x.png"
              date="25 December 2022"
              comments={5}
              news_title_la="ພິທີປາຖະກະຖາເລົ່າມູນເຊື້ອວັນສ້າງຕັ້ງ 
            ຄຊປປລ ພ້ອມປະດັບຫຼຽນ 
            ຊາວໜຸ່ມຕະລຸມບອນ ..."
              author="Michael"
              authorImage="assets/images/blog/author-thumb-4.jpg"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"
            />
            {/* Repeat the above structure for other blog posts */}
          </div>
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

        {/* Sidebar */}
        <div className=" col-span-4  pt-8">
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
                    placeholder="ຫົວຂໍ້ຂ່າວສານ"
                    name="search"
                    required
                  />
                  <i className="fas fa-search" />
                </div>
              </form>
            </div>




            {/* Category Widget */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 animate__animated animate__fadeInUp">
              <h4 className="text-xl font-semibold mb-4">ປະເພດຂ່າວສານ</h4>

              <div className='flex space-y-2 items-center justify-between'>


                <a href='#' className=' font-semibold hover:text-blue-900 hover:underline'>
                  ຂ່າວບັນເທິງ
                </a>
                <i className={`fas fa-arrow-${isDropdownOpen1 ? 'down' : 'right'}`} onClick={toggleDropdown1}></i>



              </div>

              <div className='flex space-y-2 items-center justify-between'>


                <a href='#' className=' font-semibold hover:text-blue-900 hover:underline'>
                  ຂ່າວກອງປະຊຸມ
                </a>
                <i className={`fas fa-arrow-${isDropdownOpen2 ? 'down' : 'right'}`} onClick={toggleDropdown2}></i>




              </div>
              <div className='flex space-y-2 items-center justify-between'>


                <a href='#' className=' font-semibold hover:text-blue-900 hover:underline'>
                  ກິດຈະກຳ
                </a>
                <i className={`fas fa-arrow-${isDropdownOpen3 ? 'down' : 'right'}`} onClick={toggleDropdown3}></i>




              </div>
              <div className='flex space-y-2 items-center justify-between'>


                <a href='#' className=' font-semibold hover:text-blue-900 hover:underline'>
                  ການເມືອງ-ການປົກຄອງ
                </a>
                <i className={`fas fa-arrow-${isDropdownOpen4 ? 'down' : 'right'}`} onClick={toggleDropdown4}></i>




              </div>



            </div>



            {/* Recent Post Widget */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 animate__animated animate__fadeInUp">
              <h4 className="text-xl font-semibold mb-4">ຂ່າວສານຍອດນິຍົມ</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <img src="images/rectangle-1031@2x.png" alt="post thumb" className="w-24 h-24 object-cover rounded-md" />
                  
                  <div className="flex-1">
                    
                    <span className="text-black flex font-bold">
                    <img src="/Group 141.png" alt="" />&nbsp;
                      <a href="#">25 Dec 2022</a>
                    </span>
                    <h6 className="text-lg font-semibold">
                      <Link href="/blog-details">ພິທີປາຖະກະຖາເລົ່າມູນເຊື້ອວັນສ້າງຕັ້ງ
                        ຄຊປປລ ພ້ອມປະດັບຫຼຽນ
                        ຊາວໜຸ່ມຕະລຸມບອນ ...</Link>
                    </h6>
                  </div>
                </li>
                <li className="flex items-center  space-y-2 space-x-4">
                  <img src="images/rectangle-1031@2x.png" alt="post thumb" className=" w-24 h-24 object-cover rounded-md" />
                  <div className="flex-1">
                  <span className="text-black flex font-bold">
                    <img src="/Group 141.png" alt="" />&nbsp;
                      <a href="#">25 Dec 2022</a>
                    </span>
                    <h6 className="text-lg line-clamp-3 font-semibold">
                      <Link href="/blog-details">ພິທີປາຖະກະຖາເລົ່າມູນເຊື້ອວັນສ້າງຕັ້ງ
                        ຄຊປປລ ພ້ອມປະດັບຫຼຽນ
                        ຊາວໜຸ່ມຕະລຸມບອນ </Link>
                    </h6>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <img src="images/rectangle-1031@2x.png" alt="post thumb" className="w-24 h-24 object-cover rounded-md" />
                  <div className="flex-1">
                  <span className="text-black flex font-bold">
                    <img src="/Group 141.png" alt="" />&nbsp;
                      <a href="#">25 Dec 2022</a>
                    </span>
                    <h6 className="text-lg font-semibold">
                      <Link href="/blog-details">ພິທີປາຖະກະຖາເລົ່າມູນເຊື້ອວັນສ້າງຕັ້ງ
                        ຄຊປປລ ພ້ອມປະດັບຫຼຽນ
                        ຊາວໜຸ່ມຕະລຸມບອນ ...</Link>
                    </h6>
                  </div>
                </li>
              </ul>
            </div>



            {/* Tag Widget */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 animate__animated animate__fadeInUp">
              <h4 className="text-xl font-semibold mb-4">News Tags</h4>
              <div className="space-y-2">
                <a href="#" className="inline-block px-3 py-1 text-blue-900 bg-gray-100 rounded-full">news</a>
                <a href="#" className="inline-block px-3 py-1 text-blue-900 bg-gray-100 rounded-full">government</a>
                <a href="#" className="inline-block px-3 py-1 text-blue-900 bg-gray-100 rounded-full">activity</a>
                <a href="#" className="inline-block px-3 py-1 text-blue-900 bg-gray-100 rounded-full">meeting</a>
                <a href="#" className="inline-block px-3 py-1 text-blue-900 bg-gray-100 rounded-full">policy</a>
                <a href="#" className="inline-block px-3 py-1 text-blue-900 bg-gray-100 rounded-full">envirovement</a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Newsdetail;
