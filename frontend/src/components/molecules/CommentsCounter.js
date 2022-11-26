import makeRequest from "../../api";
import CommentIcon from "../atoms/CommentIcon";
import { useEffect, useState } from "react";
import ErrorMessage from "../atoms/ErrorMessage";


function CommentsCounter(props) {
    //State variables
    const [isRequestDone, setIsRequestDone] = useState(false);
    const [commentsCount, setCommentsCount] = useState(null);
    const [isRequestBad, setIsRequestBad] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    /**
     * Returns number of comments for parent post resource
     */
    async function getCommentsCount() {
        try {
            const responseData = await makeRequest.comments.displayPostComments(props.post.post_id);
            if (!responseData.error) {
                setCommentsCount(responseData.length)
                setIsRequestDone(true);
                //handleing errors
            } else {
                setErrorMessage(responseData.error)
                setIsRequestBad(true);
            }
        } catch (error) {
            return setErrorMessage(error)
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
    


    let Component = () => <div className="commentsCounter__number">
        <b> { commentsCount } comments </b>
    </div>

    return <div className="commentsCounter" >
        <CommentIcon />
        {isRequestDone ? <Component /> : null }
        {isRequestBad ? <ErrorMessage error={errorMessage} /> : null }
    </div>
    
}

export default CommentsCounter