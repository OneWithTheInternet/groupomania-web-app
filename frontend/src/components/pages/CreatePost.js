import React from 'react'
import Header from '../organisms/Header'

function CreatePost() {
  return (

    <div className='mainContainer'>

        <Header />

        <section className='createPost'>
            <div className='createPost__title'><h1>CreatePost</h1></div>
            <form className='createPost__form'>

                <label>
                    Upload an Image
                    <input type="file" name="img" accept="image/*"></input>                   
                </label>

                <label>
                    Share your thoughts
                    <input type={"text"} placeholder="Share something with your pals"/>
                </label>
                
                <input type="submit"/>
            </form>
        </section>
    </div>
  )
}

export default CreatePost