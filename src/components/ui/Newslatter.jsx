import React from "react";

const Newslatter = () => {
 return (
  <div className="bg-gradient-to-t from-gray-800 to-gray-700 text-white font-[sans-serif] p-6">
   <div className="grid md:grid-cols-2 items-center sm:gap-8 max-w-6xl mx-auto min-h-[50px]">
    <div>
     <h6 className="sm:text-2xl text-xl text-gray-300 mb-1">
      Subscribe today to hear first about our sales
     </h6>
     {/* <h3 className ="sm:text-5xl text-3xl font-bold uppercase">Newsletter</h3> */}
    </div>
    <div className="bg-gray-100 flex px-2 py-1 rounded-full">
     <input
      type="email"
      placeholder="Enter your email"
      className="w-full outline-none bg-transparent text-sm text-[#333] px-4 py-3"
     />
     <button
      type="button"
      className="bg-gray-700 hover:bg-gray-800 transition-all text-white font-semibold text-sm rounded-full px-8 py-3"
     >
      Submit
     </button>
    </div>
   </div>
  </div>
 );
};

export default Newslatter;
