// import { useEffect } from "react"
import { useEffect, useState } from "react"
import Post1 from "./post"

export default function Posts() {


    // useState() hook
    const [allPosts, setallPosts] = useState([])// mt array dewa hoise vitore onk gulo psot/obj set hobe ejonno


    // useEffect or side effect hanlder or event handler add: 
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setallPosts(data))
    }, []) // MT ARRAY TA hocce one time dependency
    console.log(allPosts)
    // -----------------------------------------------------------

    const [count, setcount] = useState(0);
    function btn_handler() {
       
        setcount(count + 1);
    }
//  useEffect(() => console.log(count), count);
// -----------------------------------------------------------
  
    return (<div>
        <h3>all posts:  </h3>
        <h2>count: count: {count} </h2>
        <button onClick={btn_handler}>handle bro</button>

        {allPosts.slice(0, 4).map(post => <Post1 postOne={post} ></Post1>)}
    </div>
    )
}