import { Feature } from "@/types/feature";
import Link from 'next/link';

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full px-5 py-2 transition duration-300 ease-in-out transform hover:scale-105">
    <div className="wow fadeInUp flex items-center">
      <Link href="/contact">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white bg-opacity-20 text-primary cursor-pointer">
          {icon}
        </div>
      </Link>
  
      <div className="ml-4">
        <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  </div>
  
  );
};

export default SingleFeature;
