import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const[products, setProducts] = useState([]);
    const[cart, setCart] = useState([]);

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        if(newCart.length<5){
            setCart(newCart);
        }
        else{
            window.alert('You already added 4 products');
        }
    }

    const clearCart = () =>{
        const newCart = [];
        setCart(newCart);
    }
    
    useEffect(() => {
        fetch('data.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[]);

    return (
        <div className='main-container'>
            <div className='products-container'>
            {
                products.map(product => <Product key={product.id}
                product = {product} handleAddToCart = {handleAddToCart}
                ></Product>)
            }
        </div>
            <div className="cart-container">
                <h2 className='cart-header'>Cart Information</h2>
                {
                    cart.map((item) => 
                        <h3 key={item.id}><li>{item.name}</li></h3>
                    )}
                <div className='cart-btn-container'>
                    <button className='choose-btn'>Choose One For Me</button>
                    <button className='clear-data-btn' onClick={clearCart}>Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Products;