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


  return (
    <div>
      <Header/>
      <CreateArea onAdd={addNote}/>
      {notes.map( (eachNote) => (
      <Note 
        key={eachNote.key}
        title={eachNote.title}
        content={eachNote.content}
      />
      ))}
      <Footer/>
    </div>
  );
}

export default App;
