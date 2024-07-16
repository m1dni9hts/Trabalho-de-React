import React from 'react';
import IdeaItem from './IdeaItem';

function IdeaList({ ideas, removeIdea }) {
  return (
    <div className="idea">
      {ideas.map((idea, index) => (
        <IdeaItem
          key={idea.id}
          idea={idea}
          index={index + 1}
          removeIdea={removeIdea}
        />
      ))}
    </div>
  );
}

export default IdeaList;