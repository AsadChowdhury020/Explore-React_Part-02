export default function Comment({comment}){
    console.log(comment)
    return(
        <div className="post_card">
            <h3>Id :{comment.id} </h3>
            <p>Name : {comment.name} </p>
            <p>Email : {comment.email} </p>
            <p>Body : {comment.body} </p>
        </div>
    )
}