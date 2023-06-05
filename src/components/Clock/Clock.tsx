import React, {useEffect, useState} from 'react';
import "./Clock.css"
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";


type ClockTypeProps = {
    mode: "digital" | "analog"
}


export const Clock = ({mode}: ClockTypeProps) => {
    const [date, setDate] = useState(new Date())


    useEffect(() => {
        const intervalID = setInterval(() => setDate(new Date()), 1000)
        return () => clearInterval(intervalID)
    }, [])

    let view

    switch (mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
            break
    }
//Т.к. нет результат для digital то проваливаемся в дефолт и там уже срабатывает
    return <>
        {view}
    </>
};

export type ClockViewPropsType = {
    date: Date
}
