import React from 'react';
import PostText from '../atoms/PostText';
import UserTag from '../molecules/UserTag';
import Comment from '../organisms/Comment';
import LeaveComment from '../molecules/LeaveComment';
import CommentsCounter from '../molecules/CommentsCounter.js'


//delete this later
import image from '../../assets/sample-image.jpeg'

function Post() {

  return (
    <div className='sectionsContainer'>
      <section className='postContent' >
        <UserTag userNameProp={"william"} />

        <PostText textProp={'whatever'} />
        
        <img alt='text' src={image} />
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