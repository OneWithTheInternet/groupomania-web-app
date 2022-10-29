import PostImage from "../atoms/PostImage";
import PostText from "../atoms/PostText";
import CommentsCounter from "../molecules/CommentsCounter";
import UserTag from "../molecules/UserTag";
import {Link} from 'react-router-dom';
import CreationDate from "../molecules/CreationDate";

//dummie data 
/* let data = [
    {
        id: 4,
        userId: "sampleUser4",
        userName: "",
        userAvatarUrl: "",
        imageUrl: "",
        imageAltText: "",
        excerpt: "",
        commentsList: [null],
        commentsCount: 0,
        usersLiked: [null],
        likesCount: 0,
        usersDisLiked: [null],
        dislikesCount: 0,
        yearReleased: "2017" / Date creted : ???
        creationTime: "0h"
    }
] */

function PostCard(props) {

    //Storing data prop in variable
    const data = props.data;

    //Using map() method to loop over data array and create each post from it
    let cards = data.map((post) => (
        //addding an article DOM element with envent handler
       <article className="postCard" key={ post.id }>
            <Link to='post/:id'>
                <UserTag userNameProp={ post.userName } />  
                <CreationDate creationDate = { post.creationDate } creationTime = { post.creationTime }/>
                {/* using conditionals to render either text of image according to data retrieved */}
                {post.excerpt ? <PostText excerptProp={ post.excerpt } /> : null}
                {post.imageUrl ? <PostImage imageUrlProp={ post.imageUrl } imageAltTextProp={ post.imageAltText }/> : null}
                <CommentsCounter likesCountProp={ post.likesCount } />
            </Link>
        </article>
    ));

    return (
        cards
    )
}

export default PostCard