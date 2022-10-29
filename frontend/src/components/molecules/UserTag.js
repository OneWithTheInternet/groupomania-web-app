import UserName from "../atoms/UserName";
import UserImage from '../atoms/UserImage';
import DeleteIcon from "../atoms/DeleteIcon";


function UserTag(props) {
    //Assigning variables to props

    return <div className="userTag">
        <div className="userTag__userContainer">
            <UserImage />
            <UserName userName ={ props.userName }/>
        </div>
        <DeleteIcon />
    </div>
}

export default UserTag