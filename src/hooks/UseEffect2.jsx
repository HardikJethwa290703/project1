import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count is ${count}`;
    }, [count])

    return (
        <div>
            <p>Count is {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default UseEffect2
