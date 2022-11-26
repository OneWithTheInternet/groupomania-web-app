import Home from './components/pages/Home';
import Login from './components/pages/Login';
import CreateAccount from './components/pages/CreateAccount';
import CreatePost from './components/pages/CreatePost';
import AccountSettings from './components/pages/AccountSettings';
import PageNotFound from './components/pages/PageNotFound';
import './styles/app.css';
import {Routes, Route} from "react-router-dom";
import Post from './components/pages/Post';
import Header from './components/organisms/Header';

function App() {

  return (
    <div className='app'>

      <Header />

      <div className='mainContainer' >
          {/* Routes stablish a navigation between pages/elements */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/" element={<Home />} />
            <Route path='/createpost' element={<CreatePost />} />
            <Route path='/posts/:post_id' element={<Post />} />
            <Route path='/account-settings' element={<AccountSettings />} />
            {/* Component will render where there are no matching routes */}
            <Route path='*' element={ <PageNotFound /> } />
          </Routes>
      </div>
    </div>
  )
}

export default App;

