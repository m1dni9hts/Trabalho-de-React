// src/components/IdeaForm.js
import React from 'react';

// Componente para o formulário de adicionar ideias
function FormularioIdeia({ novaIdeia, setNovaIdeia, adicionarIdeia }) {
  return (
    <form onSubmit={adicionarIdeia}>
      <input
        type="text"
        value={novaIdeia}
        onChange={(e) => setNovaIdeia(e.target.value)}
        placeholder="Adicione uma nova ideia"
      />
      <button type="submit">Adicionar Ideia</button>
    </form>
  );
}

export default FormularioIdeia;
