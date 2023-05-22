import React, {MouseEvent, useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type AccordionPropsType = {
    titleValue: string
}



function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")
    // let [collapsed, setCollapsed] = useState<boolean>(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})
    // const callback = (result:boolean) => {
    //     setCollapsed(result)
    // }
    return (
            <div>
                {/*<AccordionTitle collapsed={collapsed} callback={callback} title={props.titleValue} />*/}
                <AccordionTitle title={props.titleValue} onClick={()=> { dispatch({type: TOGGLE_COLLAPSED}) }}/>
                { !state.collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    callback?: (result:boolean)=>void
    collapsed?: boolean
    onClick?: ()=>void
}

function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("UncontrolledAccordionTitle rendering")
    const onClickHandler = (event:MouseEvent<HTMLHeadingElement>) => {
        props.callback && props.callback(!props.collapsed)
    }
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("UncontrolledAccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion;