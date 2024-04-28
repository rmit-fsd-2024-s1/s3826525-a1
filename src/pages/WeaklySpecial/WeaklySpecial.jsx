import AvailibiltyFilter from "./AvailibiltyFilter";
import BransFilter from "./BransFilter";
import PriceFilter from "./PriceFilter";
import WeaklySpecialsData from "./WeaklySpecialsData";

const WeaklySpecial = () => {
 return (
  <>
   <div id="weakly-special" className="weakly-special">
    <h2 className="text-center text-3xl font-semibold my-6">Weakly Special</h2>
    <div className="flex gap-3">
     <div className="w-[15%]">
      <PriceFilter />
      <BransFilter />
      <AvailibiltyFilter />
     </div>
     <div className="flex-1 bg-gray-200">
      <WeaklySpecialsData />
     </div>
    </div>
   </div>
  </>
 );
};

export default WeaklySpecial;
