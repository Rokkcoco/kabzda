import React, {useState, MouseEvent} from "react";
import {Simulate} from "react-dom/test-utils";
import rateChange = Simulate.rateChange;


export function UncontrolledRating() {
    let [value, setValue] = useState<number>(0)
    const ratingCallback = (number:number) => {
        setValue(number)
    }

    return (
        <div>
            <Star id={1} ratingCallback={ratingCallback} selected={value > 0}/>
            <Star id={2} ratingCallback={ratingCallback} selected={value > 1}/>
            <Star id={3} ratingCallback={ratingCallback} selected={value > 2}/>
            <Star id={4} ratingCallback={ratingCallback} selected={value > 3}/>
            <Star id={5} ratingCallback={ratingCallback} selected={value > 4}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    ratingCallback: (e:number)=>void
    id:number
}

function Star(props: StarPropsType) {

    const onClickHandler = (event:MouseEvent<HTMLSpanElement>) => {
        props.ratingCallback(props.id)
    }
    return (
        <>
        {props.selected ? <span  onClick={onClickHandler}><b>star</b></span> : <span onClick={onClickHandler}>star</span>}
        </>
    )

}