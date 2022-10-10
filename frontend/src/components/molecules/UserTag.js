import UserName from "../atoms/UserName";
import UserImage from '../atoms/UserImage';
import DeleteIcon from "../atoms/DeleteIcon";


function UserTag(props) {
    //Assigning variables to props
    const { userNameProp } = props;
    return <div className="userTag">
        <UserImage />
        <UserName userNameProp={ userNameProp }/>
        <DeleteIcon />
    </div>
}

export default UserTag