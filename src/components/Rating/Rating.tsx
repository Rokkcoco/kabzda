import React, {MouseEvent} from "react";
import {RatingValueType} from "../../App";

type RatingProps = {
    ratingValue: RatingValueType
    setRatingValue: (value:RatingValueType) => void
}
export function Rating(props: RatingProps) {
    console.log("UncontrolledRating rendering")
        return (
            <div>
                <Star selected={props.ratingValue > 0} setRatingValue={props.setRatingValue} ratingValue={1}/>
                <Star selected={props.ratingValue > 1} setRatingValue={props.setRatingValue} ratingValue={2}/>
                <Star selected={props.ratingValue > 2} setRatingValue={props.setRatingValue} ratingValue={3}/>
                <Star selected={props.ratingValue > 3} setRatingValue={props.setRatingValue} ratingValue={4}/>
                <Star selected={props.ratingValue > 4} setRatingValue={props.setRatingValue} ratingValue={5}/>
            </div>
        )

}

type StarPropsType = {
    selected: boolean
    ratingValue: RatingValueType
    setRatingValue: (value:RatingValueType)=>void
}

function Star(props:StarPropsType) {
    console.log("UncontrolledRating rendering")

    const onClickHandler = (event:MouseEvent<HTMLSpanElement>) => {
        props.setRatingValue(props.ratingValue)
    }
  return <span onClick={onClickHandler}>
     { props.selected ? <b>star</b> : "star"}
    </span>

}