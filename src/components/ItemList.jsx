import React from 'react';
import Item from './Item';

const ItemList = ({ items, editarItem, removerItem }) => {
  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} id={index} item={item} 
        editarItem={editarItem} removerItem={removerItem}/>
      ))}
    </div>
  );
};

export default ItemList;