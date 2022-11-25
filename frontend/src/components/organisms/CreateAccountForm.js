import { useState } from "react";
import SubmitButton from "../atoms/SubmitButton";
import makeRequest from "../../api";
import ErrorMessage from '../atoms/ErrorMessage';
import ConfirmationMessage from "../atoms/ConfirmationMessage";
import { Link } from "react-router-dom";

function CreateAccountForm() {
    //error state
    const [errorMessage, setErrorMessage] = useState('');
    //request state
    const [isRequestDone, setIsRequestDone] = useState(false);
    const [isRequestBad, setIsRequestBad] = useState(false);
    //Creating state variables to store response from API request 
    const [data, setData] = useState('');
    //Using useState to store user's input in as variables
    const [userNameValue, setUserNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const userInput = {
        user: {
            userName: userNameValue,
            email: emailValue,
            password: passwordValue
        }
    }

    /**
     * Adds new user to database
     * @param {logs information about the user triggered event} event 
     */
     async function createUser(event) {
        //Prevent page from reloading when clicking submit
        event.preventDefault()
        
        try {
            //making api request
            const responseData = await makeRequest.users.createUser(userInput);

            //If there are no errors in the reaquest set the "data" state to the retreived data
            if ( !responseData.errors && !responseData.error) {
            setData(responseData.message);
            setErrorMessage('');
            setIsRequestDone(true);
            setIsRequestBad(false);

            //Handling request errors and returning error message
            } else {
                if(responseData.error) {
                    setErrorMessage(responseData.error);
                    setData('');
                    setIsRequestDone(false);
                    setIsRequestBad(true)
                }
                
                if (responseData.errors){
                    setErrorMessage(responseData.errors[0].message);
                    setData('');
                    setIsRequestDone(false);
                    setIsRequestBad(true)
                }
            }

        } catch (error) {
            return setErrorMessage(error.error);
        }
    }
    
    
    return (
        <form className="createAccount__form" onSubmit={(event) => {createUser(event)}}>
            
            {/* render form content only if user has not been created */}
            {isRequestDone === false ? 
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

            { isRequestBad ? <ErrorMessage error= {errorMessage}/> : null } 

            { isRequestDone ? <ConfirmationMessage message= {data}/> : null }
            
            { isRequestDone ? <Link to='/login'><u>log into your account</u></Link> : null }

        </form>
    )
}

export default CreateAccountForm