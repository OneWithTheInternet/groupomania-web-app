import TextField from "../atoms/TextField"
import ImageIcon from "../atoms/ImageIcon"
import UserImage from "../atoms/UserImage"

function CreatePostSection() {
    return <section>
        <h1>Create a Post</h1>
        <div className="createPostSection">
            <UserImage />
            <TextField value="Write your text here..." />
            <ImageIcon />
        </div>
    </section>
}

export default CreatePostSection