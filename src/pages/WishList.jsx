import { Main } from "../layouts/Main";
import Card from "../components/common/Card";
const WishList = () => {
 const WishlistItemsData = localStorage?.getItem("WishlistItems");
 const WishlistItems = JSON.parse(WishlistItemsData);

 return (
  <Main>
   <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
    <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
     WishList Items
    </h2>

    {WishlistItems ? (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {WishlistItems?.map((products, p_id) => (
       <Card data={products} key={p_id} />
      ))}
     </div>
    ) : (
     "No items in the wishlist"
    )}
   </div>
  </Main>
 );
};

export default WishList;
