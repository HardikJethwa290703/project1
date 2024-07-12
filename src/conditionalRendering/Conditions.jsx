import React from 'react';

// If-Else
/*const Conditions = ({isLoggedIn}) => {
    if (isLoggedIn==true){
        return <Login/>
    }
    else{
        return <Register/>
    }
};

const Login = () => {
    return <p>Welcome to your dashboard</p>
};

const Register = () =>{
    return <p>Register yourself</p>    
};*/

// Ternary Operator
/*const Conditions  = ({isLoggedIn}) => {
    return (
        <div>
            {isLoggedIn ? <h1>Hello user</h1> : <h1>Register yourself</h1>}
        </div>        
    );    
}*/

// And(&&) Operator
const Conditions = ({isLoggedIn}) => {
    return (  
        <div>
            {isLoggedIn && <h1>Hello User</h1>}
        </div>  
    );
};
export default Conditions;