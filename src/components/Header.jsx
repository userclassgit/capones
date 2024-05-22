



import { useState, useEffect } from 'react';
import searchIcon from "../media/icon-search.png";
import cartIcon from "../media/icon-cart.png";
import signInIcon from "../media/icon-sign-in.png";


export default function Header() {
  const ads = [
    { index: 1, description: "50% OFF MEN'S PULLOVERS" },
    { index: 2, description: "FREE LOCAL SHIPPING" },
    { index: 3, description: "Something Else Here" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [modalOpen, setModal] = useState(false);

  function closeModal() {
    setModal(false);
  }

  function openModal() {
    setModal(true);
  };

  const adScroll = () => {
    setCurrentIndex((prevIndex) => (prevIndex === ads.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
      const interval = setInterval(adScroll, 5000);
      return () => clearInterval(interval);
    }, []);

  return (
    <>
      <div className="ad-carousel">
        {ads.map((ad, index) => (
          <div
            key={ad.index}
            className={`ad-item ${index === currentIndex ? 'active' : ''}`}>
            {ad.description}
          </div>
        ))}
      </div>

      <div className='header'>
        <div className='header-main container'>
          <div className='header-buttons'>
            <button className='search-btn'></button>
          </div>
          <h1 className='header-title'>CAPONES</h1>
          <div className='header-buttons'>
            {/* <button className='signin-btn'></button> */}
            {!modalOpen && <button onClick={openModal} className='open-modal'></button>}
              {modalOpen && (
              <>
              <div className='transparent-layer' onClick={closeModal}></div>
              <button className='open-modal'></button>
              <div className="modal">
                <button onClick={closeModal} className='close-modal'></button>
                <h2>Login</h2>
                <p>EMAIL</p>
                <input type='text'></input>
                <div className='modal-password-section'>
                  <p>PASSWORD</p>
                  <p className='pointer-text'>Forgot password?</p>
                </div>
                <input type='text'></input>
                <button className='modal-signin-btn'>SIGN IN</button>
                <p className='pointer-text'>Create account</p>
              </div></>)}
            <button className='cart-btn'></button>
          </div>



        </div>
        <div className='header-tags'>
        <div className='dropdown'>
            <h2>NEW ARRIVALS</h2>
            <div className='dropdown-items'>
              <ul>
                <li>Just in Time for Spring</li>
                <li>New Styles</li>
                <li>Lightly Fire Damaged</li>
              </ul>
            </div>
          </div>
          <div className='dropdown'>
            <h2>TRENDING</h2>
            <div className='dropdown-items'>
              <ul>
                <li>Most Popular</li>
                <li>Best Sellers</li>
              </ul>
            </div>
          </div>
          <div className='dropdown'>
            <h2>MEN</h2>
            <div className='dropdown-items'>
              <ul>
                <li>Pants</li>
                <li>Shirts</li>
                <li>Shoes</li>
              </ul>
            </div>
          </div>
          <div className='dropdown'>
            <h2>WOMEN</h2>
            <div className='dropdown-items'>
              <ul>
                <li>Pants</li>
                <li>Shirts</li>
                <li>Blouses</li>
                <li>Dresses</li>
                <li>Shoes</li>
              </ul>
            </div>
          </div>
          <div className='dropdown'>
            <h2>ACCESSORIES</h2>
            <div className='dropdown-items'>
              <ul>
                <li>Hats</li>
                <li>Scarves</li>
                <li>Sun Glasses</li>
              </ul>
            </div>
          </div>
          <div className='dropdown'>
            <h2>SALE</h2>
            <div className='dropdown-items'>
              <ul>
                <li>Hot Deals</li>
                <li>Going Fast</li>
                <li>2023 Fashion</li>
              </ul>
            </div>
          </div>
          <div className='dropdown'>
            <h2>SWEATERS</h2>
            <div className='dropdown-items'>
              <ul>
                <li>Pullovers</li>
                <li>Hoodies</li>
                <li>Ponchos</li>
                <li>Mumus</li>
                <li>Capes</li>
                <li>Jumpsuits</li>
                <li>Unisheets</li>
                <li>Muslin Body Rolls</li>
                <li>Academic and Judical Robes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
