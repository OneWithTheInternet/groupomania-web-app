import React from 'react';
import CreateAccountForm from '../organisms/CreateAccountForm';
import {Link} from 'react-router-dom'

function CreateAccount() {
  return (
    <div className='sectionsContainer'>
      <section className="createAccount">
        <h1>Create Account</h1>
        <CreateAccountForm />
        <hr/>
        <b>Or <Link to='/login'>log into your account</Link></b>
      </section>
    </div>
  )
}

export default CreateAccount