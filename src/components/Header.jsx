import React, { useState } from "react";

function Header() {
    setInterval(updateTime, 1000)
    const now = new Date().toLocaleTimeString();
    const [time, setTime] = useState(now);

    function updateTime() {
        const newTime = new Date().toLocaleTimeString()
        setTime(newTime)
    }

    return (
        <header>
            <h1>Notes Keeper {time}</h1>
        </header>
    )
}

export default Header;