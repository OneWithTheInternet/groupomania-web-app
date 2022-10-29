import React from 'react'

function TextArea(props) {
  return (
    <textarea maxLength='500' placeholder={props.placeholder}></textarea>
  )
}

export default TextArea