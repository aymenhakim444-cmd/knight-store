import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import  {products}  from "../data/products";

export default function Shop({ addToCart }) {
  const [sort, setSort] = useState("default");

  const sortedProducts = useMemo(() => {
    let temp = [...products];
    if (sort === "low") temp.sort((a, b) => a.price - b.price);
    if (sort === "high") temp.sort((a, b) => b.price - a.price);
    return temp;
  }, [sort]);

  return (
    <div className="shop-page-container">
      <select 
        className="sort-select" 
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="default">Sort by Price</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>

      <div className="shop-grid">
        {sortedProducts.map((product) => (

            <div key={product.id} className="shop-card">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
            </Link>
            <div className="shop-card-content"> 
                <Link to={`/product/${product.id}`}>
                <h2>{product.name}</h2>
                </Link>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
}