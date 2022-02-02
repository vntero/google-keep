import React from 'react';
import './App.css';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import notes from './notes';
import CreateArea from './components/CreateArea';



function App() {
  return (
    <div>
      <Header/>
      <CreateArea/>
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
