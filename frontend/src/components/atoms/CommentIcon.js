import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from '@fortawesome/free-solid-svg-icons'

function CommentIcon() {
    return <div className="commentIcon" >
        <FontAwesomeIcon icon={faComment} />
    </div>
}

export default CommentIcon