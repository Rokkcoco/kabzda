import React, {FC, useState, MouseEvent} from 'react';
import s from "./OnOff.module.css";
type OnOffType = {
    on: boolean
    onChange: (value:boolean)=>void
}

const OnOff:FC<OnOffType> = ({on,onChange}):JSX.Element => {

    const onStyle ={
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "greenyellow" : "white"
    }
    const offStyle ={
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: !on ? "mediumvioletred" : "white"
    }
    const indicatorStyle ={
        width:"10px",
        height:"10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: !on ? "mediumvioletred" : "greenyellow"
    }
    const buttonClickHandler = (event:MouseEvent<HTMLDivElement>) => {
        onChange(true)
    }

    const buttonTurnOffClickHandler = (event:MouseEvent<HTMLDivElement>) => {
       onChange(false)
    }
    //можно вызвать buttonClickHandler или просто вставить колбэк () => { setOn( on = true ) }, это идентично
    return (
        <div>
           <div onClick={buttonClickHandler} style={onStyle}>On</div>
           <div onClick={buttonTurnOffClickHandler} style={offStyle}>Off</div>
           <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;