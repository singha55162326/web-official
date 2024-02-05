import Link from 'next/link';
import React from 'react'


const Branchlist = () => {

    const cardData = [
        {
          id: 1,
          imageSrc: "images-branch/image 84.png",
          heading: " ສາຂາແຂວງອັດຕະປື",
          description: "  ຕັ້ງຢູ່ບ້ານໄຊສະອາດ,ເມືອງສາມັກຄີໄຊ ແຂວງອັດຕະປື",
          phone: " 031 2115156-0",
          email: "   Edl.attapue@hotmail.com ",
        },
        {
          id: 2,
          imageSrc: "images-branch/image 88.png",
          heading: " ສາຂາແຂວງຫົວພັນ",
          description: "    ຕັ້ງຢູ່ບ້ານນາທົ່ງ, ເມືອງຊໍາເໜືອ ແຂວງ ຫົວພັນ",
          phone: "  064 31 2945",
          email: "  Khampheuy_edl@yahoo.com ",
        },
        {
          id: 3,
          imageSrc: "images-branch/image 92.png",
          heading: " ສາຂາແຂວງອຸດົມໄຊ",
          description: "   ຕັ້ງຢູ່ບ້ານນາສ້າວ, ເມືອງໄຊ ແຂວງ ອຸດົມໄຊ. .",
          phone: "  081 212 957",
          email: "   Edl.oudomxay@hotmail.com ",
        },
        {
          id: 4,
          imageSrc: "images/image 96.png",
          heading: " ສາຂາແຂວງສະຫວັນນະເຂດ",
          description: "  ບ້ານ ທ່າແຮ່. ເມືອງ ໄກສອນ ພົມວິຫານ. ",
          phone: " 031 2115156-0",
          email: "   Edl.attapue@hotmail.com ",
        },
        {
          id: 1,
          imageSrc: "images-branch/image 100.png",
          heading: " ສາຂາແຂວງໄຊສົມບູນ",
          description: " ຕັ້ງຢູ່ ຖະໜົນເລທີ 5B, ບ້ານ ພູຫົວຊ້າງ, ເມືອງ ອານຸວົງ",
          phone: " 031 2115156-0",
          email: "   Edl.attapue@hotmail.com ",
        },
        {
          id: 2,
          imageSrc: "images-branch/image 85.png",
          heading: " ສາຂາແຂວງບໍ່ແກ້ວ",
          description: "  ຕັ້ງຢູ່ ບ້ານໃຫຍ່ຫ້ວຍຊາຍໃຕ້ ເມືອງຫ້ວຍຊາຍ",
          phone: " 084 212 007",
          email: "   EDL_Bokeo@hotmail.com ",
        },
        {
          id: 3,
          imageSrc: "images-branch/image 89.png",
          heading: " ສາຂາແຂວງຄຳມ່ວນ",
          description: "  ຕັ້ງຢູ່ບ້ານໂພນສະໜາມ,ເມືອງທ່າແຂກ ແຂວງ ຄຳມ່ວນ",
          phone: " 051 212682",
          email: "   EDL_KM@gmail.com ",
        },
        {
          id: 4,
          imageSrc: "images-branch/image 93.png",
          heading: " ສາຂາແຂວງຜົ້ງສາລີ",
          description: "  ຕັ້ງຢູ່ບ້ານ ໂພນແກ້ວ, ເມືອງຜົ້ງສາລີ",
          phone: "088-210215",
          email: "   Edl.phongsaly@hotmail.com ",
        },
        {
          id: 1,
          imageSrc: "images-branch/image 97.png",
          heading: " ສາຂາແຂວງເຊກອງ",
          description: "   ຕັ້ງຢູ່ບ້ານໂພນຄຳ, ເທດສະບານ ເມືອງລະມາມ",
          phone: "  038 211 354",
          email: "   Edl.xekong@hotmail.com ",
        },
        {
          id: 2,
          imageSrc: "images-branch/image 86.png",
          heading: " ສາຂາແຂວງບໍລິຄຳໄຊ",
          description: "   ຕັ້ງຢູ່ບ້ານ ຫົງໄຊ ແຂວງບໍລິຄຳໄຊ",
          phone: "  054 280307",
          email: "   Edl.borlikhamxay@hotmail.com ",
        },
        {
          id: 2,
          imageSrc: "images-branch/image 90.png",
          heading: " ສາຂາແຂວງຫຼວງນ້ຳທາ",
          description: "  ຕັ້ງຢູ່ບ້ານ ວຽງທອງ, ຖະໜົນຫຼວງນໍ້າທາ, ເມືອງ ຫຼວງນໍ້າທາ",
          phone: " 086-212093",
          email: "  edllnt2006@gmail.com ",
        },
        {
          id: 3,
          imageSrc: "images-branch/image 94.png",
          heading: " ສາຂາແຂວງໄຊຍະບູລີ",
          description: "   ຕັ້ງຢູ່ບ້ານ ທ່ານາ ເມືອງໄຊຍະບູລີ ",
          phone: "  074 211673",
          email: "  edl_sayaboury@hotmail.com",
        },
        {
          id: 4,
          imageSrc: "images-branch/image 98.png",
          heading: " ສາຂາແຂວງວຽງຈັນ",
          description: "  ຕັ້ງຢູ່ບ້ານ ໂພນໝີ ໃຕ້ , ເມືອງ ວຽງຄໍາ  ",
          phone: " (023) 431015",
          email: "   Edl.vientiane@hotmail.com ",
        },
        {
          id: 1,
          imageSrc: "images-branch/image 87.png",
          heading: " ສາຂາແຂວງຈຳປາສັກ",
          description: "   ຕັ້ງຢູ່ບ້ານ ໂນນສະຫວ່າງ ນະຄອນປາກເຊ",
          phone: " (031) 215 037",
          email: "   Edl.champasack@hotmail.com ",
        },

        {
          id: 2,
          imageSrc: "images-branch/image 91.png",
          heading: " ສາຂາແຂວງຫຼວງພະບາງ",
          description: "    ຕັ້ງຢູ່ບ້ານໂຄມຂວາງ ຖະໜົນ13ເໜືອ",
          phone: "071 212 190",
          email: "   edl_Luangprabang@hotmail.com",
        },
        {
          id: 3,
          imageSrc: "images-branch/image 95.png",
          heading: "ສາຂາແຂວງສາລະວັນ",
          description: "   ຕັ້ງທີ່ບ້ານ ນາກົກໂພ ເທດສະບານ ",
          phone: "034 211127",
          email: "   Edl.salavan@hotmail.com ",
        },
        {
          id: 4,
          imageSrc: "images-branch/image 99.png",
          heading: " ສາຂາແຂວງຊຽງຂວາງ",
          description: "   ຕັ້ງຢູ່ ບ້ານໂພນສະອາດໃຕ້ ເມືອງແປກ",
          phone: "  061 213545",
          email: "   Edl.xiengkhoung@hotmail.com ",
        },
        {
          id: 1,
          imageSrc: "images-branch/image 101.png",
          heading: " ສາຂານະຄອນຫລວງ1",
          description: " ຕັ້ງຢູ່ບ້ານ ໜອງບຶກ ເມືອງສີໂຄດຕະບອງ",
          phone: " 021 254121",
          email: "   Edl.nakhoneluang1@hotmail.com ",
        },
        {
          id: 2,
          imageSrc: "images-branch/image 102.png",
          heading: " ສາຂານະຄອນຫລວງ2",
          description: "  ຕັ້ງຢູ່ບ້ານ ໜອງບຶກ",
          phone: " 031 2115156-0",
          email: "   Edl.attapue@hotmail.com ",
        },

      ];
  return (
    <div className="container mx-auto">

    <div className="md:flex md:justify-around">
      <h1 className="font-extrabold text-blue-900">ສາຂາ</h1>
    </div>
  
    <div className="md:ml-10 md:mt-10 flex   flex-wrap gap-6">
      {cardData.map((card) => (
        <div key={card.id} className="relative  rounded-md shadow-lg transition-transform transform hover:scale-110 md:h-[309px] md:w-[300px]">
  
          <Link href='/attapue'>
            <img
              className="absolute  left-0 top-0 h-[168.75px] w-full md:w-[300px] max-xl:w-[500px]"
              src={card.imageSrc}
              alt={`Card ${card.id}`}
            />
          </Link>
  
          <div className="absolute left-0 top-[168px] p-2 mt-2 h-[141px] w-full md:w-[300px] rounded-bl-[10px] rounded-br-[10px] bg-white">
            <h2>{card.heading}</h2>
            <p className="mt-2 line-clamp-1" style={{ color: "#838383" }}>
              {card.description}
            </p>
            <p className="mt-2" style={{ color: "#838383" }}>
              <i className="fas fa-phone space-x-4"></i>
              {card.phone}
            </p>
            <p className="mt-2" style={{ color: "#838383" }}>
              <i className="fas fa-envelope"></i>
              {card.email}
            </p>
            <hr />
            <p className="mt-2" style={{ color: "#838383" }}>
              <i
                style={{ color: "red" }}
                className="fa-solid fa-location-dot"
              ></i>
              Google map
            </p>
          </div>
  
          <div className="absolute left-[23px] top-[57.66px] h-3 w-[94px]"></div>
          <div className="absolute left-[20px] top-[76.66px] h-3 w-[164.93px]">
            <div className="absolute left-0 top-0 h-3 w-[15px]"></div>
          </div>
        </div>
      ))}
    </div>
  
  </div>
  
  )
}

export default Branchlist
