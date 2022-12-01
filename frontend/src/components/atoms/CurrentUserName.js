import makeRequest from "../../api";
import { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import RedirectLoggedOut from "./RedirectLoggedOut";

function CurrentUserName(props) {
    //error states
    const [isRequestBad, setIsRequestBad] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    //request state
    const [isRequestDone, setIsRequestDone] = useState(false);
    //Data state
    const [data, setData] = useState([]);

    /**
     * fetches the current users's name and stores it in the data state variable
     */
    async function getCurrentUserName() {
        try {
            const responseData = await makeRequest.users.displayOneUser(localStorage.user_id);
            if (!responseData[0].error) {
                setData(responseData[0].userName);
                setIsRequestDone(true);
                setIsRequestBad(false)
            } else {
                setErrorMessage(responseData[0].error);
                setIsRequestDone(false)
                setIsRequestBad(true);
            }
        } catch (error) {
            return setErrorMessage(error);
        }
    }

    /**
     * Triggers data fetching after page has loaded
     */
    useEffect(() => {
        getCurrentUserName();
      return () => {
        setData([]);
        setErrorMessage('');
        setIsRequestDone(false);
        setIsRequestBad(false)
      }
    }, [])
    


    const Component = () => <b><strong>@{ data }</strong></b>;

    return <div className="userTag__userContainer__nameContainer">
        
        {isRequestDone ? <Component /> : null}

        {isRequestBad ? <ErrorMessage error={errorMessage} /> : null }
        
        {isRequestBad ? <RedirectLoggedOut error={errorMessage} /> : null}
   
    </div>
}

export default CurrentUserName