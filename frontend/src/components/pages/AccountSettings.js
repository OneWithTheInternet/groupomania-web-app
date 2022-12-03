import makeRequest from "../../api";
import { useState } from 'react';
import ConfirmationMessage from "../atoms/ConfirmationMessage";
import ErrorMessage from "../atoms/ErrorMessage";
import Redirect from "../atoms/Redirect";

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
      
      if(!responseData[0].error) {
        setData(responseData[0].message);
        setIsRequestDone(true);
        setErrorMessage('')
        setIsRequestBad(false);
        localStorage.clear("user_id", "token")
      } else {
        setData([]);
        setIsRequestDone(false);
        setIsRequestBad(true);
        setErrorMessage(responseData[0].error)
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
        
        { isRequestDone ? <ConfirmationMessage message = { data } /> : null }

        { isRequestDone ? <Redirect path={'/login'} time={1500} /> : null}
        
        { isRequestBad ? <ErrorMessage error = { errorMessage } /> : null}
      
      </section>

    </div>
  )
}

export default AccountSettings