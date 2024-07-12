import React, {useState} from 'react';

/*const UseState = () => {
    const [worldcup,setWorldCup] = useState("America");
    return (        
        <div>
            <p>{worldcup}</p>
            <button onClick={() => setWorldCup("India")} className="btn btn-primary">See WorldCup Winner</button>
        </div>
    );
};*/

const UseState = () => {
    const [count,setCount] = useState(0);
    return (
        <div>
            <p>Number is : {count}</p>
            <p>{count%2 == 0 ? "Even Number" : "Odd Number"}</p>
            <button onClick={() => setCount(count+1)} className="btn btn-info">Increment</button>
        </div>
    );
};

export default UseState;