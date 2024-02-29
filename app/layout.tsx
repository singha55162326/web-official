"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import dynamic from 'next/dynamic';

import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (you can replace this with actual logic)
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="shortcut icon" href="favicon-32x32.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        

      </head>
      <body className={` overflow-x-hidden lg:overflow-x-hidden`}>
        {loading ? (
          // Display loading spinner or any other loading indicator
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 512 512"><defs><symbol id="meteoconsLightningBolt0" viewBox="0 0 96 176"><path fill="#f6a823" d="M32 0L0 96h32l-16 80L96 64H48L80 0H32z"><animate id="meteoconsLightningBolt1" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"/></path></symbol></defs><use width="96" height="176" href="#meteoconsLightningBolt0" transform="translate(190.13 132.72)scale(1.36)"/></svg>
          </div>
        ) : (
          // Render your content when loading is complete
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        )}
      </body>
    </html>
  );
}

import { Providers } from "./providers";import { useEffect, useState } from "react";

