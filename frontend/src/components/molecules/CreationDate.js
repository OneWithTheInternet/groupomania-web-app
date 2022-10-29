import React from 'react'

function CreationDate(props) {
  return (
    <div className="creationDate"><b>posted on { props.creationDate } { props.creationTime }</b></div>
  )
}

export default CreationDate