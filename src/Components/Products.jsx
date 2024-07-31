import React, { useState, useEffect, useReducer } from 'react';
import './Products.css';
import Navbar from './Navbar';
import { getProducts, getProductsByCategory } from '../Service/Services';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom';

const initialState = {
  products: [],
  filteredProducts: [],
  searchQuery: '',
  selectedCategory: 'All',
  sortOrder: 'none',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload, filteredProducts: action.payload };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_SELECTED_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'FILTER_PRODUCTS':
      return { ...state, filteredProducts: action.payload };
    case 'SET_SORT_ORDER':
      return { ...state, sortOrder: action.payload };
    default:
      return state;
  }
};

const Products = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
 
  const [cartCount, setCartCount] = useState(0);

 
 
  const updateCartCount = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartCount(cartItems.length);
  };

  const addToCart = (product) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
  };



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = state.selectedCategory === 'All'
        ? await getProducts()
        : await getProductsByCategory(state.selectedCategory);
        dispatch({ type: 'SET_PRODUCTS', payload: products });
        
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
    updateCartCount();
  }, [state.selectedCategory]);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        const products = state.selectedCategory === 'All'
          ? await getProducts()
          : await getProductsByCategory(state.selectedCategory);
        
        dispatch({ type: 'SET_PRODUCTS', payload: products });
      } catch (error) {
        console.error('Error fetching products by category', error);
      }
    };
    
    fetchFilteredProducts();

  }, [state.selectedCategory]);

  useEffect(() => {
    let filtered = state.products;

    if (state.searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    }

    if (state.sortOrder === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (state.sortOrder === 'desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    dispatch({ type: 'FILTER_PRODUCTS', payload: filtered });
  }, [state.searchQuery, state.products, state.sortOrder]);


 

  return (
    <>
      <Navbar/>

      <div className="image-icon">
        <Link to="/Cart">
          <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
        </Link>
        <span className="cart-count">{cartCount}</span>
      </div>

       <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={state.searchQuery}
              onChange={e => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
            />
            <button className="search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
       

      <div className="products-container1">
        <div className="sidebar1">
         
          <div className="category-selection1">
            <h2>Categories</h2>
            <label>
              <input
                type="radio"
                name="category"
                value="All"
                checked={state.selectedCategory === 'All'}
                onChange={e => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: e.target.value })}
              />
              All Categories
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="men's clothing"
                checked={state.selectedCategory === "men's clothing"}
                onChange={e => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: e.target.value })}
              />
              Men's Clothing
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="jewelery"
                checked={state.selectedCategory === 'jewelery'}
                onChange={e => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: e.target.value })}
              />
              Jewelery
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="electronics"
                checked={state.selectedCategory === 'electronics'}
                onChange={e => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: e.target.value })}
              />
              Electronics
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="women's clothing"
                checked={state.selectedCategory === "women's clothing"}
                onChange={e => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: e.target.value })}
              />
              Women's Clothing
            </label>
          </div>
          <div className="sort-by">
            <label>
              <select
                value={state.sortOrder}
                onChange={e => dispatch({ type: 'SET_SORT_ORDER', payload: e.target.value })}
              >
                <option value="none">Sort By</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </label>
          </div>
        </div>

        <div className="product-list1">

          {state.filteredProducts.map(product => (
            <div key={product.id} className="product-card1">
              <img src={product.image} alt={product.title} className="product-image1" />
              <h2>{product.title}</h2>
              <p>${product.price}</p>
              <div className="btn">
             
        <button onClick={() => addToCart(product)} className='add-to-cart'>Add to Cart</button>
             
              <Link to='/Payment' state={{ price: product.price, image: product.image, description: product.title }}>
              <button className='buy-now'>Buy Now</button>
             </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;