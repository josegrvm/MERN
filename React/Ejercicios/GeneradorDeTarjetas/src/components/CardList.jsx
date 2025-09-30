// components/CardList.jsx
import React from 'react';

const CardList = ({ cards, onRemoveCard }) => {
    return (
        <div className="card-list">
        {cards.map((card) => (
            <div
            key={card.id}
            className="card"
            style={{
                backgroundColor: card.bgColor,
                border: `2px ${card.borderStyle} black`,
            }}
            >
            <h3>{card.title}</h3>
            <p>{card.content}</p>
            <button onClick={() => onRemoveCard(card.id)}>Eliminar</button>
            </div>
        ))}
        </div>
    );
};

export default CardList;
