import React, { useReducer } from 'react'


const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
            break;
        case 'decrement':
            return state - 1;
            break;
        case 'reset':
            return initialState;
            break;
        default:
            return state
    }
}
const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Count is {count}</p>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReducer
