import logo from "../../assets/icon-left-font-monochrome-black.svg";
import { Link, Navigate } from 'react-router-dom';
import {useState} from 'react';

function MainLogo() {

    return <div className="logoContainer" >
        <Link to="/"> 
            <img 
                className="logoContainer__logo" 
                alt="groupomania logo"
                src={logo}
            />
        </Link>

    </div>
}

export default MainLogo