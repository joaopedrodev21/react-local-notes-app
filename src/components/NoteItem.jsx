import React, { useState } from 'react';

function NoteItem({ note, onDeleteNote, onEditNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleSave = () => {
    if (editedContent.trim() && editedContent !== note.content) {
      onEditNote(note.id, editedContent);
    }
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="note-item editing">
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          rows="5"
          className="edit-textarea"
        />
        <div className="note-meta">
          <button 
            onClick={handleSave} 
            className="save-button"
          >
            Salvar
          </button>
          <button 
            onClick={() => setIsEditing(false)} 
            className="cancel-button"
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="note-item">
      <p className="note-content">{note.content}</p>
      <div className="note-meta">
        <small>Criado em: {note.timestamp}</small>
        <div className="note-actions">
            <button 
                onClick={() => setIsEditing(true)} 
                className="edit-button"
            >
                Editar
            </button>
            <button 
                onClick={() => onDeleteNote(note.id)} 
                className="delete-button"
            >
            Excluir
            </button>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;