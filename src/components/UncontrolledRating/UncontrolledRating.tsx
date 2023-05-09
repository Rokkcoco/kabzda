import React, {MouseEvent, useState} from "react";


export function UncontrolledRating() {
    let [value, setValue] = useState<number>(0)
    const ratingCallback = (id: 1 | 2 | 3 | 4 | 5) => {
        setValue(id)
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
    ratingCallback: (e: 1 | 2 | 3 | 4 | 5)=>void
    id: 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType): JSX.Element {
    const {id, selected, ratingCallback} = props;

    const onClickHandler = (event: MouseEvent<HTMLSpanElement>) => {
        ratingCallback(id)
    }

    //добавить onBlur
    return (
        <span onClick={onClickHandler}>
            {selected ? <b>star</b> : <>star</>}
        </span>
    )

}