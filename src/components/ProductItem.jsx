import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/store";

const ProductItem = ({productItem}) => {
  const {productName, productPrice, productImage} = productItem;
const cart = useSelector((state) => state.cart);
const {add} = cartActions;
const dispatch = useDispatch();
  
const addToCart = (productItem) => {
  dispatch(add(productItem));
}
  return (
    <div className="border p-3 mx-auto min-w-[300px] 2xl:min-w-[266px]">
      <img className="w-full h-[300px]" src={productImage} alt="" />
      <div className="product-info my-4 flex justify-between">
        <div>
          <h2 className="text-lg font-bold">{productName}</h2>
          <span>{productPrice}$</span>
        </div>
        <button
          onClick={() => addToCart(productItem)}
          className=" bg-orange-400 px-3 text-stone-50 hover:bg-orange-500 text-sm lg:text-base "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
