import React from 'react';
import {useState, useEffect} from 'react';
import makeRequest from '../../api';
import ErrorMessage from '../atoms/ErrorMessage';
import UserTag from '../molecules/UserTag';


function Comment(props) {
  //States to store request's response data
  const [isRequestDone, setIsRequestDone] = useState(false);
  const [data, setData] = useState([]);
  //States to handle errors
  const [isRequestBad, setIsRequestBad] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  /**
   * Returns number of comments for parent post resource
   */
  async function getComments() {
      const post_id = props.post_id;
      try {
          //making request
          const responseData = await makeRequest.comments.displayPostComments(post_id);
          //handleing response
          if (!responseData[0].error) {
            setData(responseData);
            setIsRequestDone(true);
          } else {
            setErrorMessage(responseData[0].error)
            setIsRequestBad(true);
          }
      } catch (error) {
          setIsRequestBad(true);
          return setErrorMessage(error.error)
      }
  }
  /**
   * Triggers data fetching after component has loaded
   * then cleans up state variables
   */
  useEffect(() => {
      getComments();    
    return () => {
      setIsRequestDone(false);
      setData(null);
      setIsRequestBad(false);
      setErrorMessage('')
    }
  }, [])
  /**
   * Creates comments JSX components
   */
  function CommentsComponents() {
    try {
      //Looping over data array to create comments
      let comments = data.map((comment) => ( 
    
        <div className='comment' key={comment.comment_id}>
    
          <UserTag comment_id={comment.comment_id} post_id={comment.post_id} user_id={comment.user_id} userName={comment.user.userName} forResource={"comment"} />
    
          <div className='comment__text'>
    
            <b>{comment.bodyText}</b>
    
          </div>
    
        </div>
    
      ));
      
      return comments

      //Handling errors
    } catch (error) {
      return setErrorMessage(error.error)
    }

  }

  return (
    <>
      {isRequestBad ? <ErrorMessage error={errorMessage} /> : null }
      {isRequestDone ? CommentsComponents() : null }
    </>
  )
}

export default Comment