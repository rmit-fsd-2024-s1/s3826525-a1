import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { X } from "react-feather";
import GetOffer from "../components/common/GetOffer";

export const Main = ({ children }) => {

 return (
  <div>

   <GetOffer />
   <Navbar />
   <div className="min-h-[calc(100vh-430px)] h-full w-full">{children}</div>
   <Footer />
  </div>
 );
};
