"use client";
import Link from "next/link";
import React from "react";

const Logopartner = () => {
  return (
    <div>
     <div className="container  max-w-screen-2xl mx-auto">

<div className="flex flex-col  pb-16 md:flex-row md:space-x-4 lg:space-x-24">

  <Link href={"/"}>
    <div className="mb-4 flex transition-transform transform hover:scale-110 items-center md:mb-0">
      <img
        className="relative w-[75px] h-[75px] shrink-0 overflow-hidden "
        alt=""
        src="images/image 77.png"
      />
      <div className="ml-2">
        <h1 style={{ color:"#008000" }} className="font-Prompt text-base font-bold leading-relaxed ">
          ກະຊວງການເງິນ{" "}
        </h1>
        <p  style={{ color:"#008000" }} className="font-Prompt text-xs font-bold leading-[21px] ">
          Ministry of Finances
        </p>
      </div>
    </div>
  </Link>

  <Link href={"/"}>
    <div className="mb-4 flex transition-transform transform hover:scale-110 items-center md:mb-0">
      <img
        className="relative w-[75px] h-[75px] shrink-0 overflow-hidden "
        alt=""
        src="images/OIP-removebg-preview 1.png"
      />
      <div className="ml-2">
        <h1 style={{ color:"#313493" }} className="font-Prompt text-base font-bold leading-relaxed ">
          ກະຊວງແຜນການ ແລະ ການລົງທຶນ{" "}
        </h1>
        <p  style={{ color:"#313493" }} className="font-Prompt text-xs font-bold leading-[21px] ">
          Ministry of Planning and Investment
        </p>
      </div>
    </div>
  </Link>

  <Link href={"/"}>
    <div className="mb-4 flex transition-transform transform hover:scale-110 items-center md:mb-0">
      <img
        className="relative w-[75px] h-[75px] shrink-0 overflow-hidden "
        alt=""
        src="images/image 57 1.png"
      />
      <div className="ml-2">
        <h1 style={{ color:"#313493" }} className="font-Prompt text-base font-bold leading-relaxed ">
          ກະຊວງຜະລິດ-ໄຟຟ້າລາວມະຫາຊົນ{" "}
        </h1>
        <p  style={{ color:"#FE0000" }} className="font-Prompt text-xs font-bold leading-[21px] ">
          EDL-GENERATION PUBLIC COMPANY
        </p>
      </div>
    </div>
  </Link>

  <Link href={"/"}>
    <div className="mb-4 flex transition-transform transform hover:scale-110 items-center md:mb-0">
      <img
        className="relative w-[75px] h-[75px] shrink-0 overflow-hidden "
        alt=""
        src="images/image 76.png"
      />
      <div className="ml-2">
        <h1 style={{ color:"#0032B9" }} className="font-Prompt text-base font-bold leading-relaxed ">
          ກະຊວງພະລັງງານ ແລະ ບໍ່ແຮ່{" "}
        </h1>
        <p  style={{ color:"#0032B9" }} className="font-Prompt text-xs font-bold leading-[21px] ">
          Ministry of Energy and Mines
        </p>
      </div>
    </div>
  </Link>

</div>

</div>

    </div>
  );
};

export default Logopartner;
