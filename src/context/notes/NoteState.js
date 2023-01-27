import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) =>{
  const host = "http://localhost:5000"
    const notesInitial = []
    const[notes , setNotes]  = useState(notesInitial)
     // Get All Note
     const getNotes = async () => {
      // To do API casll
      const response = await fetch(`${host}/api/notes/fetchallnotes` ,{
        method:"GET",
        headers:{
          'content-Type' : 'application/json',
          'auth-tokan':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkMGJhNzYyOWQ4MmMwOGUyYTUyMWIyIn0sImlhdCI6MTY3NDYzMTY3MH0.NRwSnUFLn-dqjhTnhE02Ikz3XjZYmFx54XHqDh1-7RM'
        }
      })
      const json = await response.json()
      console.log(json);   
      setNotes(json) 
    }
    // Add A Note
    const addNote = async (title , description ,tag) => {
      // To do API casll
      const response = await fetch(`${host}/api/notes/addnote` ,{
        method:"POST",
        headers:{
          'content-Type' : 'application/json',
          'auth-tokan':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkMGJhNzYyOWQ4MmMwOGUyYTUyMWIyIn0sImlhdCI6MTY3NDYzMTY3MH0.NRwSnUFLn-dqjhTnhE02Ikz3XjZYmFx54XHqDh1-7RM'
        },
        body:JSON.stringify({title,description,tag})
      });
      const json = response.json()

      console.log("Addding A new Note");
      const note = {
        "_id": "63d155f0c4039e16e42c4504",
        "user": "63d0ba7629d82c08e2a521b2",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-01-25T16:16:48.564Z",
        "__v": 0
      }
      setNotes(notes.concat(note))
    }
    // Delete A Note
    const deleteNote = async (id)=>{
      // TODO: API Call
      const response = await fetch(`${host}/api/notes/deletenote/${id}` ,{
        method:"DELETE",
        headers:{
          'content-Type' : 'application/json',
          'auth-tokan':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkMGJhNzYyOWQ4MmMwOGUyYTUyMWIyIn0sImlhdCI6MTY3NDYzMTY3MH0.NRwSnUFLn-dqjhTnhE02Ikz3XjZYmFx54XHqDh1-7RM'
        },
      });
      const json = response.json()
      console.log(json)
      console.log("Deleting the note with id" + id);
      const newNotes = notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes)
    }
    // Edit A Note
    const editNote = async (id , title ,description ,tag)  => {
      // Api call
      const response = await fetch(`${host}/api/notes/updatenote/${id}` ,{
        method:"POST",
        headers:{
          'content-Type' : 'application/json',
          'auth-tokan':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkMGJhNzYyOWQ4MmMwOGUyYTUyMWIyIn0sImlhdCI6MTY3NDYzMTY3MH0.NRwSnUFLn-dqjhTnhE02Ikz3XjZYmFx54XHqDh1-7RM'
        },
        body:JSON.stringify({id,title,description,tag})
      });
      const json = response.json()
      console.log(json)
      // Logic to call a client
      for (let index = 0; index < notes.length; index++) {
        const element = notes[index]
        if (element._id === id) {
          element.title = title;
          element.description = description;
          element.tag = tag;
        }
      }
    }
return(
    <NoteContext.Provider value={{notes , addNote ,deleteNote,editNote,getNotes}}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState