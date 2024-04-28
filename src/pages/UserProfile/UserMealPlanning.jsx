const UserMealPlanning = () => {
 return (
  <>
   <div className="personalize-profile w-full h-screen flex flex-col items-center justify-center bg-gray-500">
    <div className="w-1/2 flex gap-8 items-center justify-center flex-col bg-white rounded-md p-10">
     <h2 className="capitalize font-semibold text-4xl pb-4">Goal Setting</h2>

     <ul className="grid w-full gap-6 md:grid-cols-3">
      <li>
       <input
        type="checkbox"
        id="weight-option"
        value=""
        className="hidden peer"
        required=""
       />
       <label
        htmlFor="weight-option"
        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 peer-checked:bg-gray-200"
       >
        <div className="block">
         <div className="w-full text-lg font-semibold">
          Calorie Requirements
         </div>
        </div>
       </label>
      </li>
      <li>
       <input
        type="checkbox"
        id="muscle-option"
        value=""
        className="hidden peer"
       />
       <label
        htmlFor="muscle-option"
        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 peer-checked:bg-gray-200"
       >
        <div className="block">
         <div className="w-full text-lg font-semibold">Food Items</div>
        </div>
       </label>
      </li>
      <li>
       <input
        type="checkbox"
        id="overall-health-option"
        value=""
        className="hidden peer"
       />
       <label
        htmlFor="overall-health-option"
        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 peer-checked:bg-gray-200"
       >
        <div className="block">
         <div className="w-full text-lg font-semibold">
          Meal Plan Generation
         </div>
        </div>
       </label>
      </li>
     </ul>

     <ul className="grid w-full gap-6 md:grid-cols-3">
      <li>
       <input
        type="checkbox"
        id="mental-option"
        value=""
        className="hidden peer"
        required=""
       />
       <label
        htmlFor="mental-option"
        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 peer-checked:bg-gray-200"
       >
        <div className="block">
         <div className="w-full text-lg font-semibold">
          Meal Plan Generation
         </div>
        </div>
       </label>
      </li>
      <li>
       <input
        type="checkbox"
        id="social-option"
        value=""
        className="hidden peer"
       />
       <label
        htmlFor="social-option"
        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 peer-checked:bg-gray-200"
       >
        <div className="block">
         <div className="w-full text-lg font-semibold">Shopping List</div>
        </div>
       </label>
      </li>
      <li>
       <input
        type="checkbox"
        id="stress-option"
        value=""
        className="hidden peer"
       />
       <label
        htmlFor="stress-option"
        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 peer-checked:bg-gray-200"
       >
        <div className="block">
         <div className="w-full text-lg font-semibold">
          Nutritional Analysis
         </div>
        </div>
       </label>
      </li>
     </ul>

     <button
      type="submit"
      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
     >
      Save
     </button>
    </div>
   </div>
  </>
 );
};

export default UserMealPlanning;
