import React, { useState } from 'react';
import Header from './components/Header';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';
import './App.css';

function App() {
  const [ideas, setIdeas] = useState([]);

  const addIdea = (newIdea) => {
    setIdeas([...ideas, newIdea]);
  };

  const removeIdea = (id) => {
    setIdeas(ideas.filter((idea) => idea.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <IdeaForm addIdea={addIdea} />
      <IdeaList ideas={ideas} removeIdea={removeIdea} />
    </div>
  );
}

export default App;