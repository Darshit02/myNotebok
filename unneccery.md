{
  "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkMGJhNzYyOWQ4MmMwOGUyYTUyMWIyIn0sImlhdCI6MTY3NDYzMTY3MH0.NRwSnUFLn-dqjhTnhE02Ikz3XjZYmFx54XHqDh1-7RM"
}
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
 const a =useContext(noteContext)


 import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
    
   <strong>
   {props.alert.type}
   </strong>
   {props.alert.msg}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  )
}

export default Alert