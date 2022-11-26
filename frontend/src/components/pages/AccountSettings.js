import makeRequest from "../../api";
import { useState } from 'react';
import ConfirmationMessage from "../atoms/ConfirmationMessage";
import ErrorMessage from "../atoms/ErrorMessage";
import { Navigate } from "react-router-dom";

function AccountSettings () {
  //State variable to store server's response data
  const [data, setData] = useState(null);
  //State variables to handle errors
  const [isRequestDone, setIsRequestDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isRequestBad, setIsRequestBad] = useState(false);

  /**
   * Deletes user from database
   */
  async function deleteAccount() {
    try {
      const responseData = await makeRequest.users.deleteUser();
      
      if(!responseData.error) {
        setData(responseData);
        setIsRequestDone(true);
        setErrorMessage('')
        setIsRequestBad(false);
        setTimeout(function(){
          localStorage.clear("user_id", "token")
          window.location.reload();
        }, 500);
      } else {
        setData([]);
        setIsRequestDone(false);
        setIsRequestBad(true);
        setErrorMessage(responseData.error)
      }

    } catch (error) {
      setData([]);
      setIsRequestDone(false);
      setErrorMessage(error);
      setIsRequestBad(true);
    }
  }

  return (
    <div className="sectionsContainer">

      <section className="AccountSettings">

        <h1>Account Settings</h1>
        
        <input type={'button'} value={"Delete Account"} onClick={() => {deleteAccount()}}/>
        
        { isRequestDone ? <ConfirmationMessage message = { data.message } /> : null }
        
        { isRequestBad ? <ErrorMessage error = { errorMessage } /> : null}

        { !localStorage.token ? <Navigate to={'/login'} /> : null }
      
      </section>

    </div>
  )
}

export default AccountSettings