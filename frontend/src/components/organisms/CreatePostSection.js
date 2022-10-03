import TextField from "../atoms/TextField"
import ImageIcon from "../atoms/ImageIcon"
import UserIcon from "../atoms/UserIcon"

function CreatePostSection() {
    return <section className="createPostSection">
        <UserIcon />
        <a href="#">
            <TextField />
            <ImageIcon />
        </a>
    </section>
}

export default CreatePostSection