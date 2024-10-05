import ProductItem from "./ProductItem";
import ProductData from "../ProductData";

const Products = () => {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-4">
    {ProductData.map((item,i) => <ProductItem key={i} productItem={item} />)}
    </div>
  )
}

export default Products;