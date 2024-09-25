import React, { useState } from "react";
import "./MyButton.css";

const MyButton = () => {

    const [back, setBack] = useState(true);
    const [clickCount, setClickCount] = useState(0);
    const changeBg = () => {
    setClickCount(clickCount + 1);
    if (clickCount % 2 === 1) { 
    setBack(!back);
    }
    }


    const newBackground = back ? "" : "new_background";

return (
    <div>
    <button onClick={changeBg} className={`myButton ${newBackground}`}>Background</button>
</div>

);
};

export default MyButton;