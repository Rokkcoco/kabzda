import React from "react";
import s from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value:any)=>void
    items: ItemType[]
}

export function Select(props:SelectPropsType) {
    const selectedItem = props.items.find(t => t.value === props.value)
    return (
        <>
        <select>
            <option value="">Minsk</option>
            <option value="">Moscow</option>
            <option value="">Kiev</option>
        </select>
        <div className={s.select + " " + s.active}>

            <h3>{selectedItem && selectedItem.title}</h3>
            <div className={s.items}>
            {props.items.map(t => <div key={t.value}>{t.title}</div>)}
            </div>
            </div>
        </>
    )
}
