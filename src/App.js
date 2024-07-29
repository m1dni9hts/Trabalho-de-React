// src/App.js
import React, { useState } from 'react';
import ItemNota from './components/ItemNota';
import './App.css';

function App() {
  const [Notas, setNotas] = useState([]); // Estado para armazenar a lista de Notas
  const [novaNota, setNovaNota] = useState(""); // Estado para o valor do novo input de Nota

  // Função para adicionar uma nova Nota
  const adicionarNota = (e) => {
    e.preventDefault();
    if (novaNota.trim()) { // Verifica se a nova Nota não está vazia
      setNotas([...Notas, { id: Date.now(), texto: novaNota }]); // Adiciona a nova Nota à lista
      setNovaNota(""); // Limpa o input
    }
  };

  // Função para remover uma Nota
  const removerNota = (id) => {
    setNotas(Notas.filter(Nota => Nota.id !== id)); // Filtra a Nota a ser removida
  };

  // Função para atualizar uma Nota editada
  const atualizarNota = (NotaAtualizada) => {
    setNotas(Notas.map(Nota => (Nota.id === NotaAtualizada.id ? NotaAtualizada : Nota))); // Atualiza a Nota editada
  };

  return (
    <div className="App">
      <header>
        <h1>Lista de Notas e Anotações</h1>
      </header>
      <form onSubmit={adicionarNota}>
        <input
          type="text"
          value={novaNota}
          onChange={(e) => setNovaNota(e.target.value)}
          placeholder="Adicione uma nova Nota"
        />
        <button type="submit">Adicionar nota</button>
      </form>
      {Notas.map((Nota, indice) => (
        <ItemNota
          key={Nota.id}
          Nota={Nota}
          indice={indice}
          removerNota={removerNota}
          atualizarNota={atualizarNota}
        />
      ))}
    </div>
  );
}

export default App;

