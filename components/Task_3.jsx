import { useState } from 'react';

const Color = () => {
    const [colors, setColors] = useState();

    const randomNum = (min, max) => {
        return Math.floor(Math.random()
        * (max - min + 1)) + min;
    };

    const changeColor = () => {
        setColors({color: `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`})
    }

    return (
        <>
        <button onClick={changeColor}>Task_2</button>
        <p style={colors}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim purus id sem tempus, ac sodales lorem rhoncus. In sit amet ultrices nunc, sit amet malesuada ipsum.</p>
        </>
    )
}

export default Color;