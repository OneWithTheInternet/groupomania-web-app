import CommentIcon from "../atoms/CommentIcon"


function CommentsCounter() {
    return <div className="commentsCounter" >
        <CommentIcon />
        <div className="commentsCounter__number">
            <b>0</b>
        </div>
    </div>
}

export default CommentsCounter