import LoginForm from '../organisms/LoginForm';
import { Link } from 'react-router-dom';



function Login() {
  return (
    <div className='sectionsContainer'>
      <section className="login">
        <h1>Log in</h1>
        <LoginForm />
        <hr/>
        <b>Or <Link to='/createaccount'>create a new account</Link></b>
      </section>
    </div>
  )
}

export default Login