import React, { useState } from 'react';

const Form = ({ adicionarItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
        adicionarItem(inputValue);
        setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Adicionar nova ideia"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default Form;