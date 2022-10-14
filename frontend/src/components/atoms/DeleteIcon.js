import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function DeleteIcon() {
    return <div className="userTag_deleteIconContainer">
        <FontAwesomeIcon className="icon2" icon={faTrashCan} />
    </div>
}

export default DeleteIcon