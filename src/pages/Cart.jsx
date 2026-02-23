export default function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : null}
      
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="cart-item-details">
            <p><strong>{item.name}</strong></p>
            <p>Qty: {item.qty}</p>
            <p>${item.price * item.qty}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      
      <div className="cart-total">
        Total: ${total}
      </div>
    </div>
  );
}