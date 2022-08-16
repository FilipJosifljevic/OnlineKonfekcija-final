import './Navbar.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({click}) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((quantity, item) => quantity + Number(item.quantity), 0);
    }

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
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>

            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar;