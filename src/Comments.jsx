import { use } from "react"
import Comment from "./Comment";

export default function Comments({commentsPromise}){
    const comments = use(commentsPromise) ;
    return(
        <div className="post_card">
        <h3>All Comments are here</h3>
        <h3>Total no. of Comments : {comments.length} </h3>
        {
            comments.map(comment => <Comment key = {comment.id} comment = {comment} ></Comment> )
        }
        </div>
    )
}