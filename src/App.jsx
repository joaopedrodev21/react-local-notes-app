import React, { useState, useEffect } from 'react';
import useNotes from './hooks/useNotes';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

import './App.css'; 

function App(){
  const { notes, addNote, deleteNote, editNote } = useNotes();

  return (
    <div className='app-container'>
      <h1>Bloco de Notas Pessoal</h1>
      <NoteForm onAddNote={addNote} />
      <NoteList 
      notes={notes} 
      onDeleteNote={deleteNote} 
      onEditNote={editNote}
      />
    </div>
  )
}
export default App;