import React from "react";

type ItemType = {
    title:string
    value:any
}

type SelectPropsType = {
    value?:any
    onChange:(value:any)=>void
    items:ItemType[]
}

export function Select(props:SelectPropsType) {
    const selectedItem = props.items.find(t => t.value === props.value)
    return (
        <div>
            <h3>{selectedItem && selectedItem.title}</h3>
            {props.items.map(t => <div>{t.title}</div>)}
        </div>
    )
}
