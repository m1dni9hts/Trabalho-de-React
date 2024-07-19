// src/App.js
import React, { useState } from 'react';
import ItemIdeia from './components/ItemIdeia';
import './App.css';

function App() {
  const [ideias, setIdeias] = useState([]); // Estado para armazenar a lista de ideias
  const [novaIdeia, setNovaIdeia] = useState(""); // Estado para o valor do novo input de ideia

  // Função para adicionar uma nova ideia
  const adicionarIdeia = (e) => {
    e.preventDefault();
    if (novaIdeia.trim()) { // Verifica se a nova ideia não está vazia
      setIdeias([...ideias, { id: Date.now(), texto: novaIdeia }]); // Adiciona a nova ideia à lista
      setNovaIdeia(""); // Limpa o input
    }
  };

  // Função para remover uma ideia
  const removerIdeia = (id) => {
    setIdeias(ideias.filter(ideia => ideia.id !== id)); // Filtra a ideia a ser removida
  };

  // Função para atualizar uma ideia editada
  const atualizarIdeia = (ideiaAtualizada) => {
    setIdeias(ideias.map(ideia => (ideia.id === ideiaAtualizada.id ? ideiaAtualizada : ideia))); // Atualiza a ideia editada
  };

  return (
    <div className="App">
      <header>
        <h1>Lista de Ideias de Decoração</h1>
      </header>
      <form onSubmit={adicionarIdeia}>
        <input
          type="text"
          value={novaIdeia}
          onChange={(e) => setNovaIdeia(e.target.value)}
          placeholder="Adicione uma nova ideia"
        />
        <button type="submit">Adicionar Ideia</button>
      </form>
      {ideias.map((ideia, indice) => (
        <ItemIdeia
          key={ideia.id}
          ideia={ideia}
          indice={indice}
          removerIdeia={removerIdeia}
          atualizarIdeia={atualizarIdeia}
        />
      ))}
    </div>
  );
}

export default App;

