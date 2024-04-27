import React from 'react';
import { useParams } from 'react-router-dom';
import items from '../data/getProducts';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const selectedItem = items.find(item => item.id === id);

  return (
    <div>
      <h2>Detalle del Producto</h2>
      {selectedItem && (
        <ItemDetail
          name={selectedItem.name}
          description={selectedItem.description}
          category={selectedItem.category}
          price={selectedItem.price}
        />
      )}
    </div>
  );
}

export default ItemDetailContainer;

