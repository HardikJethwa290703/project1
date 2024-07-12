import React from 'react';

// Using Destructuring
/*const Props = ({name,age}) => {
    return (
        <h1>Hello {name} your age is {age}</h1>
    )
}*/

// Using props object
const Props = (oop) => {
    return (
        <h1>Hello {oop.name} your age is {oop.age}</h1>
    )
}
export default Props;