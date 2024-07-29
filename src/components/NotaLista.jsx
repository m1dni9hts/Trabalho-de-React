// src/components/ListaNotas.js
import React from 'react';
import ItemNota from './ItemNota';

function ListaNotas({ Notas, removerNota, atualizarNota }) {
  return (
    <div>
      <header>
        <h1>Lista de Notas de Decoração</h1>
      </header>
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

export default ListaNotas;
