import Header from "./components/header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
   const [cart, setCart] = useState([]);
  return (
    <div className="app container mx-auto px-8">
      <Header cart={cart} />
      <div className="flex flex-col-reverse sm:flex-row justify-center md:justify-between gap-5">
        <Products cart={cart} setCart={setCart}/>
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

export default App;
