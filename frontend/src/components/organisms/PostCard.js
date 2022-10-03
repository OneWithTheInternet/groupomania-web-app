import sampleImage from "../../assets/sample-image.jpeg"
import PostText from "../atoms/PostText";
import CommentsCounter from "../molecules/CommentsCounter"
import UserTag from "../molecules/UserTag"

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
        imageUrl: sampleImage,
        imageAltText: "placeholder for a post2",
        text: "sample Text 2",
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
        text: "sample Text 3",
        commentsList: [null],
        commentsCount: 0,
        usersLiked: [null],
        likesCount: 0,
        usersDisLiked: [null],
        dislikesCount: 0,
        yearReleased: "1998"
    },
    {
        postId: 4,
        userID: "sampleUser4",
        userName: "Michele S.",
        userAvatarUrl: "sampleAvatar4",
        imageUrl: sampleImage,
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


//JSX element
function PostCard() {
    //Using map() method to loop over data array and create each post from it
    let allPostsCards = allPosts.map((post) => (
        
       <article className="postCard" key={ post.postId }>
        
            <UserTag userNameProp={ post.userName } />  
            {/* using conditionals to render either text of image according to data retrieved */}
            {post.imageUrl ? <img src={ post.imageUrl } alt={ post.imageAltText }/> : null}
            {post.text ? <PostText /> : null}
            <CommentsCounter />
        </article>
    ));

    return (
        allPostsCards
    )
}

export default PostCard