import CommentIcon from "../atoms/CommentIcon"


function CommentsCounter(props) {
    //Assingning variables to props values
    const likesCountProp = props.likesCountProp;

    return <div className="commentsCounter" >
        <CommentIcon />
        <div className="commentsCounter__number">
            <b>{ likesCountProp }</b>
        </div>
    </div>
}

export default CommentsCounter