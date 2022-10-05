function PostImage(props) {
    //Assigning variables to props (with disconstructed syntax). This is the same as "const imageUrlProp = props.imageUrlProp" and "const imageAltTextProp = props.imageAltText"
    const {imageUrlProp, imageAltTextProp} = props;
    //Returning an image tag using props parameters for attributes
    return <img src={ imageUrlProp } alt={ imageAltTextProp }/>
}

export default PostImage;