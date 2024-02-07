/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { News } from "@/types/news";
import Image from 'next/image';



const NewsList  = ({ news_id, posting_date, vido_url, news_title_la,news_image, news_sub_title_la, news_content_la, news_content_eng ,newsType,
taxNews,tags
}) => {




  const [data, setData] = useState<News | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace '/your-api-endpoint' with the actual API endpoint
        const response = await api.get<News>('/news/get');
        setData(response.data?.data);
       console.log(response.data.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Use either the fetched data or the props passed to the component


  const imageUrlBase = 'http://192.168.20.76:4007/news/newsImage/';

  // Access the posts prop within the component
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 bg-white shadow-lg rounded-lg wow fadeInUp">
        <div className="post-thumbnail">
        <Image
          src={`${imageUrlBase}${news_image}`}
          width={500}
          height={200}
          layout="responsive"
          objectFit="cover"
          alt={''}
          onError={(e) => {
            console.error(`Error loading image: ${e}`);
          }}
        />
      </div>
   <div className="entry-content">
      <div className="post-meta flex font-semibold mb-4 items-center">
         <img src="/Group 141.png" alt="" className="mr-2" />
         <span className="date">
            <Link href="/blog-details">{posting_date}</Link>
         </span>
      </div>
      <h3 className="title font-bold line-clamp-2">
         <Link href="/blog-details">{news_title_la}</Link>
      </h3>
      <div className='flex flex-wrap space-x-2 pt-2'>
         <span className='mb-2 bg-gray-200 p-2 rounded'>
         {tags}
         </span>
         <span className='mb-2 bg-gray-200 p-2 rounded'>
          {tags}
         </span>
         <span className='mb-2 bg-gray-200 p-2 rounded'>
            {tags}
         </span>
      </div>
      <div className='flex pt-4'>
         <div className='flex items-center bg-gray-100 p-2 rounded'>
            <img src='images/group.svg' alt='Category Icon' className='mr-2' />
            <span>
               {newsType?.news_type_name}
            </span>
         </div>
      </div>
      <div className="author flex items-center border border-solid rounded-full p-2 mt-2 md:ml-[60%]">

      <Link href={`/detail-news/${news_id}`}>
            
      <button className="font-semibold text-black mr-2 rounded-full p-2 relative">
         ອ່ານລາຍລະອຽດ
         <img
            className="rounded-full absolute left-[90%] md:left-full  xl:left-full max-xl:left-full right-2 top-1/2 p-2 transform -translate-y-1/2 md:w-[34px] h-[34px]"
            style={{ backgroundColor: '#2E3192' }}
            src="/images/vector14.png"
            alt="Read More"
         />
      </button>
      
        </Link>
 
</div>


   
   </div>
</div>

  
  );
};

export default NewsList;