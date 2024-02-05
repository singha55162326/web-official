"use client";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
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
 <div className="wow fadeInUp group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark" data-wow-delay=".1s">

<Link href="/magazine-detail" className="relative block w-full">
  <Image src={image} alt="image" width={419} height={517} />
</Link>

<a href="#" className="absolute bottom-0 mb-6 ml-2 block max-w-[400px] h-[130px] bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-6">
  {/* Horizontal Line */}
  <hr style={{ borderBlockColor:'#2E3192' }} className="w-full border-t-2 border-2E3192 mb-4" />

  {/* Circle on the right */}


  {/* Content */}
  <h5 className="mb-2 mr-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
</a>

</div>





    </>
  );
};

export default SingleBlog;
