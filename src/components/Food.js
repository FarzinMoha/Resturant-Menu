import React from "react";

function Food(props) {
  const { title, price, text, image } = props.food;
  return (
    <div className="food-menu">
      <img className="menu-img" src={image} alt={title} />
      <div className="food-info">
        <div className="food-info-head">
          <p className="food-info-head-title">{title}</p>
          <p className="food-info-head-price">{price}$</p>
        </div>
        <p className="food-info-head-text">{text}</p>
      </div>
    </div>
  );
}

export default Food;
