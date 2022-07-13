import React, { useState } from 'react';

const App = () => {
    const [msg, setMsg] = useState("");
    const handleClick = async () => {
        const data = await fetch("/api/ma-seance-cine");
        const json = await data.json();
        const msg = json.msg;

        setMsg(msg);
    };

    return (
        <div>
            <button onClick={handleClick}>Dis bonjour</button>
            <p>{msg}</p>
        </div>
    );
};

export default App;
