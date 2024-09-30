import PropTypes from 'prop-types';
const Cart = ({cart, setCart}) => {
  const removeItems = () => {
    setCart([]);
  }
  const removeItem = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    setCart(updatedCart);
  }
  const total = () => cart.reduce((sum, item) => sum + item.productPrice, 0);

  return (
    <div className="border mt-4 p-3 min-w-[160px] md:min-w-[240px]">
       <h2 className="font-bold text-lg">Cart</h2>
       <hr className="my-4" />
       {cart.length === 0 && (
        <p className="text-gray-400">Shopping cart is empty</p>
      )}
       <ul>
            {cart.map((cartItem,i) => (
                <li className="flex justify-between items-center" key={i}>
                    <div className='flex justify-center items-center'>
                      <button onClick={() => removeItem(i)} className='flex justify-center items-center pb-[2px] mr-2 w-4 h-4 bg-red-400 rounded-full text-white'>-</button>
                      <span>{cartItem.productName}</span>
                    </div>
                    <span>{cartItem.productPrice}$</span>
                </li>
            ))}
        </ul>
       <hr className="my-4" />
       <div className="flex justify-between items-center pb-4">
              <span>Total:</span>
              <span className="font-bold text-lg">{total()} $</span>
       </div>
       <button onClick={() => removeItems()} className="bg-red-600 text-white w-full px-3 py-4 hover:bg-red-700">Remove All Items</button>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
  })).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Cart;