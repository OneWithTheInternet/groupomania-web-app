import { React, useState } from 'react';
import { Navigate } from 'react-router-dom';
/**
 * Redirects user to desired page after timeout
 */
function Redirect(props) {
  const [redirectNow, setRedirectNow] = useState(false);
  
  setTimeout(() => {
    setRedirectNow(true)
  }, props.time ? props.time : 0);

  /**
   * Component to be rendered
   */
  let redirectComponent = () => {
    return (
      <div>
        <Navigate to={props.path} />
      </div>
    )
  }

  return (
    <>
      {redirectNow ? redirectComponent() : null }
    </>
  )
}

export default Redirect