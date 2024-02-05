import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "ກອງປະຊຸມສະຫຼຸບວຽກງານ ປະຈໍາປີ 2022 ແລະ ທິດທາງແຜນການ ປີ 2023 ຂອງ ລັດວິສາຫະກິດໄຟຟ້າລາວ",
    paragraph:
      "ກອງປະຊຸມສະຫຼຸບວຽກງານ ປະຈໍາປີ 2022 ແລະ ທິດທາງແຜນການ ປີ 2023 ໄດ້ຈັດຂຶ້ນຢ່າງເປັນທາງການ ໃນວັນທີ 17 ກຸມພາ 2023 ຢູ່ ສໍານັກງານໃຫຍ່ ລັດວິສາຫະກິດໄຟຟ້າລາວ ນະຄອນຫຼວງວຽງຈັນ ໂດຍການໃຫ້ກຽດເຂົ້າຮ່ວມຂອງ ທ່ານ ນາງ ຈັນສະຫວາດ ບຸບຜາ ຄະນະປະຈໍາພັກກະຊວງ, ປະທານກວດກາພັກ ຮອງລັດຖະມົນຕີ ກະຊວງພະລັງງານ ແລະ ບໍ່ແຮ່ ມີຄະນະປະຕິຮູບ ຟຟລ, ຄະນະກົມ ອ້ອມຂ້າງກະຊວງພະລັງງານ ແລະ ບໍ່ແຮ່, ກະຊວງການເງິນ, ຄະນະຝ່າຍ, ຄະນະຫ້ອງການ, ພະນັກງານນໍາພາ ຟຟລ ແລະ ແຂກທີ່ຖືກເຊີນເຂົ້າຮ່ວມ.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "ພິທີປາຖະກະຖາເລົ່າມູນເຊື້ອວັນສ້າງຕັ້ງ ຄຊປປລ ພ້ອມປະດັບຫຼຽນ ຊາວໜຸ່ມຕະລຸມບອນ ແລະ ມອບຫຼຽນກາລະນຶກ 65 ປີ",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "ງານແຂ່ງຂັນສີມືແຮງງານປະຈໍາປີ 2023",
    paragraph:
      "ໂອກາດວັນກໍາມະກອນສາກົນ 1 ພຶດສະພາ ຄົບຮອບ 137 ປີ, ໃນວັນທີ 6 ພຶດສະພາ 2023 ສະຫະພັນກໍາມະບານ ກະຊວງພະລັງງານ ແລະ ບໍ່ແຮ່ ຮ່ວມກັບ ສະຫະພັນກໍາມະບານຮາກຖານ ລັດວິສາຫະກິດໄຟຟ້າລາວ ໄດ້ສ້າງຂະບວນການແຂ່ງຂັນສີມືແຮງງານຂື້ນ ໂດຍມີ ທ່ານ ໂພໄຊ ໄຊຍະສອນ ລັດຖະມົນຕີກະຊວງພະລັງງານ ແລະ ບໍ່ແຮ່ ເປັນປະທານ, ທ່ານ ພົງໄຊສັກ ອິນຖາລາດ ຮອງລັດຖະມົນຕີກະຊວງແຮງງານ ແລະ ສະຫວັດດີການສັງຄົມ, ທ່ານ ວິໄລ ວົງຂະເສີມ ຮອງປະທານ ຄະນະບໍລິຫານງານ ສູນກາງສະຫະພັນກໍາມະບານລາວ ພ້ອມແຂກທີ່ຖືກເຊີນ, ສະຖາບັນການສຶກສາ ແລະ ທີມແຂ່ງຂັນ ຟຟລ ເຂົ້າຮ່ວມ.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
