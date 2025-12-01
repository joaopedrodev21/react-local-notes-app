import React from 'react';
import NoteItem from './NoteItem'; // Importa o componente NoteItem

// Recebe as props para repassar para o NoteItem
function NoteList({ notes, onDeleteNote, onEditNote }) {
  return (
    <div className="note-list-container">
      <h2>Minhas Notas ({notes.length})</h2>
      <div className="note-list">
        {notes.length === 0 ? (
          <p>Nenhuma nota encontrada. Adicione uma nova!</p>
        ) : (
          // Mapeia o array de notas e renderiza o NoteItem para cada uma
          notes.map(note => (
            <NoteItem 
              key={note.id} 
              note={note} 
              onDeleteNote={onDeleteNote} 
              onEditNote={onEditNote} 
            />
          ))
        )}
      </div>
    </div>
  );
}

export default NoteList;