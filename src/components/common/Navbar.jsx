import React, { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingCart, User } from "react-feather";
import { Link, useParams } from "react-router-dom";
import Account from "../ui/Account";

const Navbar = () => {
 const path = window.location.pathname;

 const [activeButton, setActiveButton] = useState("Home");
 console.log('activeButton: ', activeButton);

 // Function to handle button click and set the active button
 const handleButtonClick = (buttonName) => {
  setActiveButton(buttonName);
 };

 const parts = path.split("/");
 const [showProfileModal, setShowProfileModal] = useState(false);
 const cartItemsData = localStorage?.getItem("cartItems");
 const cartItems = JSON.parse(cartItemsData);
 const WishlistItemsData = localStorage?.getItem("WishlistItems");
 const WishlistItems = JSON.parse(WishlistItemsData);

 const formdata = localStorage?.getItem("formData");
 const parseFormData = JSON.parse(formdata);

 function closeModal() {
  setShowProfileModal(false);
 }

 function openModal() {
  setShowProfileModal(true);
 }

 return (
  <>
   <Account showProfileModal={showProfileModal} closeModal={closeModal} />
   <header className="border-b bg-white font-sans min-h-[60px] px-10 py-3 relative tracking-wide relative z-10">
    <div className="flex flex-wrap items-center max-lg:gap-y-6 max-sm:gap-x-4">
     <Link to="/">
      <div className="w-36 font-bold text-3xl">Logo</div>
     </Link>
     <div
      id="collapseMenu"
      className="max-lg:hidden lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
     >
      <button
       id="toggleClose"
       className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
      >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 fill-black"
        viewBox="0 0 320.591 320.591"
       >
        <path
         d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
         data-original="#000000"
        ></path>
        <path
         d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
         data-original="#000000"
        ></path>
       </svg>
      </button>

      <ul className="lg:flex lg:gap-x-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
       <li className="mb-6 hidden max-lg:block">
        <Link to="/" onClick={() => handleButtonClick("Home")} >
         <img
          src="https://readymadeui.com/readymadeui.svg"
          alt="logo"
          className="w-36"
         />
        </Link>
       </li>
       <li className="max-lg:border-b max-lg:py-3">
        <Link
         to="/"
         onClick={() => handleButtonClick("Home")}
         className={`hover:text-[#007bff] text-sm font-bold ${
            activeButton === "Home" ? "text-[#007bff]" : "text-gray-600"
           }`}
        >
         Home
        </Link>
       </li>
       <li className="group max-lg:border-b max-lg:py-3 relative">
        {parts[1] == "" ? (
         <a
          href="#weekly"
          onClick={() => handleButtonClick("weekly")}
          className={`hover:text-[#007bff] text-sm font-bold ${
            activeButton === "weekly" ? "text-[#007bff]" : "text-gray-600"
           }`}
         >
          Weekly Special
         </a>
        ) : (
         <Link
          to={"/#weekly"}
          onClick={() => handleButtonClick("weekly")}
          className={`hover:text-[#007bff] text-sm font-bold ${
            activeButton === "weekly" ? "text-[#007bff]" : "text-gray-600"
           }`}
         >
          Weekly Special
         </Link>
        )}
       </li>
       <li className={`group max-lg:border-b max-lg:py-3 relative`}>
        {parts[1] == "" ? (
         <a
          href="#feauters"
          onClick={() => handleButtonClick("products")}
          className={`hover:text-[#007bff] text-sm font-bold ${
            activeButton === "Home" ? "text-[#007bff]" : "text-gray-600"
           }`}
         >
          Feature Products
         </a>
        ) : (
         <Link
          to={"/#feauters"}
          onClick={() => handleButtonClick("feauters")}
          className={`hover:text-[#007bff] text-sm font-bold ${
            activeButton === "feauters" ? "text-[#007bff]" : "text-gray-600"
           }`}
         >
          Feature Products
         </Link>
        )}
       </li>
       <li className="group max-lg:border-b max-lg:py-3 relative">
        {parts[1] == "" ? (
         <a
          href="#fruites"
          onClick={() => handleButtonClick("fruites")}
          className={`hover:text-[#007bff] text-sm font-bold ${
            activeButton === "fruites" ? "text-[#007bff]" : "text-gray-600"
           }`}
         >
          Fresh fruits
         </a>
        ) : (
         <Link
          to={"/#fruites"}
          className={`hover:text-[#007bff] text-sm font-bold ${
            activeButton === "fruits" ? "text-[#007bff]" : "text-gray-600"
           }`}
           onClick={() => handleButtonClick("fruits")}
         >
          Fresh fruits
         </Link>
        )}
       </li>
       <li className="max-lg:border-b max-lg:py-3">
        {parts[1] == "" ? (
         <a
          href="#vagitable"
          onClick={() => handleButtonClick("vagitable")}
          className={`hover:text-[#007bff] text-sm font-bold ${
         activeButton === "vagitable" ? "text-[#007bff]" : "text-gray-600"
        }`}
         >
          Fresh Vegetables
         </a>
        ) : (
         <Link
         onClick={() => handleButtonClick("vagitable")}
          to={"/#vagitable"}
          className={`hover:text-[#007bff] text-sm font-bold ${
         activeButton === "vagitable" ? "text-[#007bff]" : "text-gray-600"
        }`}
         >
          Fresh Vegetables
         </Link>
        )}
       </li>
       <li className="group max-lg:border-b max-lg:py-3 relative">
        {parts[1] == "" ? (
         <a
          href="#blog"
          onClick={() => handleButtonClick("blog")}
          className={`hover:text-[#007bff] text-sm font-bold ${
         activeButton === "blog" ? "text-[#007bff]" : "text-gray-600"
        }`}
         >
          Blog
         </a>
        ) : (
         <Link
          to={"/#blog"}
          className={`hover:text-[#007bff] text-sm font-bold ${
         activeButton === "blog" ? "text-[#007bff]" : "text-gray-600"
        }`}
         >
          Blog
         </Link>
        )}
       </li>
      </ul>
     </div>

     <div className="flex items-center ml-auto space-x-8">
      <span className="relative">
       <Link to={"/wishlist"}>
        <Heart />
        <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
         {WishlistItems?.length}
        </span>
       </Link>
      </span>
      <span className="relative">
       <Link to={"/cart"}>
        <ShoppingCart />
       </Link>
       <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
        {cartItems?.length}
       </span>
      </span>

      <Link
       to={
        parseFormData && parseFormData.isLogedIn ? "/user-profile" : "/login"
       }
       //  onClick={openModal}
       className="relative flex items-center gap-2 cursor-pointer text-[#000] hover:text-[#007bff] fill-[#000] hover:fill-[#007bff]"
      >
       {parseFormData && !!parseFormData?.isLogedIn && <User />}
       {parseFormData && parseFormData?.isLogedIn ? "Profile" : "Login"}
      </Link>
      <button id="toggleOpen" className="lg:hidden">
       <Menu />
      </button>
     </div>
    </div>

    <div className="flex items-center gap-3 text-gray-500 bg-gray-100 border border-transparent focus-within:border-blue-500 focus-within:bg-transparent px-3 rounded-full h-10 lg:w-2/4 mt-3 mx-auto max-lg:mt-6">
     <label htmlFor="searchFilter">
      <Search />
     </label>
     <input
      id="searchFilter"
      name="searchFilter"
      type="text"
      placeholder="Search..."
      className="w-full outline-none bg-transparent text-gray-600 font-semibold text-sm"
     />
    </div>
   </header>
  </>
 );
};

export default Navbar;
