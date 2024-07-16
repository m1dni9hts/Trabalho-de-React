// src/components/IdeaList.js
import React from 'react';
import IdeaItem from './IdeaItem';

function IdeaList({ ideas, removeIdea, updateIdea }) {
  return (
    <div>
      {ideas.map((idea, index) => (
        <IdeaItem
          key={idea.id}
          idea={idea}
          index={index + 1}
          removeIdea={removeIdea}
          updateIdea={updateIdea}
        />
      ))}
    </div>
  );
}

export default IdeaList;
