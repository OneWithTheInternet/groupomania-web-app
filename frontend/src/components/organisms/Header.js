import MainLogo from "../atoms/MainLogo";
import UserMenu from "../molecules/UserMenu";
import {Route, Routes} from 'react-router-dom'


function Header(props) {
    return (
        <header className="header">
            {/* component will be rendered in all pages */}
            <MainLogo /> 
            
            {/* component will be rendered in the specified routed pages */}
            <Routes>
                <Route element={<UserMenu />} >
                    <Route path="/" />
                    <Route path="/post/:id" />
                    <Route path='/createpost' />
                </Route>
            </Routes>
            {/* <UserMenu /> */}
        </header>
    )
}

export default Header