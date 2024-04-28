import { useState } from "react";
import { X } from "react-feather";

const GetOffer = () => {
    const [isShow,setIsShow] = useState(true)
 return (
  <>
  {isShow &&
   <div className="flex items-center max-md:flex-col bg-blue-500 text-white px-6 py-3.5 rounded font-[sans-serif]">
    <p className="text-base flex-1">
     Don't miss out on our amazing summer sale! Get up to 50% off on a wide
     range of products. Make the most of your summer shopping.
    </p>
    <div className="flex items-center max-md:mt-4">
     <button
      type="button"
      className="bg-white text-blue-500 font-semibold py-2 px-4 rounded text-sm hover:bg-slate-100 mx-6"
      >
      Get Offer
     </button>
     <X onClick={()=>setIsShow(false)} />
    </div>
   </div>
    }
  </>
 );
};

export default GetOffer;
