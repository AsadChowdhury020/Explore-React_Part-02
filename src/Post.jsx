export default function Post({post}){
    const {id, title, body} = post ;
    return (
        <div className="post_card">
            <h3>Id : {id} </h3>
            <p>Title : {title} </p>
            <p>Body : {body} </p>
        </div>
    )
}