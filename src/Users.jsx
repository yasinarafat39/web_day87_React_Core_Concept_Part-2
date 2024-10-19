import { useEffect, useState } from "react"
import User from "./User"

export default function Users(){
    
    const [users, setUsers] = useState([])

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    } , [])

    return (
        <div>
            <h3>Users: {users.length}</h3>
            {
                users.map((user) => <User user={user} key={user.id}></User>)
            }
        </div>
    )
}


/**
 * 1. declare a state to hold the data
 * 2. useEffect with callback function and dependency
 * 3. use fetch to load data
 * 4. set loaded data to state
 * 5. display data on the components
*/