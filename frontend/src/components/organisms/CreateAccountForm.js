
import { useState } from "react";
import SubmitButton from "../atoms/SubmitButton";

function CreateAccountForm() {
    //Using useState to store user's input in as variables
    const [nameValue, setNameValue] = useState('');
    const [userNameValue, setUserNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    //Object to be submitted as API request data
    const userLoginInfo = {
        name: nameValue,
        userName: userNameValue,
        email: emailValue,
        password: passwordValue
    }

    /**
     * Function handles what happens when user submits form
     * @param {logs information about the user triggered event} event 
     */
    function handleSubmit(event) {
        //creating an object from user input to send to server
        console.log(userLoginInfo);
        //Prevent page from reloading when clicking submit
        event.preventDefault()    
        //Make API request next
    }
    
    return (
        <form className="createAccount__form" onSubmit={(event) => {handleSubmit(event)}}>
            <label>Name
                <input 
                    type="text"
                    value={ nameValue } 
                    placeholder={"Write full name"}
                    //Accessing the value after user's input. Setting the value to variable "inputValue""
                    onChange={(event) => setNameValue(event.target.value)}
                />
            </label>

            <label>User Name
                <input 
                    type="text"
                    value={ userNameValue } 
                    placeholder={"Create a user name"}
                    //Accessing the value after user's input. Setting the value to variable "inputValue""
                    onChange={(event) => setUserNameValue(event.target.value)}
                />
            </label>
            
            <label>email
                <input 
                    type="email"
                    value={ emailValue } 
                    placeholder={ "example@example.com" }
                    //Accessing the value after user's input. Setting the value to variable "inputValue""
                    onChange={(event) => setEmailValue(event.target.value)}
                />
            </label>

            <label>Password
                <input 
                    type="password"
                    value={ passwordValue } 
                    //Accessing the value after user's input. Setting the value to variable "inputValue""
                    onChange={(event) => setPasswordValue(event.target.value)}
                />
            </label>

            <SubmitButton />
        </form>
    )
}

export default CreateAccountForm



//onSubmit={(event) => event.preventDefault}