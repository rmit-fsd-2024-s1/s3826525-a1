import React from "react";

const Banner = () => {
 return (
  <div className="relative font-[sans-serif] my-6">
   <img
    src="https://img.freepik.com/premium-vector/mega-sale-banner-with-red-ribbon-illustration_275806-126.jpg"
    alt="Banner Image"
    className=" w-full h-[250px] object-cover"
   />
   {/* <div className ="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
      <h2 className ="sm:text-4xl text-2xl font-bold mb-6">Explore the World</h2>
      <p className ="text-lg text-center text-gray-200">Embark on unforgettable journeys. Book your dream vacation today!</p>
      <a href="#!""
        className ="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out">
        Book Now
      </a>
    </div> */}
  </div>
 );
};

export default Banner;
