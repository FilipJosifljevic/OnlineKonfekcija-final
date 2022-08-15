import './ProductScreen.css';

import { useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import CircularProgress from '@mui/material/CircularProgress';


const ProductScreen = ({match}) => {
    const { id } = useParams();

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.getProductDetails);
    const {loading, error, product} = productDetails;

    useEffect(() => {
        if (product && id !== product._id) {
          dispatch(getProductDetails(id));
        }
      }, [dispatch, id, product]);
    
    let navigate = useNavigate();
    const addToCartHandler = () => {
        dispatch(addToCart(product._id,quantity));
        navigate('/');
    };

    return (
        <div className="ProductScreen">
            {loading ? (<div className="loadingCircle"><CircularProgress color="inherit"/></div>) : error ? (<h2>{error}</h2>) : (
                <>
                <div className="productscreen__left">
                <div className="left__image">
                    <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className="left__info">
                    <p className="left__name">{product.name}</p>
                    <p>Price: {product.price}.00 rsd</p>
                    <p>{product.description}</p>
                </div>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>
                        Price: <span>{product.price}.00 rsd</span>
                    </p>
                    <p>
                        Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
                    </p>
                    <p>
                        Quantity
                        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                            {[...Array(product.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                        </select>
                    </p>
                    <p>
                        <button type="button" onClick={addToCartHandler}>Add To Cart</button>
                    </p>
                </div>
            </div></>
            )}
            
        </div>
    );
};

export default ProductScreen;