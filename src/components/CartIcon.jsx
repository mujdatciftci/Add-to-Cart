import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";
const CartIcon = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
       <div className="relative">
              <IoMdCart className="text-3xl" />
              <span className="bg-red-600 text-sm w-4 h-4 flex 
              justify-center items-center rounded-full absolute -top-1 -right-1 text-white ">{cart.length}
              </span>
       </div>
  )
};

export default CartIcon