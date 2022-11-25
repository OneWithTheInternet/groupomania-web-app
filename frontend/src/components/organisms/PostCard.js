import PostImage from "../atoms/PostImage";
import PostText from "../atoms/PostText";
import CommentsCounter from "../molecules/CommentsCounter";
import UserTag from "../molecules/UserTag";
import {Link} from 'react-router-dom';
import CreationDate from "../atoms/CreationDate";

function PostCard(props) {

    //Using map() method to loop over data array and create each post from it
    let cards = props.data.map((post) => (
        //addding an article DOM element with envent handler
       <article className="postCard" key={ post.post_id }>

            <UserTag userName = { post["user.userName"] } user_id = {post.user_id} post_id = {post.post_id} />

            <Link to={'posts/' + post.post_id}>
                
                <CreationDate createdAt = { post.createdAt } />
                
                {post.bodyText ? <PostText bodyText={ post.bodyText } /> : null}
                
                {post.image_url ? <PostImage image_url={ post.image_url } image_altText={ post.image_altText }/> : null}
                
                <CommentsCounter post={post} />              
            </Link>
        </article>
    ));

    return (
        cards
    )
}

export default PostCard