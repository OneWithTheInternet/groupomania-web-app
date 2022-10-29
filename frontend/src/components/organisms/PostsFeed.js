import {useEffect, useState} from 'react'
import PostCard from "./PostCard"
import makeRequest from "../../api"
import ErrorMessage from '../atoms/ErrorMessage';



function NewPostsSection() {
  
  const [isRequestBad, setIsRequestBad] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState([]);

  //console.log('data');

  //Setting up effect that makes API request when page loads
  useEffect(() => {
    /**
     * 
     * @returns data for every post from the api request
     */
    async function displayAll() {
      try {
        //making api request
        const responseData = await makeRequest.posts.get();

        //If there are no errors in the reaquest set the pass the retreived data
        if (!responseData.error) {
          setData(responseData);
          //Handling request errors and returning error message
        } else {
          setIsRequestBad(true);
          setErrorMessage(responseData.error)
        }
      } catch (error) {
        setErrorMessage('function not working')
      }
    }

    //Calling function
    displayAll()

    const clearStates = () => {
      setIsRequestBad(false);
      setErrorMessage('')
    };

    //Clearing states
    return clearStates
  }, []);

  
  //returning JSX components
  return <section className="postsFeed" >

    {  isRequestBad ? 
    <ErrorMessage error= {errorMessage}/> : 
    <PostCard data = { data } />}
  </section>
}

export default NewPostsSection






















/*     useEffect(() => {
        api.posts.get().then((posts) => setPosts(posts));
      }, [searchText])
 */