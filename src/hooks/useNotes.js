import {useState, useEffect, use} from 'react';

const STORAGE_KEY = 'react-notes-app';

function useNotes(){
    const [notes, setNotes] = useState(() => {
        const storedNotes = localStorage.getItem(STORAGE_KEY);
        return storedNotes ? JSON.parse(storedNotes) : [];
    });

    useEffect(() =>{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }, [notes]);

    const  addNote = (content) => {
        const newNote = {
            id: Date.now(),
            content: content.trim(),
            timestamp: new Date().toLocaleString()
        };
        setNotes(prevNotes => [newNote, ...prevNotes]);
    };

    const deleteNote = (id) =>{
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    }

    const editNote = (id, newContent) => {
        setNotes(prevNotes =>
            prevNotes.map(note =>
                note.id === id
                ?{
                    ...note,
                    content: newContent.trim(),
                    timestamp: new Date().toLocaleString(),
                    
                }
                : note
            )
        )
    }
    return {
        notes,
        addNote,
        deleteNote,
        editNote    
    };
}

export default useNotes;
 
        
    
