import SectionTitle from "../Common/SectionTitle";
import ScrollAnimationWrapper from "../Scrolltofadein";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { FaFire, FaGithub, FaNewspaper, FaMoneyBillAlt,FaSearch,FaArrowRight } from 'react-icons/fa';

const Magazine = () => {
  return (
    <section
      id="blog"
      className="bg-white mb-10  "
    >
      <ScrollAnimationWrapper>
      <div className="container">
        <SectionTitle

          paragraph=""
          center
        />

          <div className="mb-8 flex justify-between">
                    <div style={{ color:'#2E3192',backgroundColor:'#eaeaf4' }} className="text-2xl p-2 rounded-lg">ວາລະສານ & Magazine</div>
                    <button className="text-black font-medium text-2xl flex items-center p-2 sm:ml-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-blue-900">
  ເບິ່ງເພີ່ມເຕີມ &nbsp;&nbsp;
  <i className="fas fa-arrow-right"></i>
</button>
                </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
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

export default Magazine;
