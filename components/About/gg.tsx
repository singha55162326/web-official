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
    <section   className="z-40 h-full mb-20  dark:bg-bg-color-dark " >


<div className="flex items-center justify-center bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/images/Group 179.png")', filter: 'blur(0)' }}>
  <div className="text-center text-white">
  <h1 className="relative font-bold text-[48px]">
 ກ່ຽວກັບ   <span style={{ color: '#FEF200' }}>ລັດວິສາຫະກິດໄຟຟ້າລາວ</span>
</h1>
<p className="mb-0 text-justify text-[16px] pt-5 font-bold leading-[57px]">
  ລັດວິສາຫະກິດໄຟຟ້າລາວ ໄດ້ສ້າງຕັ້ງຂຶ້ນໃນວັນທີ 18 ທັນວາ ປີ 1961 ຈາກໜໍ່ແໜງຮາກຖານ ຂອງໂຮງໄຟຟ້າ ຜະລິດໄຟຟ້າຂະໜາດນ້ອຍ <br />
  &nbsp;&nbsp;ເຊິ່ງຜະລິດພະລັງງານດ້ວຍຈັກນໍ້າມັນກາຊວນ. ຫຼັງຈາກນັ້ນ, ໃນປີ 1996 ພາຍໃຕ້ການຊີ້ນຳ-ນຳພາ ຢ່າງໃກ້ຊິດຂອງພັກ ແລະ ລັດຖະບານ<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ປະຈຸບັນປະຊາຊົນໄດ້ຊົມໃຊ້ໄຟເຖິງ 95% ຂອງຄອບຄົວໃນທົ່ວປະເທດ
</p>


  </div>
</div>

<div className="flex mt-8 container mx-auto">
  {/* Column 1 (Image) */}
  <div className="flex-shrink-0">
    <img
      className="object-cover "
      src="/images/image 68eddd.png"
      width={600}
      height={470.25}
      alt="Image"
    />
  </div>

  {/* Column 2 (Description) */}
  <div className="ml-14 ">
  <div className="text-center text-black text-[32px] font-bold font-['Noto Sans Lao'] leading-[57.60px]">ວິໄສທັດ ໄຟຟ້າລາວ</div>
  <div className="w-[584px] text-black text-xl font-normal font-['Noto Sans Lao'] leading-[30px]">ເຮັດໃຫ້ລັດວິສາຫະກິດໄຟຟ້າລາວ ກາຍເປັນ ລັດວິສາຫະກິດທີ່ເຂັ້ມແຂງ, ເປັນທີ່ຍອມຮັບ ແລະ ໄດ້ຮັບຄວາມເຊື່ອໝັ້ນຈາກທຸກພາກສ່ວນທີ່ກ່ຽວຂ້ອງ ພ້ອມເຮັດຫຼ້ອນ 02 ໜ້າທີ່ຫຼັກຄື:</div>
  <div className="text-black text-xl mt-6 font-normal font-['Noto Sans Lao'] leading-[30px]">ເອົາໃຈໃສ່ ແລະ ຮັບຜິດຊອບສູງຕໍ່ໜ້າທີ່ການເມືອງ ແລະ ແຜນພັດ ທະນາເສດຖະກິດ<br/>-ສັງຄົມແຫ່ງຊາດ ທີ່ໄດ້ກຳໜົດໄວ້ໃຫ້ເປັນຮູບປະທຳ. </div>
  <div className="w-[583px] h-[150px] relative">
  <div className="w-[553px] mt-6 left-[0px] top-0 absolute text-black text-xl font-normal font-['Noto Sans Lao'] leading-[30px]">ດຳເນີນທຸລະກິດໃຫ້ມີປະສິດທິພາບ ແລະ ປະສິດທິຜົນ ໂດຍແນໃສ່ສ້າງອຸດສາຫະ<br/>ກຳໄຟຟ້າໃຫ້ເປັນຂະແໜງການຫຼັກ ໃນການພັດທະນາເສດຖະກິດ-ສັງຄົມ ແລະ <br/>ສ້າງລາຍຮັບໃຫ້ແກ່ປະເທດ, ພ້ອມທັງຊຸກຍູ້ສົ່ງເສີມຂະແໜງການປິ່ນອ້ອມໃຫ້ມ<br/>ການພັດທະນາໄຟຄຽງຄູ່ກັນ ເພື່ອສ້າງວຽກເຮັດງານທຳໃຫ້ປະຊາຊົນລາວບັນດາເຜົ່າ<br/>ໄດ້ຊົມໃຊ້ໄຟຟ້າໃນລາຄາສົມເຫດສົມຜົນ.</div>
</div>

  </div>

</div>
<div className="w-[1287px] ml-[15%] h-[197px] relative">
  <div className="w-[1287px] h-[174px] left-0 top-[23px] absolute bg-zinc-300 rounded-[10px]" />
  <div className="w-[1101px] left-[93px] top-[80px] absolute text-black text-xl font-normal font-['Noto Sans Lao'] leading-[30px]">ຕະຫຼອດໄລຍະເວລາຫຼາຍສິບປີຜ່ານມາທີ່ພວກເຮົາບໍ່ມີທຶນຮອນແຕ່ກໍ່ໄດ້ຄົ້ນຄວ້າເພື່ອດຶງດູດເອົາທຶນຮອນຂອງຕ່າງປະເທດເພື່ອເຂົ້າມາພັດທະນາລະບົບໄຟຟ້າຂອງລາວ ໃນການຕອບສະໜອງຄວາມຕ້ອງການຊົມໃຊ້ໃຫ້ພຽງພໍ ໃນແຕ່ລະໄລຍະ ຂອງການຂະຫຍາຍຕົວຂອງເສດຖະກິດ ແລະຄວາມຕ້ອງການຊົມໃຊ້ໄຟຟ້າຂອງປະຊາຊົນ.</div>
  <div className="w-[46px] h-[46px] left-[588px] top-0 absolute">
    <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-white rounded-full border-2 border-zinc-500" />
  </div>
</div>
<div className=" text-black  ml-[15%] text-[32px] font-bold font-['Noto Sans Lao'] leading-[57.60px]">ພາລະກິດ ໄຟຟ້າລາວ</div>

<div className="flex">
  <div className="w-[658px] ml-[15%] h-[390px] relative">
    <div className="w-[623px]  top-0 absolute text-black text-xl font-normal font-['Noto Sans Lao'] leading-[30px]">ເປັນພາກສ່ວນຫຼັກໃນການກະຕຸກຊຸກຍູ້ໃຫ້ເກີດວົງຈອນການຜະລິດ, ການສ້າງມູນຄ່າເພີ່ມ ແລະ ການຊົມໃຊ້ພາຍໃນຢ່າງເປັນຮູບປະທຳ.</div>
    <div className="w-[623px]  top-[75px] absolute text-black text-xl font-normal font-['Noto Sans Lao'] leading-[30px]">ຫຼຸດຜ່ອນການໄຫຼອອກຂອງເງິນຕາຕ່າງປະເທດໃນການນຳເຂົ້ານ້ຳມັນເຊື້ອໄຟໂດຍການຫັນມານຳໃຊ້ທ່າແຮງທາງດ້ານພະລັງງານໄຟຟ້າທີ່ຜະລິດໄດ້ເອງ.</div>
    <div className="w-[623px]  top-[150px] absolute text-black text-xl font-normal font-['Noto Sans Lao'] leading-[30px]">ໃຫ້ທົ່ວສັງຄົມໄດ້ເຂົ້າເຖິງໄຟຟ້າທີ່ມີຄຸນນະພາບໃນລາຄາທີ່ສົມເຫດສົມຜົນເພື່ອສາມາດສ້າງຜະລິດຕະພັນທີ່ສາມາດແຂ່ງຂັນໄດ້ໃນຕະຫຼາດ.</div>
    <div className="w-[623px]  top-[225px] absolute text-black text-xl font-normal font-['Noto Sans Lao'] leading-[30px]">ກຽມຄວາມພ້ອມໃນການເຊື່ອມໂຍງພະລັງງານໄຟຟ້າກັບປະເທດເພື່ອນບ້ານ ແລະ ພູມມີພາກ ໂດຍການປັບປຸງລະບົບສະໜອງໄຟຟ້າໃຫ້ມີຄວາມສະຖຽນລະພາບແລະລະບົບຕາຂ່າຍໄຟຟ້າໃຫ້ມີຄວາມໝັ້ນຄົງ.</div>
    <div className="w-[623px]  top-[330px] absolute text-black text-xl font-normal font-['Noto Sans Lao'] leading-[30px]">ປະຕິຮູບແບບແຜນວິທີດຳເນີນທຸລະກິດເພື່ອດຶງດູດຄວາມເຊື່ອໝັ້ນຂອງລູກຄ້າແລະຜູ້ຊົມໃຊ້ໄຟພາຍໃນ ແລະ ການລົງທຶນຂອງຕ່າງປະເທດກັບຄືນມາ.</div>
  </div>
  <img className="w-[600px] h-[470px] rounded-[10px]" src="images/image 69hhh.png" alt="Description of the image" />
</div>


    </section>
  );
};

export default AboutSectionOne;
