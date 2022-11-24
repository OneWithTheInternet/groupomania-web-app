import {useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom';
import PostCard from "./PostCard"
import makeRequest from "../../api"
import ErrorMessage from '../atoms/ErrorMessage'



function NewPostsSection() {
  
  //State variables to handle errors
  const [isRequestBad, setIsRequestBad] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isTokenValid, setIsTokenValid] = useState(true);
  //State variable to store server's response data
  const [data, setData] = useState([]);

  /**
   * Fetches data to be displayed
   */
  useEffect(() => {
    async function displayAll() {
      try {
        //making api request
        const responseData = await makeRequest.posts.displayAll();

        //If there are no errors in the reaquest set the pass the retreived data
        if (!responseData.error) {
          setData(responseData);
          
          //Handling request errors and returning error message
        } else {
          setIsRequestBad(true);
          setIsTokenValid(false);
          setErrorMessage(responseData.error);
          localStorage.clear()
        }
      } catch (error) {
        setErrorMessage(error)
      }
    }

    //Calling function
    displayAll()

    //Clearing states
    return function cleanup() {
      setIsTokenValid(true);
      setIsRequestBad(false);
      setErrorMessage('')
    }
  }, []);

  //returning JSX components
  return <section className="postsFeed" >

    {  isRequestBad ? 
    <ErrorMessage error= {errorMessage}/> : 
    <PostCard data = { data } />}

    { isTokenValid  ? null : <Navigate to='/login' /> }
  </section>
}

export default NewPostsSection






















/*     useEffect(() => {
        api.posts.get().then((posts) => setPosts(posts));
      }, [searchText])
 */