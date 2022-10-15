//import { api } from "../../api.js";
import CreatePostSection from "../organisms/CreatePostSection.js";
import PostFeed from '../organisms/PostsFeed';

function Home(props) {
/*   const [posts, setPosts] = useState()
  useEffect(() => {
    api.posts.get().then(posts => setPosts(posts));
  }, [searchText]) */
  

  return (
    <div className='sectionsContainer'>
        <CreatePostSection />
        <PostFeed />
    </div>
  )
}

export default Home