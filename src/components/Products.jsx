import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-12 sm:p-0 gap-5 mt-4">
       <ProductItem />
       <ProductItem />
       <ProductItem />
       <ProductItem />
       <ProductItem />
       <ProductItem />
    </div>
  )
}

export default Products