import { Info } from "react-feather";
import GetOffer from "../../components/common/GetOffer";
import Navbar from "../../components/common/Navbar";
import UserSetting from "./UserSetting";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const UserProfille = () => {
 const [getUserData, setGetUserData] = useState(null);
 const [storeValue, setStoreValue] = useState(null); // This will store the goal settings data
 const Navigate = useNavigate();

 useEffect(() => {
  let storedData = localStorage.getItem("formData");
  let storedDate = localStorage.getItem("formDate");
  let storedGoalSettings = localStorage.getItem("goalSettings");

  if (storedData && storedDate) {
   const userData = JSON.parse(storedData);
   const userDate = JSON.parse(storedDate);
   setGetUserData({
    ...userData,
    storedDate: userDate,
   });
  }

  if (storedGoalSettings) {
   const goalSettingsData = JSON.parse(storedGoalSettings);
   setStoreValue(goalSettingsData); // Store the goal settings data in storeValue state
  }
 }, []);

 const handleDeleteAccount = () => {
  Swal.fire({
   title: "Do you want to delete the account?",
   showDenyButton: true,
   showCancelButton: false,
   confirmButtonText: "Yes",
   denyButtonText: "No",
  }).then((result) => {
   /* Read more about isConfirmed, isDenied below */
   if (result.isConfirmed) {
    localStorage.clear();
    setTimeout(() => {
     Navigate("/");
    }, 1000);
    Swal.fire({
     position: "center",
     icon: "success",
     title: "User account Deleted",
     showConfirmButton: false,
     timer: 1000,
    });
   } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
    setTimeout(() => {
     Swal.close();
    }, 1000);
   }
  });
 };
 return (
  <>
   <div>
    <GetOffer />
    <Navbar />
   </div>
   <div className="bg-gray-300 antialiased border">
    <div className="container mx-auto mt-[100px] mb-[50px]">
     <div>
      <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6 lg:w-4/6 xl:w-3/6 mx-auto">
       <div className="flex justify-center">
        <img
         src="https://avatars0.githubusercontent.com/u/35900628?v=4"
         alt=""
         className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
        />
       </div>
       {getUserData && (
        <div className="mt-16">
         <h1 className="font-bold capitalize flex items-center justify-center gap-1 text-center text-3xl text-gray-900">
          <span>{getUserData.firstName}</span>
          <span>{getUserData.lastName}</span>
         </h1>

         <div className="my-5 px-6">
          <button
           onClick={handleDeleteAccount}
           className="w-full text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-red-400 hover:text-white"
          >
           Delete Profile
          </button>
         </div>
         <div className="w-full">
          <h3 className="font-medium text-gray-900 text-left px-6">
           User Details
          </h3>
          <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
           <div className="w-full flex items-center gap-2 border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
            <Info />
            <span>Joining Date : </span>
            <div className="flex gap-1 capitalize">
             <span>{getUserData.storedDate}</span>
            </div>
           </div>
           <div className="w-full flex items-center gap-2 border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
            <Info />
            <span>Password : </span>
            <div className="flex gap-2">
             <span>{getUserData.password}</span>
            </div>
           </div>
           <div className="w-full flex items-center gap-2 border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
            <Info />
            <span>Email : </span>
            <div className="flex gap-2">
             <span>{getUserData.email}</span>
            </div>
           </div>
           {storeValue && (
            <div className="w-full flex items-center gap-2 border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
             <Info />
             <span>Email : </span>
             <div className="flex gap-2">
              {/* show here goal setting value  */}
              <span>{storeValue.goalSettings}</span>
             </div>
            </div>
           )}
          </div>
         </div>
         <UserSetting />
        </div>
       )}
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default UserProfille;
