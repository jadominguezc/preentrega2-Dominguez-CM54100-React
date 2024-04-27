import React from 'react';
import '../css/itemDetail.css';

const ItemDetail = ({ name, description, category, price, picture }) => {
  return (
    <div className="item-detail">
      
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{category}</p>
      <p>{price}</p>
      <img src={picture}/>
    </div>
  );
}

export default ItemDetail;
