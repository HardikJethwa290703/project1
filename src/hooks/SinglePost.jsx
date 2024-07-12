import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SinglePost = () => {
    const [data, setData] = useState({});
    const [id,setId] = useState(0);
    const [buttonClicked,setButtonClicked] = useState(0);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClicked}`)
            .then((res) => setData(res.data))
            .catch((error) => console.log(error));
    },[buttonClicked])

    const handleData = () => {
        setButtonClicked(id);
    }
    return (
        <div>
            Id: <input type="text" onChange={(e)=>setId(e.target.value)}/>
            <button onClick={handleData}>Submit</button>
            <div>                
                {data.title} <br/>
                {data.body}          
            </div>
        </div>
    )
}

export default SinglePost
