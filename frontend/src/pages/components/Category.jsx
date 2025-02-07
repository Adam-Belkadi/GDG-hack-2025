import React from "react";
import "./Category.css";

const Button = ({ category, onClick }) => {
  return (
    <button className="category-button" onClick={onClick}>
      {category}
    </button>
  );
};

export default Button;