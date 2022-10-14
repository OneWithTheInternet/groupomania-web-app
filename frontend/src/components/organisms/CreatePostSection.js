import TextField from "../atoms/TextField"
import ImageIcon from "../atoms/ImageIcon"
import UserImage from "../atoms/UserImage"
import {Link} from 'react-router-dom'


function CreatePostSection() {

    return <section >
        <h1>Create a Post</h1>
        <div className="createPostSection">
            <Link to="/createpost">
                <UserImage />
                <TextField value="Write your text here..." />
                <ImageIcon />
            </Link>
        </div>
    </section>
}

export default CreatePostSection