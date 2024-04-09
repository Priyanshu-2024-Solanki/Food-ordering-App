import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data , showItem , setShowIndex}) => {
    const [on , setOn] = useState(false);
    const clickHandle = () => {
        setShowIndex();
        setOn(!on);
    }
  return (
    <div
      className="w-1/2 mx-auto my-4 bg-orange-50 shadow-lg p-4 hover:cursor-pointerhover:bg-orange-100"
    >
      <div className="flex justify-between" onClick={clickHandle}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        {(!showItem  || (showItem && !on)) &&  <span>⬇️</span>}
        {showItem && on && <span>⬆️</span>}
      </div>
      {showItem && on && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
