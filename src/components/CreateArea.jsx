import React, { useState } from "react";

function CreateArea(props) {

  let [note,setNote] = useState({
    title:"",
    content:""
  })

  function handleChange(event){
    let {value,name} = event.target;
    setNote((prev) => {
      return {...prev,
      [name]: value
      };
    })
  }

  function handleClick(event){
    props.addNote(note);
    setNote((prev) => {
      return {
        title:"",
        content:""
      };
    })
    
    event.preventDefault();
  }
  return (
    <div>
    
      <form>
      <h3>Create Your New Note!</h3>
        <input onChange = {handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange = {handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={handleClick}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
