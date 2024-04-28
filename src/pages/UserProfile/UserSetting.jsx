import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserSetting = () => {
 const Navigate = useNavigate();
 const handleLogout = () => {
  Swal.fire({
   title: "Are you sure?",
   text: "Your account will be logout",
   icon: "warning",
   showCancelButton: true,
   confirmButtonColor: "#3085d6",
   cancelButtonColor: "#d33",
   confirmButtonText: "Logout",
  }).then((result) => {
   if (result.isConfirmed) {
    console.log("the user have been logout");
    const userData = JSON.parse(localStorage.getItem('formData'));
    userData.isLogedIn = false;
    localStorage.setItem('formData', JSON.stringify(userData));
    setTimeout(() => {
     Navigate("/");
    }, 1000);
    Swal.fire({
     position: "center",
     icon: "success",
     title: "Logout",
     showConfirmButton: false,
     timer: 1000,
    });
   }
  });
 };
 return (
  <>
   <div className="flex justify-between items-center my-5 px-6">
    <Link
     to="/user-edit"
     className="text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
    >
     Edit Profile
    </Link>
    <Link
     to="/user-goal-setting"
     className="text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
    >
     Goal Setting
    </Link>
    <Link
     to="/user-meal-planing"
     className="text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
    >
     Meal Planing
    </Link>
    <button
     onClick={handleLogout}
     className="text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
    >
     Logout
    </button>
   </div>
  </>
 );
};

export default UserSetting;
