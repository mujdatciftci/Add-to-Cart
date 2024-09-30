import { IoMdCart } from "react-icons/io";
import PropTypes from 'prop-types';
const CartIcon = ({cart}) => {

  return (
       <div className="relative">
              <IoMdCart className="text-3xl" />
              <span className="bg-red-600 text-sm w-4 h-4 flex 
              justify-center items-center rounded-full absolute -top-1 -right-1 text-white ">{cart.length}</span>
       </div>
  )
};

CartIcon.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
export default CartIcon