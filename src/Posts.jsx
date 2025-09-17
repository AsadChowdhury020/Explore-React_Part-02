import { use } from "react"
import App from "./App";
import Post from "./Post";

export default function Posts({fetchPosts}){
    const posts = use(fetchPosts) ;
    return (
        <div className="post_card">
            <h3>All Posts Are Here</h3>
            <h3>Total No of Posts : {posts.length}</h3>
            {
                posts.map(post => <Post key={post.id} post = {post} ></Post>)
            }
        </div>
    )
} 