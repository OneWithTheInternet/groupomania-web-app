import MainLogo from "../atoms/MainLogo"
import UserMenu from "../molecules/UserMenu"


function Header(props) {
    return (
        <header className="header">
            <MainLogo />
            <UserMenu />
        </header>
    )
}

export default Header