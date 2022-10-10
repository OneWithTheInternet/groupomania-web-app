function TextField(props) {
    return <div className="textInputContainer">
        <input type="text" placeholder={props.value}></input>
    </div>
}

export default TextField