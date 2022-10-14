function UserName(props) {
    //Assigning variables to the values of props
   const { userNameProp } = props
    return <div className="userTag__userContainer__nameContainer">
        {/* accessing username from prop and printing in tag bellow */}
        <b><strong>{userNameProp}</strong></b>
    </div>
}

export default UserName