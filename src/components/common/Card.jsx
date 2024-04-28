import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ReactStars from "react-stars";
import { Heart } from "react-feather";

const Card = ({ data, weeky }) => {
 const [star, setStar] = useState(0);

 // Retrieve the rating from local storage when component mounts
 useEffect(() => {
  const storedRating = localStorage.getItem(`rating_${data.id}`);
  if (storedRating !== null) {
   setStar(parseFloat(storedRating));
  }
 }, [data.id]);

 const addToCart = (data) => {
  const existingItems = localStorage.getItem("cartItems");
  const cartItems = existingItems ? JSON.parse(existingItems) : [];
  cartItems.push(data);
  const updatedCartItems = JSON.stringify(cartItems);
  localStorage.setItem("cartItems", updatedCartItems);
  console.log("Item added to cart:", data.id);
  Swal.fire({
   title: "ADDED",
   text: "Item Successfully added to the cart.",
   icon: "success",
   showConfirmButton: false,
   timer: 1000,
  });
 };

 const navigate = useNavigate();

 const addToWishlist = (data) => {
  const existingItems = localStorage.getItem("WishlistItems");
  const cartItems = existingItems ? JSON.parse(existingItems) : [];
  cartItems.push(data);
  const updatedCartItems = JSON.stringify(cartItems);
  localStorage.setItem("WishlistItems", updatedCartItems);
  console.log("Item added to Wishlist:", data.id);
  Swal.fire({
   title: "ADDED",
   text: "Item Successfully added to Wish List.",
   icon: "success",
   showConfirmButton: false,
   timer: 1000,
  });
 };

 const ratingChanged = (newRating) => {
  setStar(newRating);
  localStorage.setItem(`rating_${data.id}`, newRating);
 };

 return (
  <div className="bg-gray-50 shadow-md overflow-hidden rounded cursor-pointer hover:-translate-y-2 transition-all relative ">
   <div
    onClick={() => addToWishlist(data)}
    className="bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3"
   >
    <Heart />
   </div>
   {weeky && (
    <div className="bg-red-700 text-white w-24 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 left-3">
     20% Off
    </div>
   )}
   <div
    onClick={() => {
     navigate("/detail", { state: data });
    }}
    className="w-11/12 h-[220px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4"
   >
    <img
     src={data?.image}
     alt="Product 1"
     className="h-full w-full object-contain"
    />
   </div>
   <div className="p-4">
    <h3
     onClick={() => {
      navigate("/detail", { state: data });
     }}
     className="text-lg font-semibold text-gray-800"
    >
     {data?.name}
    </h3>
    <p
     onClick={() => {
      navigate("/detail", { state: data });
     }}
     className="text-gray-500 text-sm mt-1"
    >
     {data?.description}
    </p>
    <h4
     onClick={() => {
      navigate("/detail", { state: data });
     }}
     className="text-lg text-gray-700 font-bold mt-1"
    >
     {data?.price}
    </h4>
    <div className="flex space-x-2 mt-3">
     <ReactStars
      count={5}
      value={star}
      onChange={ratingChanged}
      size={24}
      color2={"#ffd700"}
     />
    </div>
    <button
     type="button"
     className="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full"
     onClick={() => addToCart(data)}
    >
     Add to cart
    </button>
   </div>
  </div>
 );
};

export default Card;
