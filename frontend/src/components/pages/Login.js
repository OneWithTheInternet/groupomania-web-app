import Header from '../organisms/Header';
import LoginForm from '../organisms/LoginForm';

//import Header from '../organisms/Header';

function Login() {
  return (
    <div className='mainContainer'>
      <Header />
      <section className="login">
        <h1>Log in</h1>
        <LoginForm />
      </section>
    </div>
  )
}

export default Login