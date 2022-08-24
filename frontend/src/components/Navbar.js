import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useLogOut } from "../hooks/useLogOut";
import { useAuthContext } from "../context/useAuthContext";

import PersonIcon from "@mui/icons-material/Person";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce(
      (quantity, item) => quantity + Number(item.quantity),
      0
    );
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { logout } = useLogOut();
  const handleLogout = () => {
    logout();
  };
  const { user } = useAuthContext();
  let navigate = useNavigate();

  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="navbar__logo">
          <h2>OnlineKonfekcija</h2>
        </Link>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <PersonIcon
            className="userIcon"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {user && (
              <div>
                <MenuItem className="menuItem">
                  <span>{user.email}</span>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleLogout();
                    navigate("/");
                  }}
                >
                  <LogoutIcon />
                  Logout
                </MenuItem>
              </div>
            )}

            {!user && (
              <div>
                <Link to="/login" className="menuItem">
                  <MenuItem onClick={handleClose}>
                    <LoginIcon />
                    Sign In
                  </MenuItem>
                </Link>
                <Link to="/signup" className="menuItem">
                  <MenuItem onClick={handleClose}>
                    <HowToRegIcon />
                    Sign Up
                  </MenuItem>
                </Link>
              </div>
            )}
          </Menu>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
