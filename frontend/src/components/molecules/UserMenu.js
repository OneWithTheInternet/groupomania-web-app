import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import UserIcon from "../atoms/UserIcon"

function UserMenu() {
    return <div className="userMenu">
        <UserIcon />

        <div className='userMenu__dropdown'>
            <div className='userMenu__dropdown__arrow'>
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
            
            <div className='userMenu__dropdown__menu'>
                <ul>
                    <li><strong>Current user's name</strong></li>
                    <li id='signOut'>Sign Out</li>
                    <li id='DeleteAccount'>Delete Account</li>
                </ul>
            </div>
        </div>
    </div>
}

export default UserMenu