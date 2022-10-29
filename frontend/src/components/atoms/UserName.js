function UserName(props) {
    //Assigning variables to the values of props

    return <div className="userTag__userContainer__nameContainer">
        {/* accessing username from prop and printing in tag bellow */}
        <b><strong>{ props.userName }</strong></b>
    </div>
}

export default UserName