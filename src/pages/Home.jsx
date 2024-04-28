import { Main } from "../layouts/Main";
import { Carts } from "../components/ui/Carts";
import Card from "../components/common/Card";
import Slider from "../components/ui/Slider";
import Blog from "../components/ui/Blog";
import Banner from "../components/ui/Banner";
import Newslatter from "../components/ui/Newslatter";
import Features from "../components/ui/Features";
import { products, latestProducts, fruits, weeklySpecial } from "../data";
import WeaklySpecial from "./WeaklySpecial/WeaklySpecial";
import { Link } from "react-router-dom";

const Home = () => {
 return (
  <Main>
   <div className="relative h-full w-full">
    <div className="h-full min-h-[500px] w-full flex items-center">
     <div
      className="w-[70%] flex flex-col items-center justify-center text-start h-full min-h-[500px] bg-cover bg-center bg-norepeat"
      style={{
       backgroundImage: `url('https://www.freepnglogos.com/uploads/fruits-png/ways-for-kids-eat-their-fruits-and-vegetables-13.png')`,
      }}
     ></div>
     <div className="bg-[#efebeb] flex flex-col items-center justify-center text-start  h-full min-h-[500px] w-[30%]">
      <h1 className="text-[42px] font-semibold w-[80%]">Free Home Delivery</h1>{" "}
      <p className="w-[80%]">
       New Minimum starting from $49 Minimum varies on your area please see
       shipping page for details
      </p>
     </div>
    </div>
   </div>
   <Features />
   {/* <Carts /> */}
   <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full" id="weekly">
    <div className="flex items-center justify-between">
     <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
      Weekly Special
     </h2>
     <Link
      to={"/weekly-special"}
      className="text-xl font-bold text-gray-800 mb-12 hover:border-b-2 hover:border-black "
     >
      View All
     </Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     {weeklySpecial.slice(3, weeklySpecial.length)?.map((products, indx) => (
      <Card data={products} key={indx} weeky={true} />
     ))}
    </div>
   </div>
   <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full" id="feauters">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
     Feature Products
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     {products?.map((products, indx) => (
      <Card data={products} key={indx} />
     ))}
    </div>
   </div>
   {/* <Banner /> */}
   <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full" id="fruites">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
     Fresh Fruits
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     {fruits?.map((products, i) => (
      <Card data={products} key={i} />
     ))}
    </div>
   </div>
   <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full" id="vagitable">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
     Fresh Vegetables
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     {latestProducts?.map((items, index) => (
      <Card data={items} key={index} />
     ))}
    </div>
    <div className="my-6 w-full" id="blog">
     <Blog />
    </div>
   </div>
   <Newslatter />
  </Main>
 );
};

export default Home;
