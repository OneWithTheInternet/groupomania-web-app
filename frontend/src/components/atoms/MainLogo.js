import logo from "../../assets/icon-left-font-monochrome-black.svg"
import {Link} from 'react-router-dom'

function MainLogo() {
    return <div className="logoContainer">
        <Link to="/"> 
            <img className="logoContainer__logo" alt="groupomania logo" src={logo} />
        </Link>
    </div>
}

export default MainLogo