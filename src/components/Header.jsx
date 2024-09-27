import CartIcon from "./CartIcon"

const Header = () => {
  return (
    <div className="flex justify-between items-center">
       <h1 className="text-4xl py-5">Add to Cart</h1>
       <CartIcon />
    </div>
  )
}

export default Header