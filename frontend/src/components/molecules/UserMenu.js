import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import UserImage from "../atoms/UserImage";
import {Link} from 'react-router-dom';

function UserMenu(props) {

    /* //Accessing the useState modifying fuction through the context hook
    const signOut = useContext(loggedInContext); */
        
    return <div className='userMenu'>

        <UserImage />

        <div className='dropdown'>
            <div className='dropdown__arrowContainer'>
                <FontAwesomeIcon className="icon2" icon={faAngleDown} />
            </div>

            <ul className='dropdown__menu'>
                <li><strong>Current user's name</strong></li>
                <li><Link to='/account-settings'>Account settings</Link></li>
                <li><Link to='/login'>Sign Out</Link></li>
            </ul>
        </div>
    </div>
}

export default UserMenu