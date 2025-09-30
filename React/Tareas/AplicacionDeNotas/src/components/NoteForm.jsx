import { useState } from "react";

function NoteForm({ onAddNote }) {
    const [text, setText] = useState("");
    const [priority, setPriority] = useState("Baja");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddNote(text, priority);
        setText("");
        setPriority("Baja");
    };

    return (
        <form className="note-form" onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Escribe tu nota"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="note-input"
        />
        <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="note-select"
        >
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
        </select>
        <button type="submit" className="add-btn">
            Agregar Nota
        </button>
        </form>
    );
}

export default NoteForm;
