import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;
