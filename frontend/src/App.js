import Home from './components/pages/Home';
import Login from './components/pages/Login';
import CreateAccount from './components/pages/CreateAccount';
import CreatePost from './components/pages/CreatePost';
import './styles/app.css';
import {Routes, Route} from "react-router-dom";
import Post from './components/pages/Post';
import Header from './components/organisms/Header';


function App(props) {
  
  return (
    <div className='app'>
      <div className='mainContainer'>
        <Header />
        {/* Routes stablish a navigation between pages/elements */}
          <Routes>
              <Route path='/login' element={<Login />}/>
              <Route path='/createaccount' element={<CreateAccount />}/>
              <Route path="/" element={<Home />}/>
              <Route path='/createpost' element={<CreatePost />}/>
              <Route path='/post/:id' element={<Post />}/>
          </Routes>
      </div>
    </div>
  )
}

export default App;

