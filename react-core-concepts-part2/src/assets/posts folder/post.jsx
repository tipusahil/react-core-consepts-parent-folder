
import './post.css'
export default function Post( {post1} ) {


    console.log(post1)
 

    const { userId,id ,title ,body } = post1;

    return (
        <div className='style'>
            <h3>userid holo: {userId} </h3>
            <h3>title holo: {title} </h3>
            <h3>id holo: {id} </h3>
            <h3>body holo: {body} </h3>
        </div>
    )
}