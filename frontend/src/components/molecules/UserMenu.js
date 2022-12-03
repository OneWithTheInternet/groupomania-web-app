import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import UserImage from "../atoms/UserImage";
import {Link} from 'react-router-dom';
import CurrentUserName from '../atoms/CurrentUserName';


function UserMenu(props) {

    /**
     * Logs user out of by clearing the login credentials in "local storage"
     */
    function logout() {
        try {
            localStorage.clear("user_id", "token");
        } catch (error) {
            return console.log(error);          
        }
    }

    return <div className='userMenu'>

        <CurrentUserName />
        <UserImage />
        
        <div className='dropdown'>
            <div className='dropdown__arrowContainer'>
                <FontAwesomeIcon className="icon2" icon={faAngleDown} />
            </div>

            <ul className='dropdown__menu'>
                <li><strong>Current user's name</strong></li>
                <li><Link to='/account-settings'>Account settings</Link></li>
                <li onClick={ () => { logout() } } >
                    <Link to='/login'>
                        Sign Out
                    </Link>
                </li>
            </ul>
        </div>
    </div>
}

export default UserMenu