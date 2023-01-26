import React from 'react'
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(noteContext)
  const {notes , setNotes} = context;
  return (
    <div className="row my-3">
    <h2>Your Notes</h2>
    {notes.map((note ,i )=>{
      return <Noteitem key={i}note={note}/>
    })}
  </div>
  )
}

export default Notes
