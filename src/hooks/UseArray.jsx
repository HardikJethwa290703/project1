import React, { useState } from 'react';

const UseArray = () => {
    const [emp, setEmp] = useState({ name: '', salary: '' })
    const [employee, setEmployee] = useState([]);
    const displayData = () => {
        setEmployee([...employee, emp]);        
    }
    return (
        <div>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                    type="text"
                    class="form-control"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    onChange={(e) => setEmp({ ...emp, name: e.target.value })}
                />
            </div>
            <div class="mb-3">
                <label for="salary" class="form-label">Salary</label>
                <input
                    type="text"
                    class="form-control"
                    name="salary"
                    id="salary"
                    placeholder="Enter your name"
                    onChange={(e) => setEmp({ ...emp, salary: e.target.value })}
                />
            </div>
            <button onClick={displayData}>Submit</button>
            <div>
                {employee.map((display,id)=>(
                    <li key={id}>
                        Name : {display.name}, Salary: {display.salary}
                    </li>
                ))}    
            </div>            
        </div>
    )
}

export default UseArray;