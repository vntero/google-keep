import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import CreateArea from './components/CreateArea';



function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
     return [...prevNotes, newNote]
    })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
          return index !== id
      })
    })
  }


  return (
    <div>
      <Header/>
      <CreateArea onAdd={addNote}/>
      {notes.map( (eachNote, index) => (
      <Note 
        key={index}
        id={index}
        title={eachNote.title}
        content={eachNote.content}
        onDelete={deleteNote}
      />
      ))}
      <Footer/>
    </div>
  );
}

export default App;
