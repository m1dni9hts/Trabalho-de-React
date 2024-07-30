// src/components/IdeaForm.js
import React from 'react';

// Componente para o formulário de adicionar Notas
function FormularioNota({ novaNota, setNovaNota, adicionarNota }) {
  return (
    <form onSubmit={adicionarNota}>
      <input
        type="text"
        value={novaNota}
        onChange={(e) => setNovaNota(e.target.value)}
        placeholder="Adicione uma nova Nota"
      />
      <button type="submit">Adicionar Nota</button>
    </form>
  );
}

export default FormularioNota;