import React from "react"; 
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context; 
  const { note ,updateNote} = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex"> 
          <h5 className="card-title">{note.title}</h5>
          <button type="button" className="btn btn-sm w-2 h-2" data-bs-toggle="popover" data-bs-title= {note.tag}><i className="fa-solid fa-tag"></i></button>
          </div>
          <p className="card-text">{note.description}</p>
          <i className="fa-sharp fa-solid fa-trash mx-2" onClick ={() => {deleteNote(note._id)}}></i>
          <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>updateNote(note)}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
