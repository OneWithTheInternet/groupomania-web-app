import React from 'react'
import UserTag from '../molecules/UserTag'

function Comment() {
  return (
    <div className='comment'>
        <UserTag userNameProp={'Alvaro'}/>
        <div className='comment__text'>
            <b>
                This is a comment
            </b>
        </div>
    </div>
  )
}

export default Comment