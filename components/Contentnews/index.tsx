"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SharePost from "@/components/Price/SharePost";
import TagButton from "@/components/Price/TagButton";

import api from "@/lib/api";
import { usePathname } from "next/navigation";
import SharePost1 from "./SharePost";

const Contentnew = () => {

  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname()
  const newsId = Number(pathname.replace('/detail-news/', ''));

  const imageUrlBase = 'https://uat-api.edl.com.la/api_v1/customer-svc/news/newsImage/';


  console.log({ newsId })

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await api.get(`customer-svc/news/getById?news_id=${newsId}`);
        setPostData(response.data.data);
        console.log(response.data?.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataById();
  }, [newsId]);

  if (loading) {
    return <p>Loading...</p>; // You can add a loading indicator here
  }

  if (!postData) {
    return <p>Error loading post data.</p>; // Handle error loading data
  }

  return (
    <div>
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-full">
            <div>
              <img
                className="flex   h-full w-full "
                src={`${imageUrlBase}${postData.news_image}`}
              />

              <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                <div className="flex flex-wrap items-center">
                  <div className="mb-5 mr-10 flex items-center"></div>
                  <div className="mb-5 flex items-center">
                    <p className="mr-3 flex items-center pt-2 text-base font-medium text-black">
                      <span className="mr-3">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          className="fill-current"
                        >
                          <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                          <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                          <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                          <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                          <path d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z" />
                          <path d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z" />
                          <path d="M8.93828 11.1606H8.14963C8.00624 11.1606 7.91064 11.2562 7.91064 11.3996V12.1644C7.91064 12.3078 8.00624 12.4034 8.14963 12.4034H8.93828C9.08167 12.4034 9.17727 12.3078 9.17727 12.1644V11.3996C9.17727 11.2562 9.08167 11.1606 8.93828 11.1606Z" />
                          <path d="M11.4715 11.1606H10.6828C10.5394 11.1606 10.4438 11.2562 10.4438 11.3996V12.1644C10.4438 12.3078 10.5394 12.4034 10.6828 12.4034H11.4715C11.6149 12.4034 11.7105 12.3078 11.7105 12.1644V11.3996C11.7105 11.2562 11.591 11.1606 11.4715 11.1606Z" />
                          <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                        </svg>
                      </span>
                      12 Jan 2024
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="mb-10  text-3xl font-bold leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  {postData.news_title_la}
                </p>

                <p
                  className="mb-10 pt-10 text-base font-normal leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: postData.news_content_eng }}
                ></p>
                <div className="flex  space-x-6">
                  <img
                    className="h-[400px] w-[900px] shadow"
                    src={`${imageUrlBase}${postData.news_image}`}
                  />
                  <img
                    className="h-[400px] w-[900px] shadow"
                    src={`${imageUrlBase}${postData.news_image}`}
                  />
                </div>
                <div className="mt-4 flex  space-x-6">
                  <img
                    className="h-[400px] w-[900px] shadow"
                    src={`${imageUrlBase}${postData.news_image}`}
                  />
                  <img
                    className="h-[400px] w-[900px] shadow"
                    src={`${imageUrlBase}${postData.news_image}`}
                  />
                </div>

                <p
                  className="mb-10 pt-10 text-base font-normal leading-relaxed text-black sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: postData.news_content_la }}
                ></p>



                <div className="flex space-x-6 border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <img
                    className="h-[400px] w-[900px] shadow"
                    src={`${imageUrlBase}${postData.news_image}`}
                  />
                  <img
                    className="h-[400px] w-[900px] shadow"
                    src={`${imageUrlBase}${postData.news_image}`}
                  />
                </div>

                <div className="container ">
                  <div className="flex justify-between ">
                    {/* Left Column */}
                    <div className="font-['Noto Sans Lao'] text-[28px] font-bold leading-[57.60px] text-black">
                      ຂ່າວສານທີ່ກ່ຽວຂ້ອງ
                    </div>

                    {/* Right Column */}

                    <div className="m flex items-center ">
                      <button className=" font-['Lao Sans Pro'] top-0 cursor-pointer  text-center text-2xl font-bold leading-[19px] text-black transition-all duration-300 hover:translate-x-[2px]">
                        ທັງໝົດ
                      </button>
                      <i className="fas fa-arrow-right ml-2"></i>
                    </div>
                  </div>
                </div>
                <div className="container mx-auto  border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10 ">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="animate-fade-in rounded-lg bg-white p-6 shadow-md md:p-8 lg:p-10">
                      <h1 className="mb-4 line-clamp-2 text-2xl font-bold md:text-2xl lg:text-2xl">
                        {postData.news_title_la}
                      </h1>
                      <p className="mb-4 line-clamp-2 text-gray-600">
                       {postData.news_content_la}
                      </p>
                      <img
                        className="h-auto w-full md:pt-4 lg:pt-4"
                        src="/image 15.png"
                        alt="Illustration"
                      />
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow-md md:p-8 lg:p-10">
                      <h1 className="mb-4 line-clamp-2 text-2xl font-bold md:text-3xl lg:text-2xl">
                        ພິທີປາຖະກະຖາເລົ່າມູນເຊື້ອວັນສ້າງ
                      </h1>
                      <p className="mb-4 line-clamp-2 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Sed cursus ante
                        dapibus diam.
                      </p>
                      <img
                        className="h-auto  w-full md:pt-4 lg:pt-4"
                        src="/image 15.png"
                        alt="Illustration"
                      />
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow-md md:p-8 lg:p-10">
                      <h1 className="mb-4 line-clamp-2 text-2xl font-bold md:text-3xl lg:text-2xl">
                        ພິທີປາຖະກະຖາເລົ່າມູນເຊື້ອວັນສ້າງ
                      </h1>
                      <p className="mb-4 line-clamp-2 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Sed cursus ante
                        dapibus diam.
                      </p>
                      <img
                        className="h-auto  w-full md:pt-4 lg:pt-4"
                        src="/image 15.png"
                        alt="Illustration"
                      />
                    </div>
                  </div>
                </div>

                <div className="items-center justify-between sm:flex md:pt-12 lg:pt-12">
                  <div className="mb-5">
                    <h5 className="mb-3 text-2xl font-semibold text-black sm:text-right">
                      Share this post :
                    </h5>
                    <div className="flex items-center sm:justify-end">
                     <SharePost1/>
                    </div>
                  </div>
                  <div className="mb-5">
                    <h4 className="mb-3 text-2xl  font-semibold text-black">
                      Tags ທີ່ກ່ຽວຂ້ອງ :
                    </h4>
                    <div className="flex flex-wrap items-center">
                    <a
      
      className="bg-white shadow-md mb-3 mr-3 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm text-black duration-300 hover:bg-primary hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-primary"
    >
      {postData.tags}
    </a>
                   
                      <TagButton text="government" />
                      <TagButton text="activity" />
                      <TagButton text="meeting" />
                      <TagButton text="environment" />
                      <TagButton text="policy" />
                      <TagButton text="meeting" />
                      <TagButton text="environment" />
                      <TagButton text="government" />
                      <TagButton text="Activity" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contentnew;
