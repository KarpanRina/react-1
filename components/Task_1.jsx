import { useState } from 'react';

const Add = () => {
    const [numbers, setNumbers] = useState([349, 13, 22, 868, 7]);

    const randomNum = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
    
    const addElement = () => {
        let result = [...numbers, randomNum(1, 1000)];
        setNumbers(result);
        console.log(result);
    }

    return (
        <>
            <button onClick={addElement}>Task_1</button>
            <ul>{numbers.map((el, idx) => (
                <li key={idx}>{el}</li>
            ))}</ul>
        </>
    )
    
}

export default Add