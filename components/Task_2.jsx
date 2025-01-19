import { useState } from 'react';

const Change = () => {
    const [number, setNumbers] = useState(0);

    const randomNum = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
    
    const showElement = () => {
        setNumbers(randomNum(1, 1000));
    }

    return (
        <>
            <button onClick={showElement}>Task_2</button>
            <h3>{number}</h3>
        </>
    )
    
}

export default Change