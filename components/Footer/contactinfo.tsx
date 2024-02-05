/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Contactinfo = () => {
  return (
    <div style={{ backgroundColor: '#2A2B85FF' }} className="rounded-t-3xl bg-gradient-to-r ">
      <div className="container   p-5">
        <div className=" grid md:grid-cols-4 gap-28">
          <div className="mb-4 flex items-center md:mb-0">
            <img
              className="relative h-[50.6px] w-[65px] shrink-0   overflow-hidden p-2"
              alt=""
              src="images/icon2.svg"
            />
            <div className="ml-2">
              <h1 className="font-Prompt text-base font-medium leading-relaxed text-white">
                Location{" "}
              </h1>
              <p className="font-Prompt text-base font-light leading-[21px] text-neutral-200">
                55 Main Street, Australia
              </p>
            </div>
          </div>

          <div className="mb-4 flex items-center md:mb-0">
            <img
              className="relative h-[50.6px] w-[65px] shrink-0 overflow-hidden  p-2"
              alt=""
              src="images/icon3.svg"
            />
            <div className="ml-2">
              <h1 className="font-Prompt text-base font-medium leading-relaxed text-white">
                Email{" "}
              </h1>
              <p className="font-Prompt text-base font-light leading-[21px] text-neutral-200">
                support@gmail.com
              </p>
            </div>
          </div>

          <div className="mb-4 flex items-center md:mb-0">
            <img
              className="relative h-[50.6px] w-[65px] shrink-0 overflow-hidden p-2"
              alt=""
              src="images/icon2.svg"
            />
            <div className="ml-2">
              <h1 className="font-Prompt text-base font-medium leading-relaxed text-white">
                Hotline{" "}
              </h1>
              <p className="font-Prompt text-base font-light leading-[21px] text-neutral-200">
                +000 (123) 456 898
              </p>
            </div>
          </div>

          <div style={{ color: "white" }} className="flex space-x-4 flex-auto">
            <div className="flex items-center">
              <Link href="https://www.facebook.com/Edllao" target="_blank" rel="noopener noreferrer">

                <img
                  src="/facebook-icon.png"
                  className="h-12 transition-transform transform hover:scale-110 w-12"
                  alt="Logo 1"
                />

              </Link>
            </div>

            <div className="flex items-center">
              <img
                src="/twitter_2023.png"
                className="h-12 transition-transform transform hover:scale-110 w-12 "
                alt="Logo 2"
              />
            </div>
            <div className="flex items-center">
              <Link href="https://www.youtube.com/@EDLChannelLaos" target="_blank" rel="noopener noreferrer">

                <img
                  src="/youtube-icon.png"
                  className="h-12 transition-transform transform hover:scale-110 w-12"
                  alt="Logo 3"
                />

              </Link>

            </div>
          </div>
        </div>

        <div className="flex flex-auto pt-8 md:space-x-36">
          <h1 className="text-xl md:text-2xl lg:text-xl font-semibold text-white">
            ກ່ຽວກັບ
            <p className="md:pt-4 text-base font-bold">
              ລັດວິສາຫະກິດໄຟຟ້າລາວ (ຟຟລ) ສ້າງຕັ້ງຂື້ນ ໃນວັນທີ
              <br /> 18 ທັນວາ 1961 ເຊິ່ງແມ່ນຫົວໜ່ວຍທຸລະກິດຂອງລັດ <br />{" "}
              ທີ່ດຳເນີນທຸລະກິດດ້ານການຜະລິດ, ຄຸ້ມຄອງ, ບໍລິການ
              <br /> ແລະ ພັດທະນາ ພະລັງງານ
            </p>
          </h1>


          <h1 className="text-xl font-semibold text-white">
            ບໍລິການ
            <div className="grid grid-cols-2 gap-36  pt-4">
              <ul className="text-base font-bold">
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <Link href="/news-detail">ຂ່າວສານ</Link>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <Link href="/blog">ລາຄາໄຟ</Link>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <Link href="/turn-off-light">ແຈ້ງການມອດໄຟ</Link>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <Link href="/notice-of-auction">ແຈ້ງການປະມູນ</Link>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <Link href="/knowledge-detail">ຄວາມຮູ້ກ່ຽວກັບໄຟຟ້າ</Link>
                </li>
              </ul>

              <ul className="text-base font-bold">
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <Link href="/contact">ວາລະສານ</Link>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <Link href="/about">ສ້ອມແປງໝໍ້ນັບໄຟ</Link>
                </li>
                <li>
                  <Link href="/contact">ປ່ຽນຖ່າຍໝໍ້ນັບໄຟ</Link>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                  <Link href="/contact">EV Charger</Link>
                </li>
              </ul>
            </div>
          </h1>

          <h1 className="text-xl font-bold text-white">
            {" "}
            ແຈ້ງຂໍ້ມູນຂ່າວສານ
            <p

              className="pt-4 text-base font-bold"
            >
              ທ່ານສາມາດຮັບຮູ້ ຂ່າວສານໄຟຟ້າໄດ້ກ່ອນຄົນອື່ນພຽງແຕ່
              <br />
              ຕື່ມຂໍ້ມູນໃສ່ໃນ ຊື່ Email ຂອງທ່ານ ໃສ່ກ່ອງດ້ານລຸ້ມເທົ່າ
              <br />
              ນີ້ ທ່ານກໍໄດ້ແຈ້ງເຕືອນກ່ອນຄົນອື່ນແລ້ວ
            </p>
            <div className="flex text-black items-center relative">
  <input
    className="w-full rounded-md p-2 pr-8"  // Added pr-8 for padding on the right side
    type="text"
    name=""
    placeholder="Email Address"
  />
  <img
    className="absolute right-2 top-2 h-4 w-4"  // Positioned the image absolutely to the right
    alt=""
    src="images/icon4.svg"
  />
</div>

          </h1>
        </div>
        <div className="m flex items-center ">
          <img
            className="w-[5%]"
            src="images/image-1@2x.png"
            alt="Your Alt Text Here"
          />

          <h1 className="text-xl font-semibold text-white">
            ລັດວິສາຫະກິດໄຟຟ້າລາວ
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <img
            className="mx-2 my-4 md:my-0"
            src="/vaadin_qrcode.png"
            alt="Vaadin QR Code"
          />

          <div className="flex flex-wrap md:space-x-4">
            <img
              className="mb-4 h-auto w-full md:mb-0 md:w-[116.79px] md:h-[35.98px] "
              src="/images/image 70.png"
              alt="Google Play Store Badge"
            />

            <img
              className="h-auto w-full md:w-[116.79px] md:h-[35.98px]"
              src="images/image 71.png"
              alt="App Store Badge"
            />
          </div>
        </div>

        <div className="flex flex-auto flex-col pt-8 md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <span className="text-white">{`Copy@ 2023 `}</span>
            <span className="text-yellow">
              Electricite Du Laos,
              <span className="text-white"> All Right Reserved</span>
            </span>
          </div>

          <ul className="flex flex-col font-bold items-center space-y-4  text-white md:flex-row md:space-x-4 md:space-y-0">
            <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
              <Link href="/notice-of-auction">Setting & Privacy</Link>
            </li>
            <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
              <Link href="/knowledge-detail">Faqs</Link>
            </li>
            <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
              <Link href="/knowledge-detail">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contactinfo;
