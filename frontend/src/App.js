import Home from './components/pages/Home';
import Login from './components/pages/Login';
import CreateAccount from './components/pages/CreateAccount';
import CreatePost from './components/pages/CreatePost';
import AccountSettings from './components/pages/AccountSettings';
import './styles/app.css';
import {Routes, Route} from "react-router-dom";
//import { useState, createContext, useEffect,  } from 'react';
import Post from './components/pages/Post';
import Header from './components/organisms/Header';


/* //Creating a context to easely share props with other components down the line
export const urlContext = createContext(); */

function App() {
  /* //Creating a 'state' to know when user is logged in.
  const [ currentUrl, setCurrentUrl ] = useState("");  */

  /* useEffect(() => {
    console.log(currentUrl)
  }) */

  return (
    <div className='app'>

      <Header />

      <div className='mainContainer' >
        {/* Using react context to pas "value" property as a universal prop */}
        {/* <urlContext.Provider value={setCurrentUrl}> */}
          {/* Routes stablish a navigation between pages/elements */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/" element={<Home />} />
            <Route path='/createpost' element={<CreatePost />} />
            <Route path='/post/:id' element={<Post />} />
            <Route path='/account-settings' element={<AccountSettings />} />
          </Routes>
        {/* </urlContext.Provider> */}
      </div>
    </div>
  )
}

export default App;

