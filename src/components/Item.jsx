import React, { useState } from 'react';

const Item = ({ id, item, editarItem, removerItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewItem] = useState(item);

  const handleEdit = () => {
    editarItem(id, newItem);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      ) : (
        <span>{item}</span>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Salvar' : 'Editar'}
      </button>
      <button onClick={() => removerItem(id)}>Remover</button>
    </div>
  );
};

export default Item;