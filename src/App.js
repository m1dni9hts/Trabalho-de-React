import React, { useState } from 'react';
import Header from './components/Header';
import ItemList from './components/ItemList';
import Formulário from './components/Formulário';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);

  const adicionarItem = (item) => {
    setItems([items, item]);
  };

  const editarItem = (id, newItem) => {
    setItems(items.map((item, index) => (index === id ? newItem : item)));
  };

  const removerItem = (id) => {
    setItems(items.filter((_, index) => index !== id));
  };

  return (
    <div className="App">
      <Header/>
      <Formulário adicionarItem={adicionarItem} />
      <ItemList items={items} editarItem={editarItem} removerItem={removerItem} />
    </div>
  );
};

export default App;