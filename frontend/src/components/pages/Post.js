import { React, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import PostText from '../atoms/PostText';
import UserTag from '../molecules/UserTag';
import Comment from '../organisms/Comment';
import LeaveComment from '../molecules/LeaveComment';
import CommentsCounter from '../molecules/CommentsCounter.js'

function Post() {
  
  // const [searchParams, setSearchParams] = useSearchParams();
  // const post_id = searchParams.get("post_id");
  // console.log("post id is " + post_id);

  /**
   * Asks for and recieves all data needed to display post by making a request
   */
  useEffect(() => {
    console.log('sideeffect')
  
    return () => {
      console.log('cleanup')
    }
  }, [])
   

  return (
    <div className='sectionsContainer'>
      <section className='postContent' >
        <UserTag userName={"william"} />
        <PostText bodyText={'whatever'} />
        {/* <img alt='text' src={image} /> */}
      </section>

      <section className='comments'>
      <CommentsCounter />
      <hr></hr>
        {/* use map() method on this comment to load comments according to data */}
        <Comment />
        <Comment />
      </section>

      <section className='leaveCommentsSection'>
        {/* use map() method on this comment to load comments according to data */}
        <LeaveComment />
      </section>
    </div>
  )
}

export default Post