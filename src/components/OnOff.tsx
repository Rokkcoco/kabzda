import React from 'react';
import s from "./OnOff.module.css";

type OnOffType = {
    value: boolean
}
const OnOff = (props:OnOffType) => {
    return (
        <div>
            <button className={props.value ? s.greenActive : s.passive}>On</button>
            <button className={!props.value ? s.redActive : s.passive}>Off</button>
        </div>
    );
};

export default OnOff;