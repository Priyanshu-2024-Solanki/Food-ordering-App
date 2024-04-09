import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constant";
import { addItem, removeItem } from "../utils/cartSlice";
import { connected } from "process";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <span>{item?.card?.info?.name}</span>
            <span>
              {" "}
              - ₹{" "}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            <p className="text-xs py-4">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 mx-2 flex justify-end items-end">
            <button
              className="absolute bg-green-100 p-1 shadow-sm rounded-md hover:bg-green-200"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
            <img
              src={IMG_URL + item?.card?.info?.imageId}
              className="rounded-xl"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export const WithoutAddButton = ({ items }) => {
  const dispatch = useDispatch();
  const handleRemoveClick = (index) => {
    // console.log(index);
    dispatch(removeItem(index));
  };
  return (
    <div>
      {items.map((item,index) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <span>{item?.card?.info?.name}</span>
            <span>
              {" "}
              - ₹{" "}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            <p className="text-xs py-4">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 mx-2 flex items-end justify-end">
            <button
              className="absolute bg-red-100 p-1 shadow-sm rounded-md hover:bg-red-200"
              onClick={() => handleRemoveClick(index)}
            >
              Remove
            </button>
            <img
              src={IMG_URL + item?.card?.info?.imageId}
              className="rounded-xl"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
