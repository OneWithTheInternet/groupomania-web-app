import { useState } from "react";
import SubmitButton from "../atoms/SubmitButton";
import makeRequest from "../../api";
import ErrorMessage from '../atoms/ErrorMessage';
import ConfirmationMessage from "../atoms/ConfirmationMessage";
import { Link } from "react-router-dom";

function CreateAccountForm() {
    //Creating state variable for errors
    const [errorMessage, setErrorMessage] = useState('');
    //Creating state variable to store response from API request 
    const [data, setData] = useState('');
    const [isUserCreated, setIsUserCreated] = useState(false);
    //Using useState to store user's input in as variables
    const [userNameValue, setUserNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    //Object to be submitted as API request data
    const userInput = {
        user: {
            userName: userNameValue,
            email: emailValue,
            password: passwordValue
        }
    }

    /**
     * Adds user to the database
     */
     async function createUser() {
        try {
            //making api request
            const responseData = await makeRequest.users.createUser(userInput);

            //If there are no errors in the reaquest set the "data" state to the retreived data
            if (!responseData.error) {
            setData(responseData[0].message);
            setIsUserCreated(true);
            setErrorMessage('')

            //Handling request errors and returning error message
            } else {
            setErrorMessage(responseData.error.errors[0].message);
            }

        } catch (error) {
            setErrorMessage('Something went wrong ' + error);
        }
    }

    /**
     * Function handles what happens when user submits form
     * @param {logs information about the user triggered event} event 
     */
     function handleSubmit(event) {
    
        //Prevent page from reloading when clicking submit
        event.preventDefault()
        
        //Making request
        createUser()
    }
    
    
    return (
        <form className="createAccount__form" onSubmit={(event) => {handleSubmit(event)}}>
            
            {/* render form content only if user has not been created */}
            {isUserCreated === false ? 
                <div>
                    <label>User Name
                        <input 
                            type="text"
                            value={ userNameValue } 
                            placeholder={"Create a user name"}
                            required
                            maxLength={20}
                            minLength={3}
                            //Accessing the value after user's input. Setting the value to variable "inputValue""
                            onChange={(event) => setUserNameValue(event.target.value)}
                        />
                    </label>
                    
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
                </div>

                : null
            }

            { errorMessage === '' ? null : <ErrorMessage error= {errorMessage}/> } 

            { isUserCreated === false ? null : <ConfirmationMessage message= {data}/> }
            
            { isUserCreated === false ? null : <Link to='/login'><u>log into your account</u></Link> }

        </form>
    )
}

export default CreateAccountForm



//onSubmit={(event) => event.preventDefault}