import { useState } from "react"

const User = () => {
    let [count, setCount] = useState(0);
    return (
        <div className="user-card">
            <h1>Count is {count}</h1>
            <h2>Name: Aniket</h2>
            <h3>location: BLR</h3>
            <h4>Contact: @Aniket58</h4>
            <button onClick={() => {
                setCount(count + 1)
            }}>Update Count</button>
        </div>
    )
}

export default User
