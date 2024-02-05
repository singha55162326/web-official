"use client";
import Image from "next/image";
import Link from "next/link";
import Logopartner from "./logopartner";
import Contactinfo from "./contactinfo";

const Footer = () => {
  return (
    <>
      <footer
       className="wow fadeInUp dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24"
       data-wow-delay=".1s"
      >
        <Logopartner />
        <Contactinfo />

      </footer>
    </>
  );
};

export default Footer;
