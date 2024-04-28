import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserGoalSetting = () => {
 const [goalSettings, setGoalSettings] = useState({
  weightLoss: false,
  muscleGain: false,
  healthImprovement: false,
  mentalHealth: false,
  socialInteraction: false,
  stressRelief: false,
 });

 const Navigate = useNavigate();

 useEffect(() => {
  // Retrieve saved values from localStorage when component mounts
  const savedValues = JSON.parse(localStorage.getItem("goalSettings"));
  if (savedValues) {
   setGoalSettings(savedValues);
  }
 }, []);

 useEffect(() => {
  // Save checked values to localStorage whenever they change
  localStorage.setItem("goalSettings", JSON.stringify(goalSettings));
 }, [goalSettings]);

 const handleCheckboxChange = (event) => {
  const { name, checked } = event.target;
  setGoalSettings((prevSettings) => ({
   ...prevSettings,
   [name]: checked,
  }));
 };

 const handleSave = () => {
  // You can perform additional actions here if needed
  console.log("Saved to localStorage:", goalSettings);
  Navigate("/user-profile");
 };

 return (
  <>
   <div className="personalize-profile w-full h-screen flex flex-col items-center justify-center bg-gray-500">
    <div className="w-1/2 flex gap-8 items-center justify-center flex-col bg-white rounded-md p-10">
     <h2 className="capitalize font-semibold text-4xl pb-4">Goal Setting</h2>

     <ul className="grid w-full gap-6 md:grid-cols-3">
      {Object.entries(goalSettings).map(([key, value]) => (
       <li key={key}>
        <input
         type="checkbox"
         id={key}
         name={key}
         checked={value}
         onChange={handleCheckboxChange}
         className="hidden peer"
         required=""
        />
        <label
         htmlFor={key}
         className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 peer-checked:bg-gray-200"
        >
         <div className="block">
          <div className="w-full text-lg font-semibold capitalize">{key}</div>
         </div>
        </label>
       </li>
      ))}
     </ul>

     {/* Save button */}
     <button
      type="submit"
      onClick={handleSave}
      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
     >
      Save
     </button>
    </div>
   </div>
  </>
 );
};

export default UserGoalSetting;
