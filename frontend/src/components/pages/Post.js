import { React, useEffect, useState } from 'react';
import PostText from '../atoms/PostText';
import UserTag from '../molecules/UserTag';
import Comment from '../organisms/Comment';
import LeaveComment from '../molecules/LeaveComment';
import CommentsCounter from '../molecules/CommentsCounter.js';
import makeRequest from '../../api';
import ErrorMessage from '../atoms/ErrorMessage';
import CreationDate from '../atoms/CreationDate';
/**
 * Creates a react coponent instance
 * @returns React component instance
 */
function Post() {
  //State for request respnse data
  const [data, setData] = useState([]);
  //States for confirmation message
  const [isRequestDone, setIsRequestDone] = useState(false);
  //States for error handling
  const [errorMessage, setErrorMessage] = useState("");
  const [isRequestBad, setIsRequestBad] = useState(false);  
  /**
   * Requests data to back-end using "makeRequest" function.
   * Updates states to data recieved from the request so they can
   * be displayed on page
   */
  async function displayPost() {
    try {
      //searching current URL for the post's ID
      const URLPathName = window.location.pathname;
      const post_id =  URLPathName.split('/')[2];
      //Making request to the back-end
      const responseData = await makeRequest.posts.displayPost(post_id);
      //handling response
      if (!responseData[0].error) {
        setData(responseData[0]);
        setIsRequestDone(true);
      } else {
        setErrorMessage(responseData[0].error);
        setIsRequestBad(true);
      }
    } catch (error) {
      setIsRequestBad(true);
      return setErrorMessage(error.error)
    }
  }
  /**
   * Asks for and recieves all data needed to display post by making a request
   */
  useEffect(() => {
    displayPost();
    //Cleaning up states
    return () => {
      setData(null);
      setIsRequestDone(false);
      setErrorMessage("");
      setIsRequestBad(false);
    }
  }, []);
  //Main JSX componenent to be rendered after request has been received
  let SectionsContainer = () => <div className='sectionsContainer'>

    {isRequestBad ? <ErrorMessage error={ errorMessage } /> : null }

    <section className='postContent' >

      <UserTag post_id={data.post_id} user_id={data.user_id} userName={data.user.userName} forResource={"post"}/>

      <CreationDate createdAt={ data.createdAt } />

      <PostText bodyText={data.bodyText} />
      <img alt={data.image_altText} src={data.image_url} />

    </section>

    <section className='comments'>

      <CommentsCounter post_id={data.post_id} />

      <hr></hr>

      <Comment post_id={data.post_id}/>

    </section>

    <section className='leaveCommentsSection'>

      <LeaveComment userName={ data.user.userName } post_id={data.post_id} />

    </section>
  </div> 

  return (<>
    {isRequestDone ? <SectionsContainer /> : null}
    {isRequestBad ? <ErrorMessage error={errorMessage} /> : null}
  </>)
}

export default Post