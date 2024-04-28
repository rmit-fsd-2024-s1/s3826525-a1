import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import UserData from "./userData";
import { X } from "react-feather";

const Account = ({ showProfileModal, closeModal }) => {
 return (
  <>
   <Transition appear show={showProfileModal} as={Fragment}>
    <Dialog as="div" className="relative z-20" onClose={closeModal}>
     <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
     >
      <div className="fixed inset-0 bg-black/25" />
     </Transition.Child>

     <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center text-center">
       <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
       >
        <Dialog.Panel className="relative w-1/2 h-[50vh] transform  rounded-2xl transition-all  bg-[#20354b] rounded-2xl p-4 flex items-center justify-center">
         <div
          onClick={closeModal}
          className="absolute text-white top-3 right-3"
         >
          <X className="w-5 h-5 text-gray-300 hover:text-gray-50" />
         </div>
         <UserData />
        </Dialog.Panel>
       </Transition.Child>
      </div>
     </div>
    </Dialog>
   </Transition>
  </>
 );
};

export default Account;
