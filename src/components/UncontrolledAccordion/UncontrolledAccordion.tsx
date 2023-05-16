import React, {useState, MouseEvent} from "react";

type AccordionPropsType = {
    titleValue: string
}
type AccordionTitlePropsType = {
    title: string
    callback: (result:boolean)=>void
    collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")
    let [collapsed, setCollapsed] = useState<boolean>(false)
    const callback = (result:boolean) => {
        setCollapsed(result)
    }
    return (
            <div>
                <AccordionTitle collapsed={collapsed} callback={callback} title={props.titleValue} />
                { !collapsed && <AccordionBody/>}
            </div>
        )
}



function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    const onClickHandler = (event:MouseEvent<HTMLHeadingElement>) => {
    props.callback(!props.collapsed)
    }
    return (
        <h3 onClick={onClickHandler}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion;