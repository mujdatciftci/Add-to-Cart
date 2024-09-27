import { IoMdCart } from "react-icons/io";
const CartIcon = () => {
  return (
       <div className="relative">
              <IoMdCart className="text-3xl" />
              <span className="bg-red-600 text-sm w-4 h-4 flex 
              justify-center items-center rounded-full absolute -top-1 -right-1 text-white ">0</span>
       </div>
  )
}

export default CartIcon