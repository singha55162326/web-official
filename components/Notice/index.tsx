"use client";
import type { NextPage } from "next";
import { useCallback,useEffect,useState } from "react";
import api from "@/lib/api";
import Noticelist from "./noticelist";

const Notice: NextPage = () => {

    // const [cardData, setCardData] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await api.get('api/news');
    //         setCardData(response.data);
    //         setLoading(false);
    //         console.log(response.data);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //         setLoading(false);
    //       }
    //     };


    //     fetchData();
    //   }, );




    // if (loading) {
    //   return <p>Loading...</p>;
    // }





  const getTextColor = (card) => {
    if (card.isGreen) {
      return "#29B851";
    } else if (card.isRed) {
      return "red";
    } else if (card.isYellow) {
      return "#F7921E";
    } else {
      return "black"; // Default color if none of the conditions match
    }
  };

  const getTextDescription = (card) => {
    if (card.isGreen) {
      return "ເປີດປະມູນແລ້ວ";
    } else if (card.isRed) {
      return "ປິດປະມູນແລ້ວ";
    } else if (card.isYellow) {
      return "ລໍຖ້າການປະມູນ";
    } else {
      return ""; // Default description if none of the conditions match
    }
  };
  const getIconColor = (card) => {
    if (card.isRed) {
      return "red";
    } else if (card.isYellow) {
      return "#F7921E";
    } else {
      return "black"; // Default color if none of the conditions match
    }
  };

  const isRed = true;
  const isYellow = true;
  const isGreen = true;

  const cardData = [
    {
      id: 1,
      imagePath: "images/image-72@2x.png",
      iconPath: "images/vector14.svg",
      title: "ແຈ້ງການປະມູນ",
      description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
      date: "ລົງທະບຽນວັນທີ 6/11/2023 - 10/01/2024",
      isGreen: true,
    },
    {
      id: 2,
      imagePath: "images/image-72@2x.png",
      iconPath: "images/vector14.svg",
      title: "ແຈ້ງການປະມູນ",
      description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
      date: "ລົງທະບຽນວັນທີ 6/11/2023 - 10/01/2024",
      isRed: true,
    },
    {
      id: 3,
      imagePath: "images/image-72@2x.png",
      iconPath: "images/vector14.svg",
      title: "ແຈ້ງການປະມູນ",
      description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
      date: "ລົງທະບຽນວັນທີ 6/11/2023 - 10/01/2024",
      isYellow: true,
    },
    {
      id: 4,
      imagePath: "images/image-72@2x.png",
      iconPath: "images/vector14.svg",
      title: "ແຈ້ງການປະມູນ",
      description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
      date: "ລົງທະບຽນວັນທີ 6/11/2023 - 10/01/2024",
      isGreen: true,
    },
    {
      id: 5,
      imagePath: "images/image-72@2x.png",
      iconPath: "images/vector14.svg",
      title: "ແຈ້ງການປະມູນ",
      description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
      date: "ລົງທະບຽນວັນທີ 6/11/2023 - 10/01/2024",
      isGreen: true,
    },
    {
      id: 6,
      imagePath: "images/image-72@2x.png",
      iconPath: "images/vector14.svg",
      title: "ແຈ້ງການປະມູນ",
      description: "ລາຍລະອຽດການປະມູນຕ່າງໆແມ່ນອີງຕາມເອກະສານ ລຸ່ມນີ້",
      date: "ລົງທະບຽນວັນທີ 6/11/2023 - 10/01/2024",
      isGreen: true,
    },

    // Add more card data objects as needed
  ];

  return (
    
      <div className="container mx">

        <Noticelist/>

      </div>
    

  );
};

export default Notice;
