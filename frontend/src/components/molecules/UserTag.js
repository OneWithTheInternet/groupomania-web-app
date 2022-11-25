import UserName from "../atoms/UserName";
import UserImage from '../atoms/UserImage';
import DeleteIcon from "../atoms/DeleteIcon";


function UserTag(props) {
    //Assigning variables to props

    return <div className="userTag">
        <div className="userTag__userContainer">
            <UserImage />
            <UserName userName = { props.userName }/>
        </div>
        <DeleteIcon user_id = { props.user_id } post_id = { props.post_id } />
    </div>
}

export default UserTag