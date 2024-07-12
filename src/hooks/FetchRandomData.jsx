import React, { useEffect, useState } from 'react'

const FetchData = async () => {
    const response = await fetch("https://randomuser.me/api/", {
        method: 'GET'
    })
    return await response.json();
}


const FetchRandomData = () => {
    const [data,setData] = useState('');

    useEffect(() => {
        FetchData().then((res) => setData(res.results[0])).catch((error) => console.log(error));
    },[]);

    const refreshUser = () => {
        FetchData().then((res) => setData(res.results[0])).catch((error) => console.log(error));
    }
    return (
        <div>
            {data ? (
                <div>
                    <h2>Name: {data.name.first}</h2>
                    <p>Location: {data.location.city}</p>
                    <p>Phone: {data.phone}</p>
                </div>
            )        
            : "Loading"}   
            <button onClick={refreshUser}>Refresh User</button>         
        </div>
    )
}

export default FetchRandomData;
