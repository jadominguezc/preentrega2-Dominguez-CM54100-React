import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import items from '../data/getProducts'; // Importa el array de productos
import ItemList from './ItemList'; // Importa el componente ItemList

import '../css/itemListContainer.css'; // Importa los estilos CSS específicos para ItemListContainer

const ItemListContainer = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      const filtered = items.filter(item => item.category === categoryId);
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  }, [categoryId]);

  return (

    <div className="item-list-container">
      <h2 className='item-title-page'>PRODUCTOS</h2>
      <div className="item-list">
        {filteredItems.map(item => (
          <Link key={item.id} to={`/item/${item.id}`} className="item-link">
            <ItemList
              key={item.id}
              picture={item.picture}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
