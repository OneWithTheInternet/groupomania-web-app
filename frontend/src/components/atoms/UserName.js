function UserName(props) {
    //Assigning variables to the values of props
   const { userNameProp } = props
    return <div className="userName">
        {/* accessing username from prop and printing in tag bellow */}
        <b><strong>{userNameProp}</strong></b>
    </div>
}

export default UserName