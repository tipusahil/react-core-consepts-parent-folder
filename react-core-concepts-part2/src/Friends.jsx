
/* 
1. state to hold data
2. use effect with dependency array
3. use fetch to load data
4. set loaded data to the state
5. display data on the component
*/


import "./Friends.css"
import { useEffect, useState } from "react"

export default function Friends() {

    const [friends, setfriends] = useState([])// fetch korte gele evabe mt array vitore  deewa lage.& object set kortee caile tkn {} mt curly bracket dite hboe.


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setfriends(data))
            .catch(error => console.log(error))
    }, [])



    // ei maping function ta caile niser return block e div er vitore ({}) curly bracket eer vitore kora jabe.  (Friends2.jsx) e ovabe okane kora hoise. 
    const friendsName = friends.map((friend1) => {
        const name = friend1.name;
        console.log(friend1.name)

        return (
            <div>
                <h3>name: {name}</h3>
            </div>
        )
    })


    return (
        <div className="fri_style">
            <h2>friends gulo: {friends.length}  </h2>
            <h5>friends gulor name holo::: {friendsName}  </h5>

        </div>
    )
}