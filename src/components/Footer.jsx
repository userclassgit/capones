



import React, { useState, useEffect } from 'react';
import paymentImage from "../media/payments.png";
import pay1 from "../media/mastercard.png";
import pay2 from "../media/amex.png";
import pay3 from "../media/applepay.png";
import pay4 from "../media/payment0.png";
import pay5 from "../media/discover.png";
import pay6 from "../media/gpay.png";
import pay7 from "../media/shop.png";
import pay8 from "../media/visa.png";


export default function Footer() {

  return (
    <>
      <div className='footer-divider'></div>
      <div className='footer-container container'>
        <div className='footer-box'>
          <div className='footer-customer-support'>
            <h2>CUSTOMER SUPPORT</h2>
            <ul>
              <li>Contact Us</li>
              <li>In-Store Gift Card Balance</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className='footer-orders-returns'>
            <h2>ORDERS & RETURNS</h2>
            <ul>
              <li>My Account</li>
              <li>Order Tracking</li>
              <li>Buy E-Gift Card</li>
              <li>Shipping Information</li>
              <li>Returns and Exchanges</li>
            </ul>

          </div>
          <div className='footer-signup-emails'>
            <h2>SIGN UP FOR EMAILS & GET 10% OFF!</h2>
            <div className='footer-input-section'>
              <input type='text' placeholder='Enter your email' />
              <button type='button'>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='footer-language-select'>
          <select name="language-select">
            <option>English</option>
            <option>French</option>
            <option>Swahili</option>
          </select>
        </div>
        <div className='footer-copywrite'>
          <p>&copy;CAPONES All rights reserved.</p>
        </div>
      </div>
    </>
  );
};
