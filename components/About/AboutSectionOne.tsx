import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section className="z-40 h-full mb-20 dark:bg-bg-color-dark">
    <div className="flex items-center justify-center bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/images/Group 179.png")', filter: 'blur(0)' }}>
    <div className="text-center text-white max-w-screen-xl mx-auto px-4">
  <h1 className="relative text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold">
    ກ່ຽວກັບ <span style={{ color: '#FEF200' }}>ລັດວິສາຫະກິດໄຟຟ້າລາວ</span>
  </h1>
  <p className="mb-0 text-justify text-base md:text-lg lg:text-xl xl:text-lg pt-5 font-bold leading-[24px]">
    ລັດວິສາຫະກິດໄຟຟ້າລາວ ໄດ້ສ້າງຕັ້ງຂຶ້ນໃນວັນທີ 18 ທັນວາ ປີ 1961 ຈາກໜໍ່ແໜງຮາກຖານ ຂອງໂຮງໄຟຟ້າ ຜະລິດໄຟຟ້າຂະໜາດນ້ອຍ <br />
    &nbsp;&nbsp;ເຊິ່ງຜະລິດພະລັງງານດ້ວຍຈັກນໍ້າມັນກາຊວນ. ຫຼັງຈາກນັ້ນ, ໃນປີ 1996 ພາຍໃຕ້ການຊີ້ນຳ-ນຳພາ ຢ່າງໃກ້ຊິດຂອງພັກ ແລະ ລັດຖະບານ<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ປະຈຸບັນປະຊາຊົນໄດ້ຊົມໃຊ້ໄຟເຖິງ 95% ຂອງຄອບຄົວໃນທົ່ວປະເທດ
  </p>
</div>


    </div>

    <div className="container mx-auto">
    <div className=" grid grid-cols-2 mt-8 gap-2">
      {/* Column 1 (Image) */}
      <div className="flex-shrink-0">
        <img
          className="object-cover w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-500 "
          src="/FF.png"
          alt="Image"
        />
      </div>
  
      {/* Column 2 (Description) */}

      <h1 className="text-black font-bold text-2xl">
      ວິໄສທັດ ໄຟຟ້າລາວ

      <p className=" font-semibold text-lg">ເຮັດໃຫ້ລັດວິສາຫະກິດໄຟຟ້າລາວ ກາຍເປັນ ລັດວິສາຫະກິດທີ່ເຂັ້ມແຂງ, ເປັນທີ່ຍອມຮັບ ແລະ ໄດ້ຮັບຄວາມເຊື່ອໝັ້ນຈາກທຸກພາກສ່ວນທີ່ກ່ຽວຂ້ອງ ພ້ອມເຮັດຫຼ້ອນ 02 ໜ້າທີ່ຫຼັກຄື:

      </p>
      <p className=" font-semibold  text-lg leading-2">
      ເອົາໃຈໃສ່ ແລະ ຮັບຜິດຊອບສູງຕໍ່ໜ້າທີ່ການເມືອງ ແລະ ແຜນພັດ ທະນາເສດຖະກິດ
-ສັງຄົມແຫ່ງຊາດ ທີ່ໄດ້ກຳໜົດໄວ້ໃຫ້ເປັນຮູບປະທຳ. 
      </p>

      <p className=" font-semibold  text-lg leading-2">
      ດຳເນີນທຸລະກິດໃຫ້ມີປະສິດທິພາບ ແລະ ປະສິດທິຜົນ ໂດຍແນໃສ່ສ້າງອຸດສາຫະ
ກຳໄຟຟ້າໃຫ້ເປັນຂະແໜງການຫຼັກ ໃນການພັດທະນາເສດຖະກິດ-ສັງຄົມ ແລະ 
ສ້າງລາຍຮັບໃຫ້ແກ່ປະເທດ, ພ້ອມທັງຊຸກຍູ້ສົ່ງເສີມຂະແໜງການປິ່ນອ້ອມໃຫ້ມ
ການພັດທະນາໄຟຄຽງຄູ່ກັນ ເພື່ອສ້າງວຽກເຮັດງານທຳໃຫ້ປະຊາຊົນລາວບັນດາເຜົ່າ
ໄດ້ຊົມໃຊ້ໄຟຟ້າໃນລາຄາສົມເຫດສົມຜົນ.
      </p>
      </h1>
      
    
    </div>
    <div className="w-full h-[197px] relative">
  <div className="w-full h-[174px] left-0 top-[23px]  absolute bg-zinc-300 rounded-[10px]" />
  <div className="w-full md:w-full lg:w-[1101px] left-0 md:left-[93px] top-[50px] md:top-[60px] absolute text-black text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold font-['Noto Sans Lao']">
    {/* Your existing text content */}
    
    ຕະຫຼອດໄລຍະເວລາຫຼາຍສິບປີຜ່ານມາທີ່ພວກເຮົາບໍ່ມີທຶນຮອນແຕ່ກໍ່ໄດ້ຄົ້ນຄວ້າເພື່ອດຶງດູດເອົາທຶນຮອນຂອງຕ່າງປະເທດເພື່ອເຂົ້າມາພັດທະນາລະບົບໄຟຟ້າຂອງລາວ ໃນການຕອບສະໜອງຄວາມຕ້ອງການຊົມໃຊ້ໃຫ້ພຽງພໍ ໃນແຕ່ລະໄລຍະ ຂອງການຂະຫຍາຍຕົວຂອງເສດຖະກິດ ແລະຄວາມຕ້ອງການຊົມໃຊ້ໄຟຟ້າຂອງປະຊາຊົນ.
    
  </div>
  <div className="w-[46px] h-[46px] left-[588px] top-0 absolute">
    <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-white rounded-full border-2 border-zinc-500" />
  </div>
</div>


  
    <div className="flex mt-8">
      <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 ml-4 md:ml-8 lg:ml-12 xl:ml-16 h-[390px] relative">
        {/* Your existing text content */}
 
        <h1 className=" font-bold text-2xl">
        ພາລະກິດ ໄຟຟ້າລາວ
        </h1>

        <ul className=" space-y-2 font-semibold list-disc">
          <li>
          ເປັນພາກສ່ວນຫຼັກໃນການກະຕຸກຊຸກຍູ້ໃຫ້ເກີດວົງຈອນການຜະລິດ, ການສ້າງມູນຄ່າເພີ່ມ ແລະ ການຊົມໃຊ້ພາຍໃນຢ່າງເປັນຮູບປະທຳ.
          </li>
          <li>
          ຫຼຸດຜ່ອນການໄຫຼອອກຂອງເງິນຕາຕ່າງປະເທດໃນການນຳເຂົ້ານ້ຳມັນເຊື້ອໄຟໂດຍການຫັນມານຳໃຊ້ທ່າແຮງທາງດ້ານພະລັງງານໄຟຟ້າທີ່ຜະລິດໄດ້ເອງ.
          </li>
          <li>
          ໃຫ້ທົ່ວສັງຄົມໄດ້ເຂົ້າເຖິງໄຟຟ້າທີ່ມີຄຸນນະພາບໃນລາຄາທີ່ສົມເຫດສົມຜົນເພື່ອສາມາດສ້າງຜະລິດຕະພັນທີ່ສາມາດແຂ່ງຂັນໄດ້ໃນຕະຫຼາດ.
          </li>
          <li>
          ກຽມຄວາມພ້ອມໃນການເຊື່ອມໂຍງພະລັງງານໄຟຟ້າກັບປະເທດເພື່ອນບ້ານ ແລະ ພູມມີພາກ ໂດຍການປັບປຸງລະບົບສະໜອງໄຟຟ້າໃຫ້ມີຄວາມສະຖຽນລະພາບແລະລະບົບຕາຂ່າຍໄຟຟ້າໃຫ້ມີຄວາມໝັ້ນຄົງ.
          </li>
          <li>
          ປະຕິຮູບແບບແຜນວິທີດຳເນີນທຸລະກິດເພື່ອດຶງດູດຄວາມເຊື່ອໝັ້ນຂອງລູກຄ້າແລະຜູ້ຊົມໃຊ້ໄຟພາຍໃນ ແລະ ການລົງທຶນຂອງຕ່າງປະເທດກັບຄືນມາ.
          </li>
        </ul>
      </div>
      <img className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 h-[470px] rounded-[10px]" src="images/image 69hhh.png" alt="Description of the image" />
    </div>
  
    </div>
  
 
    
  
   
  </section>
  
  );
};

export default AboutSectionOne;
