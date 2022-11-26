import logo from "../../assets/icon-left-font-monochrome-black.svg";
import { Link, Navigate } from 'react-router-dom';
import {useState} from 'react';

function MainLogo() {
    const [userClickedButton, setUserClickedButton] = useState(false);
    
    /**
     * Changes state that renders "navigate" component to go to new page
     */
    async function goHome() {
        //setUserClickedButton(true)
    }

    return <div className="logoContainer" >
        <Link to="/"> 
            <img 
                className="logoContainer__logo" 
                alt="groupomania logo"
                src={logo}
                onClick={ goHome }
            />
        </Link>

        {userClickedButton ? <Navigate to="/?page=1" /> : null}
    </div>
}

export default MainLogo