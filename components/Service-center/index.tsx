"use client"
import React, { useEffect, useState } from "react";
import Qa from "../Qa";
import api from "@/lib/api";
import { Center } from "@/types/center";
import Image from "next/image";
const Service = () => {

  const [data, setData] = useState<Center[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const imageUrlBase = 'http://192.168.20.76:4007/api_v1/center/ceneterImage/';


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<Center[]>('/center/get', {
          params: {
            order: 'id',
          },
        });

        setData(response.data?.data);
        console.log(response.data?.data)
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
    <div className="" >
      <div className="flex  justify-around">
        <h1 className="font-extrabold text-blue-900">ສູນບໍລິການ</h1>
      </div>

      <div className=" grid  container gap-2 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 max-xl:grid-col-4">
  {data.map((card) => (
    <div key={card.id} className="relative transition-transform transform hover:scale-110 h-[500px] w-[300px] mb-4">
        {card.center_image ? (
              <Image
                className="rounded-lg"
                src={`${imageUrlBase}${card.center_image}`} // Concatenate base URL with relative path
                alt={`Card ${card.center_id}`}
                width={300} // Adjust the width as needed
                height={500} // Adjust the height as needed
              />
            ) : (
              <div className="absolute inset-0 bg-gray-300"></div>
            )}
      <div className="absolute inset-x-0 bottom-0 mt-2rounded-bl-[10px] rounded-br-[10px] bg-white p-4">
        <h2 className="text-lg font-semibold">{card.center_name}</h2>
      
        <p className="mt-2 text-gray-600 flex items-center">
          <i className="fas fa-phone mr-2"></i> {card.center_tel}
        </p>
        <p className="mt-2 text-gray-600 flex items-center">
          <i className=" fas fa-building mr-2"></i> {card.province?.province_name}
        </p>
        <p className="mt-2 text-gray-600 flex items-center">
                      {card.district?.district_name}
        </p>
        <p className="mt-2 text-gray-600 flex items-center" >
          {card.village?.village_name}
          {card.village?.district_code}

        </p>
        <hr className="mt-2" />
        <p className="mt-2 text-gray-600 flex items-center">
          <i style={{ color: "red" }} className="fa-solid fa-location-dot mr-2"></i> {card.latitude}<br/>
          {card.longtitude}
        </p>
      </div>

      <div className="absolute left-[23px] top-[57.66px] h-3 w-[94px]"></div>
      <div className="absolute left-[20px] top-[76.66px] h-3 w-[164.93px]">
        <div className="absolute left-0 top-0 h-3 w-[15px]"></div>
      </div>
    </div>
  ))}
</div>


      <Qa/>






    </div>
  );
};

export default Service;
