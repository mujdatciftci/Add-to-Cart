

import PropTypes from 'prop-types';

const ProductItem = ({product, setCart}) => {
       const addToCart = (product) => {
            setCart((prevState) => [...prevState, product]);
       }
  return (
    <div className="border p-3 min-w-[200px] ">
        <img className="w-full h-[300px]" src={product.productImage} alt="" />
      <div className="product-info my-4 flex justify-between">
        <div>
          <h2 className="text-lg font-bold">{product.productName}</h2>
          <span>{product.productPrice}$</span>
        </div>
        <button onClick={() => addToCart(product)} className="btn bg-orange-400 px-3 text-stone-50 hover:bg-orange-500 ">Add to Cart</button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    productImage: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
  }).isRequired,
  setCart: PropTypes.func.isRequired,
};

export default ProductItem;
