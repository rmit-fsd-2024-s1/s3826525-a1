import React from "react";
import { Facebook, Linkedin, Youtube } from "react-feather";

const Footer = () => {
 return (
  <>
   <footer className="bg-[#ededed] py-12 px-16 font-[sans-serif]">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
     <div>
      <h2 className="text-gray-500 text-lg font-bold mb-4">Quick Links</h2>
      <ul className="space-y-3">
       <li>
        <a
         href="#!"
         className="text-gray-500 hover:text-black text-base transition-all"
        >
         Newsroom
        </a>
       </li>
       <li>
        <a
         href="#!"
         className="text-gray-500 hover:text-black text-base transition-all"
        >
         Tailwind CSS
        </a>
       </li>
       <li>
        <a
         href="#!"
         className="text-gray-500 hover:text-black text-base transition-all"
        >
         Careers
        </a>
       </li>
      </ul>
     </div>
     <div>
      <h2 className="text-gray-500 text-lg font-bold mb-4">Follow Us</h2>
      <ul className="space-y-3">
       <li>
        <a
         href="#!"
         className="text-gray-500 hover:text-black text-base transition-all"
        >
         Github
        </a>
       </li>
       <li>
        <a
         href="#!"
         className="text-gray-500 hover:text-black text-base transition-all"
        >
         linkedin
        </a>
       </li>
       <li>
        <a
         href="#!"
         className="text-gray-500 hover:text-black text-base transition-all"
        >
         Twitter
        </a>
       </li>
      </ul>
     </div>
     <div>
      <h2 className="text-gray-500 text-lg font-bold mb-4">Company</h2>
      <ul className="space-y-3">
       <li>
        <a
         href="#!"
         className="text-gray-500 hover:text-black text-base transition-all"
        >
         About
        </a>
       </li>
       <li>
        <a
         href="#!"
         className="text-gray-500 hover:text-black text-base transition-all"
        >
         Privacy Policy
        </a>
       </li>
       <li>
        <a
         href="#!"
         className="text-gray-500 hover:text-black text-base transition-all"
        >
         Terms &amp; Conditions
        </a>
       </li>
      </ul>
     </div>
     <div className="flex items-center lg:justify-center">
      <a href="#!">
       <p className="w-60 font-bold text-3xl">Logo</p>
      </a>
     </div>
    </div>
    <hr className="my-8 border-gray-700" />
    <div className="sm:flex sm:items-center sm:justify-between sm:flex-row">
     <p className="text-gray-500 text-sm sm:order-1">
      © 2023
      <a href="#!" target="_blank" className="hover:underline mx-1">
       Logo
      </a>
      All Rights Reserved.
     </p>
     <div className="flex space-x-5 max-sm:mt-4">
      <a
       href="#!"
       className="text-gray-500 hover:text-blue-500 text-base transition-all"
      >
       <Facebook />
      </a>
      <a
       href="#!"
       className="text-gray-500 hover:text-red-500 text-base transition-all"
      >
       <Youtube />
      </a>
      <a
       href="#!"
       className="text-gray-500 hover:text-blue-800 text-base transition-all"
      >
       <Linkedin />
      </a>
     </div>
    </div>
   </footer>
  </>
 );
};

export default Footer;
