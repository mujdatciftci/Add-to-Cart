
const Cart = () => {
  return (
    <div className="border mt-4 p-3 min-w-[160px] md:min-w-[220px]">
       <h2 className="font-bold text-lg">Cart</h2>
       <hr className="my-4" />
       <ul>
              <li className="flex justify-between items-center">
                     <span>Product 1</span>
                     <span className="font-bold text-lg">345 $</span>
              </li>
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

export default Cart