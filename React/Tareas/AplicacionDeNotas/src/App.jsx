import { useState } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import Filter from "./Filter";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState("Todas");

  const addNote = (text, priority) => {
    if (!text.trim()) return;
    const newNote = { id: Date.now(), text, priority };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes =
    filter === "Todas"
      ? notes
      : notes.filter((note) => note.priority === filter);

  return (
    <div className="app-container">
      <h1 className="title">Notas</h1>
      <NoteForm onAddNote={addNote} />
      <Filter filter={filter} setFilter={setFilter} />
      <NoteList notes={filteredNotes} onDeleteNote={deleteNote} />
    </div>
  );
}

export default App;


