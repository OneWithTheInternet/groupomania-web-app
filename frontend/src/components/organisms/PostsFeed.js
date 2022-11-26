import {React, useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import PostCard from "./PostCard";
import makeRequest from "../../api";
import ErrorMessage from '../atoms/ErrorMessage';
import LoadMoreButton from '../atoms/LoadMoreButton';

function NewPostsSection() {
  //State variables to handle errors
  const [isRequestBad, setIsRequestBad] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isTokenValid, setIsTokenValid] = useState(true);
  //State variable to store server's response data
  const [data, setData] = useState([]);
  //Defining current page state
  const [pageNumber, setPageNumber] = useState(1);

  /**
   * Fetches data for 10 latest posts
   */
  async function displayAll() {
    try {
      //making api request
      const responseData = await makeRequest.posts.displayAll(pageNumber);

      //If there are no errors in the reaquest set the pass the retreived data
      if (!responseData.error) {
        //Setting data to an array with the actual data inside. Useful for pagination and mapping later.
        setData(responseData);
        setIsRequestBad(false);
        setIsTokenValid(true);

        //Handling invalid token
      } else if ( responseData.error === 'invalid token') {
        setErrorMessage(responseData.error);
        setIsRequestBad(true);
        setIsTokenValid(false);
        localStorage.clear()

        //handling other errors
      } else {
        setErrorMessage(responseData.error);
        setIsRequestBad(true)
      }
    } catch (error) {
      setErrorMessage(error)
    }
  }

  /**
   * Fetches data for 10 latest posts
   */
  async function loadMorePosts() {
    try {
      //making api request
      const responseData = await makeRequest.posts.loadMorePosts(pageNumber);

      //If there are no errors in the reaquest set the pass the retreived data
      if (!responseData.error) {
        //setting state to previus data convined with new data
        setData(responseData);
        setPageNumber(pageNumber + 1);
        console.log(data);
        setIsRequestBad(false);
        setIsTokenValid(true);

        //Handling request errors and returning error message
      } else {
        setErrorMessage(responseData.error);
        setIsRequestBad(true);
        //setIsTokenValid(false);
        //localStorage.clear()
      }
    } catch (error) {
      setErrorMessage(error)
    }
  }

  /**
   * Fetches data to be displayed
   */
  useEffect(() => {

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

    <PostCard data = { data } />

    {  isRequestBad ? <ErrorMessage error= {errorMessage}/> : null }

    <LoadMoreButton loadMorePosts = { loadMorePosts } />

    { isTokenValid  ? null : <Navigate to='/login' /> }

  </section>
}

export default NewPostsSection






















/*     useEffect(() => {
        api.posts.get().then((posts) => setPosts(posts));
      }, [searchText])
 */