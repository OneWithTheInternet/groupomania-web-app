import MainLogo from "../atoms/MainLogo";
import UserMenu from "../molecules/UserMenu";
import {Outlet, Route, Routes} from 'react-router-dom'
import Feed from "../pages/Feed";
import Post from "../pages/Post";
import CreatePost from "../pages/CreatePost";
import AccountSettings from "../pages/AccountSettings";


function Header(props) {
    return (
        <div className="headerContainer">
            <header className="header">
                {/* component will be rendered in all pages */}
                <MainLogo/>

                {/* component will be rendered in the specified routed pages */}
                <Routes>
                    <Route element={<UserMenu />} >
                        <Route path="feed" element={<Feed />}/>
                        <Route path="posts/:post_id" element={<Post />}/>
                        <Route path='createpost' element={<CreatePost />}/>
                        <Route path='account-settings' element={<AccountSettings />} />
                    </Route>
                </Routes>
            </header>
        </div>
    )
}

export default Header