// src/components/ListaIdeias.js
import React from 'react';
import ItemIdeia from './ItemIdeia';

function ListaIdeias({ ideias, removerIdeia, atualizarIdeia }) {
  return (
    <div>
      <header>
        <h1>Lista de Ideias de Decoração</h1>
      </header>
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

export default ListaIdeias;
