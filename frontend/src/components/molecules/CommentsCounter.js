import makeRequest from "../../api";
import CommentIcon from "../atoms/CommentIcon";
import { useState } from "react";
import ErrorMessage from "../atoms/ErrorMessage";


function CommentsCounter(props) {
    //State variables
    const [isRequestDone, setIsRequestDone] = useState(false);
    const [commentsCount, setCommentsCount] = useState(null);
    const [isRequestBad, setIsRequestBad] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    //Returns number of comments for parent post resource
    async function getCommentsCount() {
        try {
            const responseData = await makeRequest.comments.displayPostComments(props.post.post_id);
            if (!responseData.error) {
                setIsRequestDone(true);
                return setCommentsCount(responseData.length)
                //handleing errors
            } else {
                setIsRequestBad(true);
                setErrorMessage(responseData.error)
            }
        } catch (error) {
            return setErrorMessage(error)
        }
    }

    getCommentsCount();

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