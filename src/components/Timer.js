import React, { useEffect, useState } from 'react'

function Timer({setStop,questionNumber}) {
    const [timer,setTimer]= useState(30);
    useEffect(()=>{
        if (timer === 0 ) return setStop(true);
        const interval = setInterval(()=>{
            setTimer(prev=>prev-1);
        },1000);

    },[setStop,timer])

    useEffect(()=>{
setTimer(30);
    },[questionNumber])
    return (
timer
    )
}

export default Timer
