"use client"
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { FaFire, FaGithub, FaNewspaper, FaMoneyBillAlt, FaSearch, FaArrowRight } from 'react-icons/fa';
import api from "@/lib/api";
import ScrollAnimationWrapper from "../Scrolltofadein";
import { Blog } from "@/types/blog";




const News = () => {

  const [data, setData] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<Blog[]>('/news/get', {
          params: {
            order: 'news_id',
          },
        });

        setData(response.data?.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // Set loading to false once the request is complete
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  return (
    <section id="blog" className="bg-white dark:bg-bg-color-dark">
      <ScrollAnimationWrapper>
      <div className="container mb-10">
      <SectionTitle paragraph="" center title={""} />

      <div className="mb-8 sm:flex sm:justify-between p-4 rounded-md">
        <div style={{ color: '#2E3192', backgroundColor: '#eaeaf4' }} className="text-2xl md:p-2 rounded-lg font-medium sm:p-0">
          ຂ່າວສານ ແລະ ປະຊາສຳພັນ
        </div>
        <button className="text-black font-medium text-2xl flex items-center p-2 sm:ml-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-primary">
          ເບິ່ງເພີ່ມເຕີມ &nbsp;&nbsp;
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {data.slice(0,3).map((blog) => (
            <div key={blog.news_id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      )}
    </div>

      </ScrollAnimationWrapper>
  
  </section>
  );
};

export default News;
