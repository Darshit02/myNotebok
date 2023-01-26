import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) =>{
    const notesInitial = [
        
            {
              "_id": "63d155efc4039e16e42c4500",
              "user": "63d0ba7629d82c08e2a521b2",
              "title": "hello morning",
              "description": "No needed",
              "tag": "busy",
              "date": "2023-01-25T16:16:47.483Z",
              "__v": 0
            },
            {
              "_id": "63d155f0c4039e16e42c4502",
              "user": "63d0ba7629d82c08e2a521b2",
              "title": "hello morning",
              "description": "No needed",
              "tag": "busy",
              "date": "2023-01-25T16:16:48.407Z",
              "__v": 0
            },
            {
              "_id": "63d155f0c4039e16e42c4504",
              "user": "63d0ba7629d82c08e2a521b2",
              "title": "hello morning",
              "description": "No needed",
              "tag": "busy",
              "date": "2023-01-25T16:16:48.564Z",
              "__v": 0
            }
         ,{
          "_id": "63d155f0c4039e16e42c4504",
          "user": "63d0ba7629d82c08e2a521b2",
          "title": "hello morning",
          "description": "No needed",
          "tag": "busy",
          "date": "2023-01-25T16:16:48.564Z",
          "__v": 0
        }
        
          
    ]
    const[notes , setNotes]  = useState(notesInitial)
return(
    <NoteContext.Provider value={{notes , setNotes}}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState