/* 
1. state to hold data
2. use effect with dependency array
3. use fetch to load data
4. set loaded data to the state
5. display data on the component
*/

import Friend from "./friend"
import "./Friends.css"


import { useEffect, useState } from "react"
export default function Friends2( ){


const [friends_2 , setfriends_2] =useState([])// ([]) array of obj sle evabe mt array dite hbe.


//  ----2.... useEffect diye api theke data laod -----------
useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    //  ----3..... data ta useState er variable er value hisebe (setfriends_2(data)) korta hbe -----------
    .then(data => setfriends_2(data))
},[])


    return (
        <div className="fri_style_2">

            <h3>name: {friends_2.length} </h3>

{/* --------------4...--useState eer variable (friends_2) ta jei newdata set kora hoise seta jeheto array og obj so sei variable name dhore map calano hoise ,map calai prottekta obj k access kore seta arekta compontent (Friend) k call kore sekane patano hoise,  & sei obj ta just ekta ekta obj show koranor jonno----- */}
            {
            friends_2.map(friend => <Friend friend_1={friend}></Friend>) 
            }
 

        </div>
    )
}