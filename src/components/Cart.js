import { useDispatch, useSelector } from "react-redux";
import { WithoutAddButton } from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart(cardItems));
  };
  const cardItems = useSelector((store) => store.cart.item);
  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>
      <div className="flex justify-center mb-6">
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-400 transition duration-300"
          onClick={handleClick}
        >
          Clear Cart
        </button>
      </div>
      {cardItems.length === 0 ? (
        <p className="text-lg text-center">
          Your Cart is empty. Add some items to your cart.
        </p>
      ) : (
        <div className="w-1/2 mx-auto">
          <WithoutAddButton items={cardItems} />
          
        </div>
      )}
    </div>
  );
};

export default Cart;
