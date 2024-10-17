import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={handleCount}>increase +</button>
            <button onClick={handleDecrease}>decrease -</button>
        </div>
    )
}