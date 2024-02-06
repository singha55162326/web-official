import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: " ການນຳສົ່ງພະລັງງານໄຟຟ້າຜ່ານລະບົບ ",
    paragraph:
      "Sit amet consecteturauris natoque name pellentue augue mattis faucibus ",
    image: "/images/ສາຍສົ່ງ.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["ສາລະໃໝ່"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "  ສະຖານີໄຟຟ້າແຕ່ລະແຮງດັນທີ່ຟຟລຄຸ້ມຄອງ  ",
    paragraph:
    "Sit amet consecteturauris natoque name pellentue augue mattis faucibus ",
    image: "/images/ສະຖານີ.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["ສາລະໃໝ່"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: " ສາເຫດທີໄຟຟ້າດັບ  ",
    paragraph:
    "Sit amet consecteturauris natoque name pellentue augue mattis faucibus ",
    image: "/images/20.jpeg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["ສາລະໃໝ່"],
    publishDate: "2025",
  },


];
export default blogData;