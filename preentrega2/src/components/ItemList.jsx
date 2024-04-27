import React from 'react';
import { Link } from 'react-router-dom';

import '../css/itemList.css';

const ItemList = ({ id, name, description, price, picture }) => {
  return (
    <div className="item-card">
      <Link to={`/item/${id}`} >
        <img src={picture} alt={name} className="item-card-picture"/>
        <h3 className="item-card-title">{name}</h3>
        <p className="item-card-description">{description}</p>
        <p className="item-card-price">${price}</p>
        <p className="item-card-id">{id}</p>
        <button className="item-card-button">Ver Info</button>
      </Link>
    </div>
  );
};

export default ItemList;