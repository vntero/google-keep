import React from 'react';
import './App.css';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import notes from './notes';

function createNotes(eachNote) {
  return <Note 
    key={eachNote.key}
    title={eachNote.title}
    content={eachNote.content}
  />
}

function App() {
  return (
    <div>
      <Header/>
      {notes.map(createNotes)}
      <Footer/>
    </div>
  );
}

export default App;
