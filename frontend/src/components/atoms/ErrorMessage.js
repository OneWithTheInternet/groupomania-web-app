import React from 'react'

function ErrorMessage(props) {
  return (
    <h1 className='errorMessage'>{props.error}</h1>
  )
}

export default ErrorMessage