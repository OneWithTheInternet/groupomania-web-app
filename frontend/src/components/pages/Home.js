import Header from '../organisms/Header';
import CreatePostSection from "../organisms/CreatePostSection.js";
import PostFeed from '../organisms/PostsFeed';
import { useState, createContext } from 'react';

//Creating a context to easely share props with other components down the line
export const loggedInContext = createContext();

function Home(props) {

  //Creating a 'state' to know when user is logged in.
  const [ isLoggedIn, setIsLoggedIn ] = useState(true);

  return (
    <div>
      {/* Using react context to pas "value" property as a universal prop */}
      <loggedInContext.Provider value={setIsLoggedIn}>
        <CreatePostSection />
        <PostFeed />
      </loggedInContext.Provider>  
    </div>
  )
}

export default Home