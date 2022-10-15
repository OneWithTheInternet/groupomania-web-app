import React from 'react'
import SubmitButton from '../atoms/SubmitButton'
import TextArea from '../atoms/TextArea'
import UserTag from './UserTag'

function LeaveComment() {
  return (
    <div className='leaveComment'>
      <UserTag userNameProp={'Your Name'}/>
      <form>
        <TextArea placeholder='leave a comment' />
        <SubmitButton />
      </form>
    </div>
  )
}

export default LeaveComment