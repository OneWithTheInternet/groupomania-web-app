import makeRequest from "../../api";
import TextArea from "../atoms/TextArea";
import {useState, useEffect} from 'react';
import ErrorMessage from '../atoms/ErrorMessage';
import ConfirmationMessage from "../atoms/ConfirmationMessage";

function CreatePost() {
    //error state
    const [errorMessage, setErrorMessage] = useState('');
    //request state
    const [isRequestDone, setIsRequestDone] = useState(false);
    const [isRequestBad, setIsRequestBad] = useState(false);
    //Creating state variables to store response from API request 
    const [data, setData] = useState('');
    //Using useState to store user's input in as variables
    const [image, setImage] = useState(null);
    const [imageAltText, setImageAltText] = useState(null);
    const [bodyText, setBodyText] = useState(null);
    const userInput = {
        post: {
            image: image,
            imageAltText: imageAltText,
            bodyText: bodyText
        }
    }

    /**
     * creates a post
     */
    async function createPost() {
        try {
            const responseData = await makeRequest.posts.createPost(userInput);

            if(!responseData.error) {
                setData(responseData.message);
                setErrorMessage('');
                setIsRequestDone(true);
                setIsRequestBad(false);
            } else {
                setErrorMessage(responseData.error);
                setData('');
                setIsRequestDone(false);
                setIsRequestBad(true)
            }
        } catch (error) {
            return setErrorMessage(error.error);
        }
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