import UserName from "../atoms/UserName";
import UserIcon from '../atoms/UserIcon';
import DeleteIcon from "../atoms/DeleteIcon";


function UserTag(props) {
    //Assigning variables to props
    const { userNameProp } = props;
    return <div className="userTag">
        <UserIcon />
        <UserName userNameProp={ userNameProp }/>
        <DeleteIcon />
    </div>
}

export default UserTag