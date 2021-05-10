import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArr, setNoteArr] = useState([{
    title: "Title",
    content: "Content"
  }])

  function addNewNote(notesObj) {
    // <Note key={i} title={note.title} content={note.content} />
    console.log(notesObj)
    setNoteArr(prev => {
      return [
        ...prev,
        notesObj
      ]
    })
  }
  function deleteNote(noteIndex) {
    setNoteArr(noteArr => noteArr.filter((note, index) => {
      return noteIndex !== index
    }))

  }
  return (
    <div>
      <Header />
      <CreateArea addNewNote={addNewNote}/>
      {noteArr.map((note, i) => { 
      return <Note key={i} id={i} title={note.title} deleteNote={deleteNote} content={note.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
