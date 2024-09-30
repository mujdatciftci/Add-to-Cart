import CartIcon from "./CartIcon"
import PropTypes from 'prop-types';

const Header = ({cart}) => {
  return (
    <div className="flex justify-between items-center">
       <h1 className="text-4xl py-5">Add to Cart</h1>
       <CartIcon cart={cart} />
    </div>
  )
}

Header.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
export default Header