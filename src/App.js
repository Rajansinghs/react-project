import React, { useState } from 'react';
import { useRef, useLayoutEffect } from "react";

const App = () => {
    const inputElementRef = useRef();

    let curTime = new Date().toLocaleTimeString();
    let dd = new Date().getDate();
    let mm = new Date().getMonth()+1;
    let yyyy = new Date().getFullYear();

    const [newTime,setCtime] = useState(curTime);

    const UpdateTime = () => {
        let newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    };

    useLayoutEffect(() => {
        inputElementRef.current.focus();
      });

    setInterval(UpdateTime,1000);

    return (
        <>
        <div className='second'>
        <div className='content'>
        <h1 className='date'>{dd}/{mm}/{yyyy}</h1>
        <h1 className='time'>{newTime}</h1>
        </div>
        <h2 className='input'>Basic details</h2>
        <input type="text" ref={inputElementRef} placeholder='Full Name'  className='name'/>
        <button className='submit'>Submit</button>
        </div>
        </>
    )
}

export default App;
