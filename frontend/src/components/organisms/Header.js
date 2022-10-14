import MainLogo from "../atoms/MainLogo";
import UserMenu from "../molecules/UserMenu";
import {Route, Routes} from 'react-router-dom'
import Home from "../pages/Home";
import Post from "../pages/Post";
import CreatePost from "../pages/CreatePost";
import AccountSettings from "../pages/AccountSettings";


function Header(props) {
    return (
        <header className="header">
            {/* component will be rendered in all pages */}
            <MainLogo /> 
            
            {/* component will be rendered in the specified routed pages */}
            <Routes>
                <Route element={<UserMenu />} >
                    <Route path="/" element={<Home />}/>
                    <Route path="/post/:id" element={<Post />}/>
                    <Route path='/createpost' element={<CreatePost />}/>
                    <Route path='/account-settings' element={<AccountSettings />} />
                </Route>
            </Routes>
            {/* <UserMenu /> */}
        </header>
    )
}

export default Header