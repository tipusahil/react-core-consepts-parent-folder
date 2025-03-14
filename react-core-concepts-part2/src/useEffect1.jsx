import { useEffect, useState } from "react"

export default function UseEffect1() {

    const [users ,setusers] = useState([]);

useEffect( () => {
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => setusers(data))
.catch(error => console.log(error))
},[])

    return (
        <div>
        <h1>Users ase holo: {users.length} </h1>
        {/* <h1>{users}</h1> */}
        </div>
    )
}