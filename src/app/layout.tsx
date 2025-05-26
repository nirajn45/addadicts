import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@fortawesome/fontawesome-free/css/all.css'

import Navbar from "@/components/Globals/Navbar"
import Footer from "@/components/Globals/Footer"




const inter = Raleway({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "SAS Trans Inc | Your Trusted Transportation Partner",
  description: "Reliable and efficient transportation services tailored to your needs.",
  // icons: {
  //   icon: "/facicon.ico",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="./icon.png" /> */}
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <Navbar />

        {children}
        
        <Footer />
      </body>
    </html>
  );
}
