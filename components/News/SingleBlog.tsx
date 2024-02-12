import { Blog } from "@/types/blog";
import image from "next/image";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import Contentnew from "../Contentnews";


const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { news_id,news_title_la, news_image, news_content_la, author, tags, publishDate } = blog;

  const imageUrl = `${process.env.NEXT_PUBLIC_API_URL_IMAGES}/news/newsImage/${blog.news_image}`;


  return (
    <>
     <div className="group relative overflow-hidden bg-white shadow-md rounded-md hover:shadow-lg duration-300 dark:bg-dark">
  <div className="p-4 md:p-6 lg:p-8 xl:p-8 2xl:p-8">

  <h3 className="text-xl sm:text-2xl font-bold mb-2  hover:text-blue-900 line-clamp-2">
  <Link href={`/detail-news/${news_id}`}>
            
            {news_title_la}
      
        </Link>
    </h3>

    

  

    <p
  className="text-base line-clamp-2 mb-4 text-body-color dark:border-white dark:border-opacity-10"
  dangerouslySetInnerHTML={{ __html: news_content_la }}
/>


    <Image
  className="rounded-lg  aspect-square"
  src={imageUrl}
  alt="image"
  width={500}
  height={200}
  layout="responsive"
  objectFit="cover"
/>

  </div>

  {/* Optional: Add a hover overlay */}
  
  
  {/* Optional: Add a read more button or other interactive elements */}
  
</div>


    </>
  );
};

export default SingleBlog;
