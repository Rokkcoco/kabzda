import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    console.log("App rendering")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
    <div className={"App"}>
        {/*<PageTitle title={"This is APP component"} />
        <PageTitle title={"My friends"} />
        Article 1
        <UncontrolledRating value={3} />
        <Accordion titleValue={"Menu"} collapsed={true}/>
        <Accordion titleValue={"Users"} collapsed={false}/>
        Article 2
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>*/}
        <Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>
        <OnOff/>
        <UncontrolledAccordion titleValue={"Menu"}/>
        <UncontrolledAccordion titleValue={"Users"}/>
        <UncontrolledRating/>
    </div>
  );
}

type PagePropsType = {
    title: string
}

function PageTitle(props:PagePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
