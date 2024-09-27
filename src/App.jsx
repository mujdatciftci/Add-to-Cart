import Header from "./components/header";
import Products from "./components/Products";
import Cart from "./components/Cart";


function App() {
  return (
    <div className="app container mx-auto px-8">
      <Header />
      <div className="flex justify-between gap-5">
      <Products />
      <Cart />
      </div>
    </div>
  );
}

export default App;
