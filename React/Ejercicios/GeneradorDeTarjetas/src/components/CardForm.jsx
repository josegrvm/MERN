// components/CardForm.jsx
import React, { useState } from 'react';

const CardForm = ({ onAddCard }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [bgColor, setBgColor] = useState('#ffffff');
    const [borderStyle, setBorderStyle] = useState('solid');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '' || content.trim() === '') return;

        onAddCard({
        title,
        content,
        bgColor,
        borderStyle,
        });

        setTitle('');
        setContent('');
        setBgColor('#ffffff');
        setBorderStyle('solid');
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
        />
        <input
            type="text"
            placeholder="Contenido"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
        />
        <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
        />
        <select
            value={borderStyle}
            onChange={(e) => setBorderStyle(e.target.value)}
        >
            <option value="solid">Sólido</option>
            <option value="dashed">Discontinuo</option>
            <option value="dotted">Punteado</option>
            <option value="double">Doble</option>
        </select>
        <button type="submit">Agregar Tarjeta</button>
        </form>
    );
};

export default CardForm;
