import React from 'react';
import PostText from '../atoms/PostText';
import UserTag from '../molecules/UserTag';
import Header from '../organisms/Header';
import Comment from '../organisms/Comment';
import LeaveComment from '../molecules/LeaveComment';



//delete this later
import image from '../../assets/sample-image.jpeg'

function Post() {

  return (
    <div className='mainContainer'>
      <Header />
      <section className='post' >
        <UserTag userNameProp={"william"} />

        <PostText textProp={'whatever'} />
        
        <img alt='text' src={image} />
      </section>

      <section className='comments'>
        {/* use map() method on this comment to load comments according to data */}
        <Comment />
      </section>

      <section className='leaveComments'>
        {/* use map() method on this comment to load comments according to data */}
        <LeaveComment />
      </section>
    </div>
  )
}

export default Post