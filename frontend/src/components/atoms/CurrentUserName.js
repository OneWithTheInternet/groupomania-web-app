import makeRequest from "../../api";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

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
            if (!responseData.error) {
                setData(responseData.userName);
                setIsRequestDone(true);
                setIsRequestBad(false)
            } else {
                setErrorMessage(responseData.error);
                setIsRequestDone(false)
                setIsRequestBad(true);
            }
        } catch (error) {
            return setErrorMessage(error);
        }
    }

    getCurrentUserName();

    const Component = () => <b><strong>@{ data }</strong></b>;

    return <div className="userTag__userContainer__nameContainer">
        {isRequestBad ? <ErrorMessage error={errorMessage} /> : null }
        {isRequestDone ? <Component /> : null}
    </div>
}

export default CurrentUserName