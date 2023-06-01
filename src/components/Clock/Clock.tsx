import React, {FC, useEffect, useState} from 'react';
import "./Clock.css"



type ClockType = {}

const twoDigitsInClockTime = (number: number) => number < 10 ? "0" + number : number

export const Clock: FC<ClockType> = () => {
    const [date, setDate] = useState(new Date())
    const [digit, setDigit] = useState(true)


    useEffect(() => {
        const intervalID = setInterval(() => setDate(new Date()), 1000)
        return () => clearInterval(intervalID)
    }, [])

    return <>
        <button onClick={()=>setDigit(!digit)}>Convert</button>
        {digit ? <div>
            <span>{twoDigitsInClockTime(date.getHours())}</span>
            :
            <span>{twoDigitsInClockTime(date.getMinutes())}</span>
            :
            <span>{twoDigitsInClockTime(date.getSeconds())}</span>
        </div>
        : <div className="clock">
            <div
                className="hour_hand"
                style={{
                    transform: `rotateZ(${date.getHours() * 30}deg)`
                }}
            />
            <div
                className="min_hand"
                style={{
                    transform: `rotateZ(${date.getMinutes() * 6}deg)`
                }}
            />
            <div
                className="sec_hand"
                style={{
                    transform: `rotateZ(${date.getSeconds() * 6}deg)`
                }}
            />
            <span className="twelve">12</span>
            <span className="one">1</span>
            <span className="two">2</span>
            <span className="three">3</span>
            <span className="four">4</span>
            <span className="five">5</span>
            <span className="six">6</span>
            <span className="seven">7</span>
            <span className="eight">8</span>
            <span className="nine">9</span>
            <span className="ten">10</span>
            <span className="eleven">11</span>
        </div>}
    </>
};

