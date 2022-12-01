import makeRequest from "../../api";
import TextArea from "../atoms/TextArea";
import {useState} from 'react';
import ErrorMessage from '../atoms/ErrorMessage';
import ConfirmationMessage from "../atoms/ConfirmationMessage";

function CreatePost() {
    //error state
    const [errorMessage, setErrorMessage] = useState('');
    //request states
    const [isRequestDone, setIsRequestDone] = useState(false);
    const [isRequestBad, setIsRequestBad] = useState(false);
    //State to store response from API request 
    const [data, setData] = useState('');
    //Using useState to store user's input in variables
    const [image, setImage] = useState(null);
    const [image_altText, setImage_altText] = useState(null);
    const [bodyText, setBodyText] = useState(null);
    const userInput = {
        post: {
            image: image,
            image_altText: image_altText,
            bodyText: bodyText
        }
    }
    /**
     * creates a post in database by making request to back-end
     */
    async function createPost() {
        try {
            const responseData = await makeRequest.posts.createPost(userInput);

            if(!responseData[0].error) {
                setData(responseData[0].message);
                setErrorMessage('');
                setIsRequestDone(true);
                setIsRequestBad(false);
            } else {
                setErrorMessage(responseData[0].error);
                setData('');
                setIsRequestDone(false);
                setIsRequestBad(true)
            }
        } catch (error) {
            setIsRequestBad(true);
            setIsRequestDone(false);
            return setErrorMessage(error.error);
        }
    }
    /**
     * Handles what happens when user clicks on submit button. Prevents default submit behavior
     */
    function handleSubmit() {
        console.log("submit this");
    }
    return (
    <div className='sectionsContainer'>
        <section className='createPost'>
            <div className='createPost__title'><h1>Create a Post</h1></div>
            <form className='createPost__form'>

                <label>
                    Upload an Image
                    <input 
                        type="file" 
                        name="img" 
                        accept="image/*"
                        onChange={(event) => { setImage(event.target.value) }} 
                    />                   
                </label>

                <label>
                    Alt text (describe your image)
                    <input 
                        type="text" 
                        placeholder='Write here...'
                        onChange={(event) => { setImage_altText(event.target.value) }}
                    />
                </label>

                <label>
                    Share your thoughts
                    <TextArea 
                        placeholder='Write here...'
                        onChange={(event) => { setBodyText(event.target.value) }}
                    />
                </label>

                { isRequestBad ? <ErrorMessage error= {errorMessage}/> : null } 

                { isRequestDone ? <ConfirmationMessage message= {data}/> : null }
                
                <input type="submit"/>
            </form>
        </section>
    </div>
  )
}

export default CreatePost