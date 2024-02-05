import { Blog } from "@/types/blog";
import image from "next/image";
import Image from "next/image";
import Link from "next/link";


const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { news_title_la, news_image, news_content_la, author, tags, publishDate } = blog;

  const imageUrl = `${process.env.NEXT_PUBLIC_API_URL_IMAGES}/news/newsImage/${blog.news_image}`;


  return (
    <>
     <div className="group relative overflow-hidden bg-white shadow-md rounded-md hover:shadow-lg duration-300 dark:bg-dark">
  <div className="p-4 md:p-6 lg:p-8 xl:p-8 2xl:p-8">
    <h3 className="text-xl sm:text-2xl font-bold mb-2 line-clamp-2">
      <Link href="/detail-news" className="block text-black dark:text-white hover:text-blue-900 dark:hover:text-blue-">
        {news_title_la}
      </Link>
    </h3>

    <p className="text-base line-clamp-3 mb-4 text-body-color dark:border-white dark:border-opacity-10">
      {news_content_la}
    </p>

    <Link href="/detail-news" className="relative block aspect-w-37 aspect-h-22 w-full h-auto">
      <Image className="rounded-lg" src={imageUrl} alt="image" width={500} height={500} />
    </Link>
  </div>

  {/* Optional: Add a hover overlay */}
  
  
  {/* Optional: Add a read more button or other interactive elements */}
  
</div>


    </>
  );
};

export default SingleBlog;
