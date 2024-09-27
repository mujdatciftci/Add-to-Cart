const ProductItem = () => {
  return (
    <div className="border p-3 min-w-[200px] ">
        <img className="w-full h-[300px]" src="https://via.placeholder.com/200x250" alt="" />
      <div className="product-info my-4 flex justify-between">
        <div>
          <h2 className="text-lg font-bold">Product 1</h2>
          <span>324 $</span>
        </div>
        <button className="btn bg-orange-400 px-3 text-stone-50 hover:bg-orange-500 ">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
