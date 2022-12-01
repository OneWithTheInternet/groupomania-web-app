import React from 'react'

function TextArea(props) {

  return (
    <textarea 
      placeholder={props.placeholder}
      maxLength={props.maxLength} 
      onChange={props.onChange}
    >
    </textarea>
  )
}

export default TextArea