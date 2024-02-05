import Image from "next/image";



const AboutSectionTwo = () => {
  return (
    <section className="z-40 pt-8 h-full dark:bg-bg-color-dark">
    <div className="flex items-center justify-center bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url("/images/Group 179.png")', filter: 'blur(0)' }}>
      <div className="text-center text-white">
        <h1 className="relative text-5xl font-bold sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">ສະໜອງໄຟໃຫ້ພຽງພໍ ບໍລິການໄວ</h1>
        <h1 className="mb-0 font-bold text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">ດ້ວຍຄວາມປອດໄພ ຊົມໃຊ້ໃຫ້ເກີດຜົນ</h1>
      </div>
    </div>
  </section>

  );
};

export default AboutSectionTwo;
