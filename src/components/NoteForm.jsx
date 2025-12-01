import React, { useState } from 'react';

function NoteForm({ onAddNote }) {
  const [noteContent, setNoteContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteContent.trim()) {
      onAddNote(noteContent);
      setNoteContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <textarea
        placeholder="Escreva sua nova nota aqui..."
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        rows="4"
        required
      />
      <button type="submit">Adicionar Nota</button>
    </form>
  );
}

export default NoteForm;