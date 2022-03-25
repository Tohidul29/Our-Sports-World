import React from 'react';
import './Product.css';
import {BsFillCartFill} from 'react-icons/bs'

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const{img, name, price} = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <h3>Price: ${price}</h3>
            <div>
                <button onClick={() => handleAddToCart(product)} className='cart-btn'>Add To Cart <BsFillCartFill></BsFillCartFill></button>
            </div>

        </div>
    );
};

export default Product;