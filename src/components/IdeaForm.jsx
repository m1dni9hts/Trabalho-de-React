import React, { useState } from 'react';

function IdeaForm({ addIdea }) {
  const [idea, setarIdea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaIdea = {
      id: Date.now(),
      text: idea,
    };
    addIdea(novaIdea);
    setarIdea('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='class-input' type="text" placeholder="Digite nova ideia para a lista" 
      value={idea} onChange={(e) => setarIdea(e.target.value)}
      />
      <button className="botao-adicionar" type="submit">Adicionar Ideia</button>
    </form>
  );
}

export default IdeaForm;