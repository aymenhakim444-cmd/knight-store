import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";

export default function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [qty, setQty] = useState(1);

  if (!product)
    return <h2 className="not-found">Product not found</h2>;

  return (
    <div className="product-details-container">

      <div className="product-details-grid">

        {/* IMAGE */}
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        {/* INFO */}
        <div className="product-info">

          <span className="product-category">{product.category}</span>

          <h1>{product.name}</h1>

          <p className="product-description">
            {product.description}
          </p>

          <div className="product-price">
            ${product.price}
          </div>

          {/* QUANTITY */}
          <div className="qty-selector">
            <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          {/* ADD TO CART */}
          <button
            className="add-to-cart-btn"
            onClick={() =>
              addToCart({ ...product, qty })
            }
          >
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}