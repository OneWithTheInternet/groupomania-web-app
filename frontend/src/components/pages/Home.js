import Header from '../organisms/Header';
import CreatePostSection from "../organisms/CreatePostSection.js";
import NewPostsSection from "../organisms/NewPostsSection.js";
import { useState, createContext } from 'react';

//Creating a context to easely share props with other components down the line
export const loggedInContext = createContext();

function Home(props) {

  //Creating a 'state' to know when user is logged in.
  const [ isLoggedIn, setIsLoggedIn ] = useState(true);

  return (
    <div className="mainContainer">
      <loggedInContext.Provider value={setIsLoggedIn}>
        <Header />
        <CreatePostSection />
        <NewPostsSection />
      </loggedInContext.Provider>  
    </div>
  )
}

export default Home