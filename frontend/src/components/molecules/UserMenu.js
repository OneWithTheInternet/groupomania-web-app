import { useContext } from 'react';
import { loggedInContext } from '../pages/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import UserImage from "../atoms/UserImage";
import {Link} from 'react-router-dom';

function UserMenu(props) {

    //Accessing the useState modifying fuction through the context hook
    const signOut = useContext(loggedInContext);
        
    return <div className='userMenu'>

        <UserImage />

        <div className='userMenu__arrowContainer'>
            <FontAwesomeIcon className="icon2" icon={faAngleDown} />
        </div>

        <div className='userMenu__dropdown'>
            <ul>
                <li><strong>Current user's name</strong></li>
                <li id='signOut' onClick={() => signOut(false)}><Link to='/login'>Sign Out</Link></li>
                <li id='DeleteAccount'>Delete Account</li>
            </ul>
        </div>
    </div>
}

export default UserMenu