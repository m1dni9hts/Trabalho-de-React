import React, { useState } from 'react';

function IdeaForm({ addIdea }) {
  const [idea, setIdea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const Idea = idea.trim();
    if (Idea) {
      const novaIdea = {
        id: Date.now(),
        text: Idea,
      };
      addIdea(novaIdea);
      setIdea('');
    }
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