import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl tracking-widest">KNIGHT STORE</h1>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}