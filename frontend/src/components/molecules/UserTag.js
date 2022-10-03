import UserName from "../atoms/UserName";
import UserIcon from '../atoms/UserIcon';
import DeleteIcon from "../atoms/DeleteIcon";


function UserTag(props) {
    //importing prop from parent component
    console.log(props);
    return <div className="userTag">
        <UserIcon />
        <UserName userNameProp={ props.userNameProp }/>
        <DeleteIcon />
    </div>
}

export default UserTag