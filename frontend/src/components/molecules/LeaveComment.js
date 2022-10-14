import React from 'react'
import UserTag from './UserTag'

function LeaveComment() {
  return (
    <div className='leaveComment'>
        <UserTag userNameProp={'Your Name'}/>
        <textarea placeholder='Leave a Comment'></textarea>
    </div>
  )
}

export default LeaveComment