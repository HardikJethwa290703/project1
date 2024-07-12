import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MultiPost = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/")
            .then((res) => setData(res.data))
            .catch((error) => console.log(error));
    });

    return (
        <div>
            {data.map((show, id) => (
                <ul>
                    <li>
                        Title : {show.title}
                    </li>
                    <li>
                        Body : {show.body}
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default MultiPost
