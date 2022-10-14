import { useContext } from "react"
import { urlContext } from "../../App"

function CreatePost() {

    //importing state changing function from App.js
    const setCurrentUrl = useContext(urlContext);
  
    return (
    <div className='sectionsContainer'>
        <section className='createPost'>
            <div className='createPost__title'><h1>Create a Post</h1></div>
            <form className='createPost__form'>

                <label>
                    Upload an Image
                    <input type="file" name="img" accept="image/*"></input>                   
                </label>

                <label>
                    Share your thoughts
                    <textarea placeholder="Share something with your pals"></textarea>
                </label>
                
                <input type="submit"/>
            </form>
        </section>
    </div>
  )
}

export default CreatePost