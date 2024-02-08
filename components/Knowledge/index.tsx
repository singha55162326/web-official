import SectionTitle from "../Common/SectionTitle";
import ScrollAnimationWrapper from "../Scrolltofadeup";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { FaFire, FaGithub, FaNewspaper, FaMoneyBillAlt,FaSearch,FaArrowRight } from 'react-icons/fa';

const Knowledge = () => {
  return (
    <section
      id="blog"
      className="bg-white dark:bg-bg-color-dark "
    >
      <ScrollAnimationWrapper>
      <div className="container">
        <SectionTitle

          paragraph=""
          center
        />

<div className="mb-8 flex flex-col lg:flex-row justify-between p-4 lg:p-8 rounded-md">
    <div style={{ color:'#2E3192',backgroundColor:'#eaeaf4' }} className="text-2xl md:p-2 rounded-lg">
        ສາລະໜ້າຮູ້ ແລະ ຄວາມຮູ້ກ່ຽວກັບໄຟຟ້າ
    </div>
    <button className="text-black font-medium text-2xl flex items-center p-2 sm:ml-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-blue-900">
  ເບິ່ງເພີ່ມເຕີມ &nbsp;&nbsp;
  <i className="fas fa-arrow-right"></i>
</button>
</div>


        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>

      </ScrollAnimationWrapper>
  
    </section>
  );
};

export default Knowledge;
