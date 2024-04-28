import React, { useEffect, useState } from "react";
import { Main } from "../layouts/Main";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "react-feather";

const Cart = () => {
 const navigate = useNavigate();
 const cartItemsData = localStorage?.getItem("cartItems");
 const cartItems = JSON.parse(cartItemsData);
 const [render, setRender] = useState(false);
 const [star, setStart] = useState(localStorage.getItem("star"));

 function removeFromCart(itemIndex) {
  const cartItemsData = localStorage.getItem("cartItems");
  const cartItems = JSON.parse(cartItemsData);
  if (cartItems && itemIndex >= 0 && itemIndex < cartItems.length) {
   cartItems.splice(itemIndex, 1);
   localStorage.setItem("cartItems", JSON.stringify(cartItems));
   return cartItems;
  }
  return null;
 }
 useEffect(() => {
  removeFromCart();
 }, [render]);

  
const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
console.log('totalPrice: ', totalPrice);
 return (
  <Main>
   <div className="font-[sans-serif]">
    <div className="grid lg:grid-cols-3 gap-12 p-6">
     <div className="lg:col-span-2 bg-white divide-y">
      {cartItems?.map((items, i) => (
       <div className="flex items-center max-sm:flex-col gap-8 py-6">
        <div className="h-52 shrink-0">
         <img
          src={items?.image}
          className="w-full h-full object-contain rounded-md"
         />
        </div>
        <div className="flex items-start gap-6 max-md:flex-col w-full">
         <div>
          <h3 className="text-xl font-extrabold text-[#333] mb-6">
           {items?.name}
          </h3>
          <div>
           <h6 className="text-md text-gray-500 mt-2">
            details: <strong className="ml-2">{items?.description}</strong>
           </h6>
          </div>
          <div className="mt-6 flex flex-wrap gap-6">
           <button
            type="button"
            onClick={() => {
             removeFromCart(i);
             setRender(!render);
            }}
            className="font-semibold text-red-500 text-sm  flex items-center gap-2 shrink-0"
           >
            <Trash2 className="w-4 h-4" />
            Remove
           </button>
          </div>
         </div>
         <div className="md:ml-auto md:text-right">
          <div className="flex">
           <button
            type="button"
            className="bg-transparent mx-4 px-4 py-2 font-semibold text-[#333] text-md border"
           >
            1
           </button>
          </div>
          <div className="mt-6">
           <h4 className="text-lg font-bold text-[#333]"></h4>
           <h4 className="text-lg font-bold text-[#333] mt-2">
            {items?.price}
           </h4>
          </div>
         </div>
        </div>
       </div>
      ))}
     </div>

     <div className="shadow-md p-6">
      <h3 className="text-xl font-extrabold text-[#333] border-b pb-4">
       Order Summary
      </h3>
      <ul className="text-[#333] divide-y mt-6">
       <li className="flex flex-wrap gap-4 text-md py-4">
        Subtotal <span className="ml-auto font-bold">${totalPrice}</span>
       </li>
       <li className="flex flex-wrap gap-4 text-md py-4">
        Shipping <span className="ml-auto font-bold">$4.00</span>
       </li>
       <li className="flex flex-wrap gap-4 text-md py-4">
        Tax <span className="ml-auto font-bold">$4.00</span>
       </li>
       <li className="flex flex-wrap gap-4 text-md py-4 font-bold">
        Total <span className="ml-auto">${totalPrice+8}</span>
       </li>
      </ul>
      <button
       type="button"
       onClick={() => navigate("/checkout")}
       className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded"
      >
       Check out
      </button>
      <button
       type="button"
       className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-md"
       onClick={() => navigate("/")}
      >
       Continue Shopping
      </button>

      <div className="mt-10">
       <h3 className="text-xl font-extrabold text-[#333] mb-6">
        Apply promo code
       </h3>
       <div className="flex border border-blue-600 overflow-hidden max-w-md rounded">
        <input
         type="email"
         placeholder="Promo code"
         className="w-full outline-none bg-white text-gray-600 text-md px-4 py-2.5"
        />
        <button
         type="button"
         className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-6 text-md text-white"
        >
         Apply
        </button>
       </div>
      </div>
     </div>
    </div>
   </div>
  </Main>
 );
};

export default Cart;
