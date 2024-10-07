import Header from "./components/header";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
   
  return (
    <div className="app container mx-auto px-8">
      <Header />
      <div className="flex flex-col-reverse sm:flex-row justify-center md:justify-between gap-5">
        <Products />
        <Cart />
      </div>
    </div>
  );
}

export default App;
