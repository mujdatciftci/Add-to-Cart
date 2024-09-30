import ProductItem from "./ProductItem";
import ProductData from "../ProductData";
import PropTypes from 'prop-types';

const Products = ({cart, setCart}) => {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-4">
    {ProductData.map((item,i) => <ProductItem key={i} product={item} cart={cart} setCart={setCart} />)}
    </div>
  )
}

Products.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Products;