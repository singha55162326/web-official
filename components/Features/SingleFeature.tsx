import { Feature } from "@/types/feature";
import Link from 'next/link';

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full px-5  py-2">
     <div className="wow fadeInUp" data-wow-delay=".15s" style={{ display: 'flex', alignItems: 'center' }}>
        <Link href="/contact">
        <div className=" mb-24 flex h-[80px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-10 text-primary">
    {icon}
  </div>
             </Link>

  <div style={{ marginLeft: '10px' }}>
    <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
      {title}
    </h3>
    <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
      {paragraph}
    </p>
  </div>
</div>

    </div>
  );
};

export default SingleFeature;
