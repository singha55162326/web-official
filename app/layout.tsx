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
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
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

