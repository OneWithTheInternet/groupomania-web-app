import React from 'react';
import Header from '../organisms/Header';
import CreateAccountForm from '../organisms/CreateAccountForm';

function CreateAccount() {
  return (
    <div className='mainContainer'>
      <Header />
      <section className="createAccount">
        <h1>Create Account</h1>
        <CreateAccountForm />
      </section>
    </div>
  )
}

export default CreateAccount