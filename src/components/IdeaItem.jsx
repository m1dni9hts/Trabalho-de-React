import React from 'react';

function IdeaItem({ idea, index, removeIdea }) {
  return (
    <div className="idea-item">
      <h3>{index}. {idea.text}</h3>
      <button onClick={() => removeIdea(idea.id)}>Remover</button>
    </div>
  );
}

export default IdeaItem;