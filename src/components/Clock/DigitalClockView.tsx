import React from "react";
import {ClockViewPropsType} from "./Clock";
const twoDigitsInClockTime = (number: number) => number < 10 ? "0" + number : number

export const DigitalClockView = ({date}: ClockViewPropsType) => {
    return <>
        <span>{twoDigitsInClockTime(date.getHours())}</span>
        :
        <span>{twoDigitsInClockTime(date.getMinutes())}</span>
        :
        <span>{twoDigitsInClockTime(date.getSeconds())}</span>
    </>
}