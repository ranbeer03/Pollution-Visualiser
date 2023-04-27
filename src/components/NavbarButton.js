import React, { useState } from 'react';
import './NavbarButton.css';

function NavbarButton({ onSelectionChange }) {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
    onSelectionChange(buttonNumber);
  };

  return (
    <div className="navbar-button">
      <button
        className={`btn${selectedButton === 1 ? ' selected' : ''}`}
        onClick={() => handleClick(1)}
      >
        CSV
      </button>
      <button
        className={`btn${selectedButton === 2 ? ' selected' : ''}`}
        onClick={() => handleClick(2)}
      >
        SHP
      </button>
      <button
        className={`btn${selectedButton === 3 ? ' selected' : ''}`}
        onClick={() => handleClick(3)}
      >
        PNG
      </button>
    </div>
  );
}

export default NavbarButton;
