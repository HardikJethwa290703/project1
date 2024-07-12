import React, {useState} from 'react';

const UseStates = () => {
    const [emp,setEmp] = useState({name : '', salary : ''});
    return (
        <div>
            <form action="">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input
                        type="text"
                        class="form-control"
                        name="name"
                        id="name"                        
                        placeholder="Enter your name"
                        onInput={(e)=>setEmp({...emp,name : e.target.value})}
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
                        onInput={(e)=>setEmp({...emp,salary : e.target.value})}
                    />                    
                </div>
                {emp.name}<br/>
                {emp.salary}
            </form>
        </div>
    )
}

export default UseStates;