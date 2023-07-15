import {useSelector} from "react-redux";
import { selectAllPosts } from "./postsSlice";



const PostsList = () => {
    const posts = useSelector(selectAllPosts)
  
    const renderPost = posts.map((post) => (
        <article className="card">
            <h2>{post.title}</h2>
            <h4>{post.content}</h4>
        </article>
    ))

  return (
    <div className="">{renderPost}</div>
  )
}

export default PostsList