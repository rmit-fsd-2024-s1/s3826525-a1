import { useEffect, useState } from "react";
import UserImage from "../../assets/Images/user.png";
import { Key, LogOut, Mail, Settings, User } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserData = () => {
 const [getUserData, setGetUserData] = useState(null);
 const [showSetting, setShowSetting] = useState(false);

 let Navigate = useNavigate();

 const handleShowSetting = () => {
  setShowSetting(!showSetting);
 };
 const hideSettingsOptions = () => {
  setShowSetting(false);
 };

 useEffect(() => {
  let storedData = localStorage.getItem("formData");
  let storedDate = localStorage.getItem("formDate");
  if (storedData && storedDate) {
   setGetUserData({
    ...JSON.parse(storedData),
    storedDate: JSON.parse(storedDate),
   });
  }
 }, []);

 const logOut = () => {
  localStorage.removeItem("formData");
  setGetUserData(null);
  closeModal();
 };

 const deleteUser = () => {
  Swal.fire({
   title: "Are you sure?",
   text: "You won't be able to revert this!",
   icon: "warning",
   showCancelButton: true,
   confirmButtonColor: "#3085d6",
   cancelButtonColor: "#d33",
   confirmButtonText: "Yes, delete it!",
  }).then((result) => {
   if (result.isConfirmed) {
    localStorage.clear();
    setGetUserData(null);
    setTimeout(() => {
     Navigate("/login");
    }, 1000);
    Swal.fire({
     title: "Deleted!",
     text: "User  has been deleted.",
     icon: "success",
     showConfirmButton: false,
     timer: 1000,
    });
   }
  });
 };
 return (
  <div className="w-full">
   <div className="flex h-full items-center justify-center p-6 rounded-xl">
    <div className="flex-1 flex items-center justify-center">
     <img
      src={UserImage}
      alt=""
      className="w-36 h-36 mx-auto rounded-full dark:bg-gray-500 bg-white aspect-square"
     />
    </div>

    <div className="flex-auto flex flex-col text-white">
     {getUserData && (
      <ul className="flex flex-col gap-4">
       <li className="flex items-center gap-2">
        <User />
        <div className="flex gap-2 capitalize">
         <span>{getUserData.firstName}</span>
         <span>{getUserData.lastName}</span>
        </div>
       </li>
       <li className="flex items-center gap-2">
        <Key />
        <div className="flex gap-2">
         <span>{getUserData.password}</span>
        </div>
       </li>
       <li className="flex items-center gap-2">
        <Mail />
        <div className="flex gap-2">
         <span>{getUserData.email}</span>
        </div>
       </li>
      </ul>
     )}
     <div className="flex items-center justify-between mt-4">
      <div className="relative w-1/2">
       <div
        onClick={handleShowSetting}
        className="flex items-center gap-2 hover:text-orange-300"
       >
        <Settings className="w-4 h-4" />
        <span className="">Setting</span>
       </div>
       {showSetting && (
        <div className="absolute rounded bg-gray-800  right-0 top-0">
         <div className="w-[150px] flex flex-col items-start text-left justify-start p-2">
          <Link
           to="/edit-profile"
           onClick={hideSettingsOptions}
           className=" p-2 w-full text-sm capitalize hover:bg-gray-700"
          >
           Edit profile
          </Link>
          <div
           onClick={deleteUser}
           className=" p-2 w-full text-sm capitalize hover:bg-gray-700"
          >
           delete user
          </div>
          <Link
           to="/goal-setting"
           onClick={hideSettingsOptions}
           className=" p-2 w-full text-sm capitalize hover:bg-gray-700"
          >
           goal setting
          </Link>
          <Link
           to="/meal-planing"
           onClick={hideSettingsOptions}
           className=" p-2 w-full text-sm capitalize hover:bg-gray-700"
          >
           meal planing
          </Link>
         </div>
        </div>
       )}
      </div>
      <div
       onClick={logOut}
       className="log-out flex items-center gap-3 hover:text-orange-300"
      >
       <span>Log Out</span>
       <span>
        <LogOut className="w-4 h-4" />
       </span>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default UserData;
