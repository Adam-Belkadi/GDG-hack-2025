import React from "react";
import './Components.css';

const Button = ({ category, onClick }) => {
  return (
    <button className="category-button" onClick={onClick}>
      {category}
    </button>
  );
};

export default Button;