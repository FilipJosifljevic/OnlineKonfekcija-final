import "./SideDrawer.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useAuthContext } from "../context/useAuthContext";
import { useLogOut } from "../hooks/useLogOut";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce(
      (quantity, item) => quantity + Number(item.quantity),
      0
    );
  };

  const { user } = useAuthContext();

  const { logout } = useLogOut();
  const handleLogout = () => {
    logout();
  };
  let navigate = useNavigate();
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>
              Cart{" "}
              <span className="sidedrawer__cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        {!user && (
          <li>
            <Link to="/login" className="menuItem">
              <LoginIcon />
              Sign In
            </Link>
          </li>
        )}
        {!user && (
          <li>
            <Link to="/signup" className="menuItem">
              <HowToRegIcon />
              Sign Up
            </Link>
          </li>
        )}
        {user && (
          <li>
            <Link
              to="/"
              onClick={() => {
                handleLogout();
                navigate("/");
              }}
            >
              <LogoutIcon />
              Logout
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideDrawer;
