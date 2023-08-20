import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  let [notes,setNotes] = useState([]);
  function addNote(newNote){
    setNotes((prev) => {
      return [...prev, newNote]
    })
  }
  function deleteNote(id){
    setNotes(prev => {
      return prev.filter((noteItem,index) => {
        return index !== id ;
      });
    })
  }
  return (
    <div>
      <Header />
      <CreateArea
      addNote = {addNote}
       />

       {notes.map((noteItem,index) => {
       return(
        <Note key={index} id={index} title={noteItem.title} 
        content={noteItem.content} delete = {deleteNote} />
       )
       }
       )}
      
      <Footer />
    </div>
  );
}

export default App;
