import makeRequest from "../../api";
import CommentIcon from "../atoms/CommentIcon";
import { useEffect, useState } from "react";
import ErrorMessage from "../atoms/ErrorMessage";


function CommentsCounter(props) {
    //Main JSX componenent to be rendered after request has been received
    let CommentCounterNumber = () => <div className="commentsCounter__number">
        <b> { props.comments.length } comments </b>
    </div>

    return <div className="commentsCounter" >
        <CommentIcon />
        <CommentCounterNumber />
    </div>
    
}

export default CommentsCounter