import sampleImage from "../../assets/sample-image.jpeg";
import sampleImage2 from '../../assets/sample-image2.jpeg';
import sampleImage3 from '../../assets/sample-image3.jpeg';
import PostImage from "../atoms/PostImage";
import PostText from "../atoms/PostText";
import CommentsCounter from "../molecules/CommentsCounter";
import UserTag from "../molecules/UserTag";

//dummie data simulating api response
let allPosts = [
    {
        postId: 1,
        userID: "sampleUser",
        userName: "Momo",
        userAvatarUrl: "sampleAvatar",
        imageUrl: sampleImage,
        imageAltText: "placeholder for a post",
        text: "sample Text 1",
        commentsList: [1, 2, 3, 4, 5],
        commentsCount: 3,
        usersLiked: ["235", "566"],
        likesCount: 2,
        usersDisLiked: [2],
        dislikesCount: 1,
        yearReleased: "1990"
    },
    {
        postId: 2,
        userID: "sampleUser2",
        userName: "J. Steban",
        userAvatarUrl: "sampleAvatar2",
        imageUrl: sampleImage2,
        imageAltText: "placeholder for a post2",
        text: "sample Text 2. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        commentsList: [6, 7, 8],
        commentsCount: 3,
        usersLiked: [null],
        likesCount: 0,
        usersDisLiked: ["123", "467"],
        dislikesCount: 2,
        yearReleased: "2020"
    },
    {
        postId: 3,
        userID: "sampleUser3",
        userName: "Efrain A.",
        userAvatarUrl: "sampleAvatar3",
        imageUrl: null,
        imageAltText: null,
        text: "sample Text 3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        commentsList: [null],
        commentsCount: 0,
        usersLiked: ["224"],
        likesCount: 1,
        usersDisLiked: [null],
        dislikesCount: 0,
        yearReleased: "1998"
    },
    {
        postId: 4,
        userID: "sampleUser4",
        userName: "Michele S.",
        userAvatarUrl: "sampleAvatar4",
        imageUrl: sampleImage3,
        imageAltText: "placeholder for a post4",
        text: null,
        commentsList: [null],
        commentsCount: 0,
        usersLiked: [null],
        likesCount: 0,
        usersDisLiked: [null],
        dislikesCount: 0,
        yearReleased: "2017"
    }
]


//dummie React event for practice
function testFunction(event) {
    console.log('The user is', event)
}

//JSX element
function PostCard() {
    //Using map() method to loop over data array and create each post from it
    let allPostsCards = allPosts.map((post) => (
        //addding an article DOM element with envent handler
       <article className="postCard" key={ post.postId } onClick={ testFunction }>

            <UserTag userNameProp={ post.userName } />  
            {/* using conditionals to render either text of image according to data retrieved */}
            {post.imageUrl ? <PostImage imageUrlProp={ post.imageUrl } imageAltTextProp={ post.imageAltText }/> : null}
            {post.text ? <PostText textProp={ post.text } /> : null}
            <CommentsCounter likesCountProp={ post.likesCount } />
        </article>
    ));

    return (
        allPostsCards
    )
}

export default PostCard