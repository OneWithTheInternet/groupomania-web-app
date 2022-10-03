import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function DeleteIcon() {
    return <div className="deleteIconContainer">
        <FontAwesomeIcon icon={faTrashCan} />
    </div>
}

export default DeleteIcon