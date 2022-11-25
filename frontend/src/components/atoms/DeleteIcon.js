import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import makeRequest from "../../api";
import ConfirmationMessage from "./ConfirmationMessage";
import ErrorMessage from "./ErrorMessage";

function DeleteIcon(props) {
    //console.log("render");

    //Error states
    const [isRequestBad, setIsRequestBad] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    //Request response's data state
    const [data, setData] = useState(null);
    const [isRequestDone, setIsRequestDone] = useState(false);
    //Delete post icon access state
    const [postBelongsToUser, setPostBelongsToUser] = useState(false);

    /**
     * Checks if post belongs to the user trying to delete it and updates stetes accordingly
     */
    useEffect(() => {    
      //Cheking if User is the creator of the post
        if (props.user_id && props.user_id === parseInt(localStorage.user_id)) {
            setPostBelongsToUser(true)
        }

        return function clearup() {
            setPostBelongsToUser(false)
        }

    }, [props.user_id])

    /**
     * Deletes post from database by calling a request
     */
    async function deletePost() {
        try {
            const responseData = await makeRequest.posts.deletePost(props.post_id);
            if (!responseData.error) {
                setData(responseData.message);
                setErrorMessage("");
                setIsRequestDone(true);
                setIsRequestBad(false);
                //refreshing web page
                setTimeout(function(){
                    window.location.reload();
                }, 500);

            } else {
                setData(responseData.error);
                setErrorMessage(responseData.error);
                setIsRequestDone(false);
                setIsRequestBad(true)
            }
        } catch (error) {
            return setErrorMessage(error)
        }
    }
    
    // Icon component
    const Component = () => <div className="userTag_deleteIconContainer" onClick={ () => { deletePost() } }>
        <FontAwesomeIcon className="icon2" icon={faTrashCan} />
    </div>

    return <> 
        { postBelongsToUser ? <Component /> : null } 
        { isRequestDone ? <ConfirmationMessage message = { data } /> : null }
        { isRequestBad ? <ErrorMessage error = { errorMessage } /> : null}
    </>
}

export default DeleteIcon