import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function UserIcon() {
    return <div className="userTag__userContainer__imageContainer">
        <FontAwesomeIcon className="icon1" icon={faUser} />
    </div>
}

export default UserIcon

