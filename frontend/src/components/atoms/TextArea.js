import React from 'react'

function TextArea(props) {
  return (
    <textarea maxlength='500' placeholder={props.placeholder}></textarea>
  )
}

export default TextArea