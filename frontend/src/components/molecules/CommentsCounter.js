import makeRequest from "../../api";
import CommentIcon from "../atoms/CommentIcon";
import { useEffect, useState } from "react";
import ErrorMessage from "../atoms/ErrorMessage";


function CommentsCounter(props) {
    //States to store request's response data
    const [isRequestDone, setIsRequestDone] = useState(false);
    const [commentsCount, setCommentsCount] = useState(null);
    //States to handle errors
    const [isRequestBad, setIsRequestBad] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    /**
     * Returns number of comments for parent post resource
     */
    async function getCommentsCount() {
        //Definig prop format for post_id (both options are posible depending on parent component)
        const post_id = props.post ? props.post.post_id : props.post_id;
        try {
            //making request
            const responseData = await makeRequest.comments.displayPostComments(post_id);
            //handleing response
            if (!responseData[0].error) {
                setCommentsCount(responseData.length);
                setIsRequestDone(true);
            } else {
                setErrorMessage(responseData[0].error)
                setIsRequestBad(true);
            }
        } catch (error) {
            setIsRequestBad(true);
            return setErrorMessage(error.error)
        }
    }
    /**
     * Triggers data fetching after component has loaded
     * then cleans up state variables
     */
    useEffect(() => {
        getCommentsCount();    
      return () => {
        setIsRequestDone(false);
        setCommentsCount(null);
        setIsRequestBad(false);
        setErrorMessage('')
      }
    }, [])
    //Main JSX componenent to be rendered after request has been received
    let CommentCounterNumber = () => <div className="commentsCounter__number">
        <b> { commentsCount } comments </b>
    </div>

    return <div className="commentsCounter" >
        <CommentIcon />
        {isRequestDone ? <CommentCounterNumber /> : null }
        {isRequestBad ? <ErrorMessage error={errorMessage} /> : null }
    </div>
    
}

export default CommentsCounter