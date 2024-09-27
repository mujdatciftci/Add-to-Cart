
import PropTypes from 'prop-types';

const Cart = ({cart}) => {
  return (
    <div className="border mt-4 p-3 min-w-[160px] md:min-w-[240px]">
       <h2 className="font-bold text-lg">Cart</h2>
       <hr className="my-4" />
       <ul>
            {cart.map((cartItem,i) => (
                <li className="flex justify-between items-center" key={i}>
                    <span>{cartItem.productName}</span>
                    <span>{cartItem.productPrice}$</span>
                </li>
            ))}
        </ul>
       <hr className="my-4" />
       <div className="flex justify-between items-center pb-4">
              <span>Total:</span>
              <span className="font-bold text-lg">4435 $</span>
       </div>
       <button className="bg-red-600 text-white w-full px-3 py-4 hover:bg-red-700">Remove All Items</button>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
  })).isRequired,
};

export default Cart;