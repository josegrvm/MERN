function NoteList({ notes, onDeleteNote }) {
    return (
        <ul className="note-list">
        {notes.map((note) => (
            <li key={note.id} className="note-item">
            <span>
                {note.text} - {note.priority}
            </span>
            <button
                onClick={() => onDeleteNote(note.id)}
                className="delete-btn"
            >
                Eliminar
            </button>
            </li>
        ))}
        </ul>
    );
}

export default NoteList;
