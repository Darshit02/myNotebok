import React from 'react'

const Alert = (props) => {
  const capitalize = (word) =>{
    if(word === "danger"){
      word = "error"
    }
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase()+lower.slice(1)
  }
  return (
    <div>
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>
    </strong>
    {props.alert.msg}
     <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>
    </div>
  )
}

export default Alert


