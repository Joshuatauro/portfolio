import "./globals.css";
import { Cherry_Swash, Inter } from "next/font/google";

import { inter } from "./fonts";
import SocialLinks from "@/components/SocialLinks";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Joshua Tauro || Fullstack Developer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <SocialLinks />
        <div className="w-full py-1 font-medium bg-yellow-400 text-sm text-black text-center">Currently under development, hopefully will be done soon :)</div>
        <div className=" w-2/4 pt-5 m-auto relative">
          
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
