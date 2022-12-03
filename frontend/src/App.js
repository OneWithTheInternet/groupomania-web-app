import Feed from './components/pages/Feed';
import Login from './components/pages/Login';
import CreateAccount from './components/pages/CreateAccount';
import CreatePost from './components/pages/CreatePost';
import AccountSettings from './components/pages/AccountSettings';
import PageNotFound from './components/pages/PageNotFound';
import './styles/app.css';
import {Routes, Route} from "react-router-dom";
import Post from './components/pages/Post';
import Layout from './components/pages/Layout';

function App() {

  return (
    <div className='app'>
      <div className='mainContainer' >
        {/* Routes stablish a navigation between pages/elements */}
        <Routes>
          <Route path="/*" element={<Layout />} >
            <Route path="login" element={<Login />} />
            <Route path="createaccount" element={<CreateAccount />} />
            <Route path="feed" element={<Feed />} />
            <Route path='createpost' element={<CreatePost />} />
            <Route path='posts/:post_id' element={<Post />} />
            <Route path='account-settings' element={<AccountSettings />} />
            {/* Component will render where there are no matching routes */}
            <Route path='*' element={ <PageNotFound /> } />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;

