import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Price";
import Brands from "@/components/Brands";
import Magazine from "@/components/Magazine";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Price from "@/components/Price";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import News from "@/components/News";
import Knowledge from "@/components/Knowledge";
import Video from "@/components/Video";
import { Metadata } from "next";
import Business from "@/components/Business";
import Activity from "@/components/Activity";







export const metadata: Metadata = {
  title: "EDL-Website",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default async function Home() {
  


  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Price />
      <News/>
      <Knowledge/>
      <AboutSectionTwo />
      <Magazine/>
      <Business/>
      <Activity/>






    </>
  );
}

