import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h2>Modern E-Commerce Experience</h2>
      <p>Minimal. Dark. Powerful.</p>
      <Link to="/shop">Shop Now</Link>
    </div>
  );
}
