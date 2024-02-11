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
 <div className="group relative overflow-hidden rounded-sm bg-white shadow-md duration-300 hover:shadow-lg dark:bg-dark dark:hover:shadow-gray-dark transition-transform transform-gpu hover:scale-105">
  <Link href="/magazine-detail">
    <div className="relative block w-full overflow-hidden">
      <Image className="aspect-square rounded-md object-cover" src={image} alt="image" width={500} height={200} />
    </div>
  </Link>

  <div className="absolute bottom-0 mb-6 ml-2 w-full max-w-[400px] sm:max-w-full h-auto bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-6 transition-all duration-300 ease-in-out">
    {/* Horizontal Line */}
    <hr className="w-full border-t-2 border-blue-500 mb-4" />

    {/* Content */}
    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
  </div>
</div>







    </>
  );
};

export default SingleBlog;
