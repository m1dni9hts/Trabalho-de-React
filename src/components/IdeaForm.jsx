import React, { useState } from 'react';

function IdeaForm({ addIdea }) {
  const [idea, setIdea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIdea = {
      id: Date.now(),
      text: idea,
    };
    addIdea(newIdea);
    setIdea('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite sua ideia"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />
      <button type="submit">Adicionar Ideia</button>
    </form>
  );
}

export default IdeaForm;