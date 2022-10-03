function UserName(props) {
    //importing prop from parent component
    console.log(props)
    return <div className="userName">
        <b><strong>{props.userNameProp}</strong></b>
    </div>
}

export default UserName