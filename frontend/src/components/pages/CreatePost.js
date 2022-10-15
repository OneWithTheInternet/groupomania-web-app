import TextArea from "../atoms/TextArea";

function CreatePost() {
  
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
                    <TextArea placeholder='Write here...'/>
                </label>
                
                <input type="submit"/>
            </form>
        </section>
    </div>
  )
}

export default CreatePost