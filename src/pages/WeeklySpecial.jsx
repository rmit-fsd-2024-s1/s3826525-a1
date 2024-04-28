import React from "react";
import { Main } from "../layouts/Main";
import { weeklySpecial } from "../data";
import Card from "../components/common/Card";

const WeeklySpecial = () => {
 return (
  <Main>
   <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
     Weekly Special
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     {weeklySpecial?.map((products, s_id) => (
      <Card data={products} weeky={true} key={s_id} />
     ))}
    </div>
   </div>
  </Main>
 );
};

export default WeeklySpecial;
