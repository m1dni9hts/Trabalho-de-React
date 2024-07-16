import React from 'react';
import IdeaItem from './IdeaItem';

function IdeaList({ ideas, removeIdea }) {
  return (
    <div>
      {ideas.map((idea, num_item) => (
        <IdeaItem
          key={idea.id}
          idea={idea}
          num_item={num_item + 1}
          removeIdea={removeIdea}
        />
      ))}
    </div>
  );
}

export default IdeaList;