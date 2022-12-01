import React from 'react';
import CreationDate from '../atoms/CreationDate';
import UserTag from '../molecules/UserTag';


function Comment(props) {

  /**
   * Creates comments JSX components
   */
  let comments = props.comments.map((comment) => ( 

    <div className='comment' key={comment.comment_id}>

      <UserTag comment_id={comment.comment_id} post_id={comment.post_id} user_id={comment.user_id} userName={comment.user.userName} forResource={"comment"} />

      <CreationDate createdAt={ comment.createdAt } />

      <div className='comment__text'>

        <b>{comment.bodyText}</b>

      </div>

    </div>
  ));

  return (
    <>
      {comments}
    </>
  )
}

export default Comment