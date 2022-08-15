import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = ({ item, imageUrl, quantityChangeHandler, removeHandler }) => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <Link to={`/product/${item.product}`} className="cartitem__name">
                <p>{item.name}</p>
            </Link>
            <p className="cartitem__price">{item.price}</p>
            <select className="cartitem__select" value={item.quantity} onChange={(e) => quantityChangeHandler(item.product, e.target.value)}>
                {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x+1} value={x+1}>{x+1}</option>
                ))}
            </select>
            <button className="cartitem__deleteBtn" onClick={() => removeHandler(item.product)}>
                <i className="fa-regular fa-trash-can"></i>
            </button>
        </div>
    );
};

export default CartItem;