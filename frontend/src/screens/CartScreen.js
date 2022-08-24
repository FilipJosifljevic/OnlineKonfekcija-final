import "./CartScreen.css";
import CartItem from "../components/CartItem";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const quantityChangeHandler = (id, quantity) => {
    dispatch(addToCart(id, quantity));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce(
      (quantity, item) => Number(item.quantity) + quantity,
      0
    );
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (price, item) => item.price * item.quantity + price,
      0
    );
  };
  return (
    <div className="CartScreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your Cart Is Empty <br />
            <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              quantityChangeHandler={quantityChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>{getCartTotal().toFixed(2)} rsd</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
