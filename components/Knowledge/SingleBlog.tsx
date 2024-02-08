"use client";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';

const SingleBlog = ({ blog }: { blog: Blog }) => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
      const today = new Date();
      const monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];

      const day = today.getDate();
      const month = monthNames[today.getMonth()];
      const year = today.getFullYear();

      const formattedDate = `${month} ${day}, ${year}`;
      setCurrentDate(formattedDate);
    }, []);
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
    <div
        className="wow w-full fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-md bg-white shadow-one duration-300 dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link
          href="/knowledge-detail"
          className="relative block aspect-[37/22] w-full"
        >
        <span style={{ backgroundColor:'#E94D3B',transform: 'skewY(-5deg)' }} className="absolute ml-14 bottom-2 z-20 inline-flex items-center justify-center px-4 py-2 text-sm font-bold capitalize text-white ">
  {tags[0]}
</span>

          <Image className="p-4 rounded-lg" src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
            <i style={{ color:"#484848" }} className="fas fa-calendar"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <a>{currentDate}</a>
          <h3>
            <Link
              href="/knowledge-detail"
              className="mb-4 block text-xl  font-extrabold text-black hover:text-blue-900 dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <button className="ml-2 border px-2 py-2 border-gray-200 rounded-full flex items-center">
        <p className=" ml-2 text-xl">
            ອ່ານຕື່ມ
        </p>
  <img src="/images/i.far.png" alt="Icon" className="w-10 rounded-md h-8 ml-4" />

</button>

        </div>
      </div>
    </>
  );
};

export default SingleBlog;
