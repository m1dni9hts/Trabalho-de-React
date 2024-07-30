import React, { useState } from 'react';
import ItemNota from './components/ItemNota';
import './App.css';

function App() {
  const [Notas, setNotas] = useState([]); 
  const [novaNota, setNovaNota] = useState(""); 
 
  const adicionarNota = (e) => {
    e.preventDefault();
    if (novaNota.trim()) { 
      setNotas([...Notas, { id: Date.now(), texto: novaNota }]); 
      setNovaNota(""); 
    }
  };


  const removerNota = (id) => {
    setNotas(Notas.filter(Nota => Nota.id !== id)); 
  };

  const atualizarNota = (NotaAtualizada) => {
    setNotas(Notas.map(Nota => (Nota.id === NotaAtualizada.id ? NotaAtualizada : Nota))); 
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

