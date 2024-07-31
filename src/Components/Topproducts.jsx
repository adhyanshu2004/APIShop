import React from 'react';
import './Topproducts.css';
import img1 from '../assets/airdopes1.jpg';
import img2 from '../assets/airdopes2.jpg';
import img3 from '../assets/airdopes3.jpg';
import img4 from '../assets/watch1.jpg';
import img5 from '../assets/watch2.jpg';
import img6 from '../assets/watch3.jpg';
import img7 from '../assets/jeans1.jpg';
import img8 from '../assets/jeans2.jpg';
import img9 from '../assets/jeans3.jpg';
import img10 from '../assets/tshirt-1.jpg';
import img11 from '../assets/tshirt-2.jpg';
import img12 from '../assets/tshirt-3.jpg';
import img13 from '../assets/earphone1.jpg';
import img14 from '../assets/earphone2.jpg';
import img15 from '../assets/earphone3.jpg';

const Topproducts = () => {
  return (
    <div className="topproduct">
      <div className="heading">
        <h2>Top Airdopes</h2>
      </div>
      <div className="products">
        <div className="product-card">
          <img src={img1} alt="Airdopes 1" className="product-image" />
          <h3>Airpodes 111</h3>
          <p className="category">Airpodes</p>
          <p className="price">₹850.00 <span className="original-price">₹1,200.00</span></p>
          <button className="add-to-cart12">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={img2} alt="Airdopes 2" className="product-image" />
          <h3>Airpodes 115</h3>
          <p className="category">Airpodes</p>
          <p className="price">₹599.00 <span className="original-price">₹1,500.00</span></p>
          <button className="add-to-cart12">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={img3} alt="Airdopes 3" className="product-image" />
          <h3>boAt Airdopes</h3>
          <p className="category">Airpodes</p>
          <p className="price">₹499.00 <span className="original-price">₹800.00</span></p>
          <button className="add-to-cart12">Add to Cart</button>
        </div>
      </div>

      <div className="heading">
        <h2>Popular Watches</h2>
      </div>
      <div className="products">
        <div className="product-card">
          <img src={img4} alt="Watch 1" className="product-image" />
          <h3>Cosmos pro</h3>
          <p className="category">Watches</p>
          <p className="price">₹999.00 <span className="original-price">₹5,999.00</span></p>
          <button className="add-to-cart12">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={img5} alt="Watch 2" className="product-image" />
          <h3>Storm pro</h3>
          <p className="category">Watches</p>
          <p className="price">₹1,999.00 <span className="original-price">₹4,954.00</span></p>
          <button className="add-to-cart12">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={img6} alt="Watch 3" className="product-image" />
          <h3>boAt Storm</h3>
          <p className="category">Watches</p>
          <p className="price">₹599.00 <span className="original-price">₹1,000.00</span></p>
          <button className="add-to-cart12">Add to Cart</button>
        </div>
      </div>

      <div className="heading">
        <h2>Jeans Collection</h2>
      </div>
      <div className="products">
        <div className="product-card">
          <img src={img7} alt="Jeans 1" className="product-image" />
          <h3>Stylish Jeans</h3>
          <p className="category">Jeans</p>
          <p className="price">₹1,299.00 <span className="original-price">₹2,000.00</span></p>
          <button className="add-to-cart12">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={img8} alt="Jeans 2" className="product-image" />
          <h3>Classic Jeans</h3>
          <p className="category">Jeans</p>
          <p className="price">₹1,499.00 <span className="original-price">₹2,500.00</span></p>
          <button className="add-to-cart12">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={img9} alt="Jeans 3" className="product-image" />
          <h3>Fade Jeans</h3>
          <p className="category">Jeans</p>
          <p className="price">₹1,999.00 <span className="original-price">₹3,000.00</span></p>
          <button className="add-to-cart12">Add to Cart</button>
        </div>
      </div>

      <div className="heading">
        <h2>T-Shirts Collection</h2>
      </div>
      <div className="products">
        <div className="product-card">
          <img src={img10} alt="T-Shirt 1" className="product-image" />
          <h3>Casual T-Shirt</h3>
          <p className="category">T-Shirts</p>
          <p className="price">₹599.00 <span className="original-price">₹999.00</span></p>
          <button className="add-to-cart12">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={img11} alt="T-Shirt 2" className="product-image" />
          <h3>Sporty T-Shirt</h3>
          <p className="category">T-Shirts</p>
          <p className="price">₹799.00 <span className="original-price">₹1,200.00</span></p>
          <button className="add-to-cart12">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={img12} alt="T-Shirt 3" className="product-image" />
          <h3>Formal T-Shirt</h3>
          <p className="category">T-Shirts</p>
          <p className="price">₹999.00 <span className="original-price">₹1,500.00</span></p>
          <button className="add-to-cart12">Add to Cart</button>
        </div>
      </div>

      <div className="heading">
        <h2>Earphones Collection</h2>
      </div>
      <div className="products">
        <div className="product-card">
          <img src={img13} alt="Earphone 1" className="product-image" />
          <h3>Wireless Earphone</h3>
          <p className="category">Earphones</p>
          <p className="price">₹1,299.00 <span className="original-price">₹2,000.00</span></p>
          <button className="add-to-cart12">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={img14} alt="Earphone 2" className="product-image" />
          <h3>In-Ear Earphone</h3>
          <p className="category">Earphones</p>
          <p className="price">₹899.00 <span className="original-price">₹1,500.00</span></p>
          <button className="add-to-cart12">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={img15} alt="Earphone 3" className="product-image" />
          <h3>Over-Ear Earphone</h3>
          <p className="category">Earphones</p>
          <p className="price">₹1,499.00 <span className="original-price">₹2,500.00</span></p>
          <button className="add-to-cart12">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Topproducts;