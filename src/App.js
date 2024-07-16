// src/App.js
import React, { useState } from 'react';
import IdeaItem from './components/IdeaItem';
import './App.css';

function App() {
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState("");

  const addIdea = (e) => {
    e.preventDefault();
    if (newIdea.trim()) {
      setIdeas([...ideas, { id: Date.now(), text: newIdea }]);
      setNewIdea("");
    }
  };

  const removeIdea = (id) => {
    setIdeas(ideas.filter(idea => idea.id !== id));
  };

  const updateIdea = (updatedIdea) => {
    setIdeas(ideas.map(idea => (idea.id === updatedIdea.id ? updatedIdea : idea)));
  };

  return (
    <div className="App">
      <header>
        <h1>Ideias de Decoração</h1>
      </header>
      <form onSubmit={addIdea}>
        <input
          type="text"
          value={newIdea} />
      </form>
    </div>
  )
}

export default App;
