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
     */
     async function createUser(event) {
        //Prevent page from reloading when clicking submit
        event.preventDefault()
        
        try {
            //making api request
            const responseData = await makeRequest.users.createUser(userInput);

            //handling response
            if ( !responseData[0].error && !responseData[0].error ) {
                setData(responseData[0].message);
                setErrorMessage('');
                setIsRequestDone(true);
                setIsRequestBad(false);

            //Handling errors
            } else {
                if(responseData[0].error) {
                    setErrorMessage(responseData[0].error);
                    setData('');
                    setIsRequestDone(false);
                    setIsRequestBad(true)
                }
                //There might be two different error formats (response.error or respones.errors)
                 //Handling alternative error format
                if (responseData[0].error){
                    setErrorMessage(responseData[0].error);
                    setData('');
                    setIsRequestDone(false);
                    setIsRequestBad(true)
                }
            }
        } catch (error) {
            setErrorMessage(error.error);
            return setIsRequestBad(true)
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
                            onChange={(event) => { setUserNameValue(event.target.value) }}
                        />
                    </label>
                    
                    <label>email
                        <input 
                            type="email"
                            value={ emailValue } 
                            placeholder={ "example@example.com" }
                            required
                            autoComplete="email"
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
                            autoComplete="new-password"
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