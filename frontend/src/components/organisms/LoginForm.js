
import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import makeRequest from "../../api";
import SubmitButton from "../atoms/SubmitButton";
import ErrorMessage from "../atoms/ErrorMessage";

function LoginForm() {
    //Creating useState to store user's input in as variables
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    //Object to be submitted as API request data
    const userInput = {
        user: {
            email: emailValue,
            password: passwordValue
        }
    }
    //State to check errors
    const [errorMessage, setErrorMessage] = useState('');
    //Stete to check for login 
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    /**
     * Function handles what happens when user submits form
     * @param {logs information about the user triggered event} event 
     */
     async function login(event) {
        //Prevent page from reloading when clicking submit
        event.preventDefault();    
       
        try {
            //Make API request next
            const responseData = await makeRequest.users.loginUser(userInput);
            //Setting token to local storage
            if (!responseData.error) {
                localStorage.setItem("user_id", responseData.user_id);
                localStorage.setItem("token", responseData.token);
                setIsLoggedIn(true);
                return setErrorMessage('');
            } else {
                setErrorMessage(responseData.error);
                setIsLoggedIn(false);
            }
        } catch (error) {
            setErrorMessage(error)
            setIsLoggedIn(false);
        }
    }
    
    return (
        <form className="login__form" onSubmit={(event) => {login(event)}}>
        
            <label>email
                <input 
                    type="email"
                    value={ emailValue } 
                    placeholder={ "example@example.com" }
                    required
                    //Accessing the value after user's input. Setting the value to variable "inputValue""
                    onChange={(event) => setEmailValue(event.target.value)}
                />
            </label>

            <label>Password
                <input 
                    type="password"
                    value={ passwordValue } 
                    required
                    maxLength={20}
                    minLength={6}
                    //Accessing the value after user's input. Setting the value to variable "inputValue""
                    onChange={(event) => setPasswordValue(event.target.value)}
                />
            </label>

            <SubmitButton />

            { errorMessage === '' ? null : <ErrorMessage error= {errorMessage}/> } 
            
            { isLoggedIn == true ? <Navigate to='/' replace/> : null }

        </form>
    )
}

export default LoginForm



//onSubmit={(event) => event.preventDefault}