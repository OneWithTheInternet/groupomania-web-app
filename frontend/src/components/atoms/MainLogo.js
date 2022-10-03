import logo from "../../assets/icon-left-font-monochrome-black.svg"

function MainLogo() {
    return <div className="logoContainer">
            <a href="../../public/index.html">
                <img className="logoContainer__logo" alt="groupomania logo" src={logo} />
            </a>
    </div>
}

export default MainLogo