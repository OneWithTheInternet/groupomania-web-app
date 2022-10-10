import Home from './components/pages/Home';
import Login from './components/pages/Login';
import CreateAccount from './components/pages/CreateAccount';
import CreatePost from './components/pages/CreatePost';
import './styles/app.css';
import {Routes, Route} from "react-router-dom";
import Post from './components/pages/Post';


function App(props) {
  
  return (
    //Routes stablish a navigation between pages/elements
    <div className='app'>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/createaccount' element={<CreateAccount />}/>
          <Route path='/createpost' element={<CreatePost />}/>
          <Route path='/post/:id' element={<Post />}/>
      </Routes>
    </div>
  )
}

export default App;

