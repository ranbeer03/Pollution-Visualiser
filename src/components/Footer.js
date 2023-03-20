import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='copyright'>
        &copy; {2023} King's College London. All rights reserved.
      </div>
    </div> 
  );
}

export default Footer;