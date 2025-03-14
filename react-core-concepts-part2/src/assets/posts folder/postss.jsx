import Post from "./post";
import { useEffect, useState } from "react"

export default function  Postss() {


const [ posts , setposts ] = useState([]);

useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data  => setposts(data))
},[])


return (
    <div>
        <h3> posts: </h3>
        {posts.map( post=> <Post post1={post} ></Post> )}
    </div>
)
}