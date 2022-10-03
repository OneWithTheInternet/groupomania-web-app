import MainLogo from "../atoms/MainLogo"
import UserMenu from "../molecules/UserMenu"


function Header() {
    return <div className="header">
        <header>
            <MainLogo />
            <UserMenu />
        </header>
    </div>
}

export default Header