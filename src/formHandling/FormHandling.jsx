import React, {useState} from 'react';

const FormHandling = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    return (
        <div>
            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"                
                    onChange={(e)=>setName(e.target.value)}
                />            
            </div>
            {name}
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"                
                    onChange={(e)=>setEmail(e.target.value)}
                />            
            </div>
            {email}
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"                
                    onChange={(e)=>setPassword(e.target.value)}
                />            
            </div>
            {password}
        </div>
    )
}


export default FormHandling;