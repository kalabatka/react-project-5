import React, { useState } from "react";
import "./MyButton.css";

const MyButton = () => {

    const [back, setBack] = useState (true);
    const [color, setColor] = useState (true);
    const [visible, setVisible] = useState (true);

    const changeBlock = () => {

        setVisible(!visible);
    }


const change = () => {
        setBack(!back);
    }

    const changeColor = () => {
        setColor(!color);
    }

    const newBg = back ? "" : "new_bg";
    const newColor = color ? "" : "new_color";
    const togleBlock = visible ? "" : "hidden";

return (
<div className="wrapper">
    <div className={`myButton ${newBg} ${newColor} ${togleBlock}`}>
<h1>MyButton</h1>
    </div>
    <button onClick={change}>Background</button>
    <button onClick={changeColor}>Color</button>
    <button onClick={changeBlock}>Show block</button>
</div> 

);


};

export default MyButton;