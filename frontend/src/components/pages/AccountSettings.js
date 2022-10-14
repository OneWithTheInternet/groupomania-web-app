function AccountSettings () {

  function deleteAccount() {
    console.log('AccountDeleted')
  }

  return (
    <div className="sectionsContainer">
      <section className="AccountSettings">
        <h1>Account Settings</h1>
        <input type={'button'} value={"Delete Account"} onClick={deleteAccount}/>
      </section>
    </div>
  )
}

export default AccountSettings