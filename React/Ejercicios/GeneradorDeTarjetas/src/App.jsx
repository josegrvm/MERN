// App.jsx
import React, { useState } from 'react';
import CardForm from './components/CardForm';
import CardList from './components/CardList';
import './App.css'; // 👈 Importa el archivo de estilos

const App = () => {
  const [cards, setCards] = useState([]);

  const addCard = (cardData) => {
    setCards([...cards, { ...cardData, id: Date.now() }]);
  };

  const removeCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div className="container">
      <h1 className='titulo'>Generador de Tarjetas</h1>
      <CardForm className="form" onAddCard={addCard} />
      <CardList cards={cards} onRemoveCard={removeCard} />
    </div>
  );
};

export default App;
