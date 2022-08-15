import './HomeScreen.css';
import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../redux/actions/productActions';
import Product from '../components/Product';
import CircularProgress from '@mui/material/CircularProgress';

const HomeScreen = () => {

    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
      dispatch(listProducts());
    }, [dispatch]);
    

    return (
        <div className="HomeScreen">
            <h2 className="homescreen__title">Najnoviji proizvodi</h2>
            <div className="homescreen__products">
                {loading ? ( <div className="loadingCircle"><CircularProgress color="inherit"/></div> ) : error ? (<div className="loadingCircle"><CircularProgress/></div>) : (products.map(product => (
                    <Product
                     key={product._id}
                     productId={product._id}
                     name={product.name}
                     price={product.price}
                     description={product.description}
                     imageUrl={product.imageUrl}/>
                )))}
            </div>
        </div>
    );
};

export default HomeScreen;