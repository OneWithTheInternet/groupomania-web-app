function PostText(props) {
    //Assinging variables to props' value
    const { textProp } = props;
    return <div className="postText">
        <b>{ textProp }</b>
    </div>
}

export default PostText