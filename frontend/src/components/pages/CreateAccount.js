import React from 'react';
import Header from '../organisms/Header';
import CreateAccountForm from '../organisms/CreateAccountForm';

function CreateAccount() {
  return (
    <div>
      <section className="createAccount">
        <h1>Create Account</h1>
        <CreateAccountForm />
      </section>
    </div>
  )
}

export default CreateAccount