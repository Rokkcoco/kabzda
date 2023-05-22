import React, {useState, KeyboardEvent, useEffect} from "react";
import s from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(false)

    const selectedItem = props.items.find(t => t.value === props.value)
    const hoveredItem = props.items.find(t => t.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        break
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }

        }
        if (e.key === "Escape" || e.key === "Enter") {
            setActive(false)
        }
    }

    return (
        <>
            {/*<select>
                <option value="">Moscow</option>
                <option value="">Kiev</option>
                <option value="">Minsk</option>
            </select>*/}
            <div className={s.select + " "} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(t => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(t.value)
                            }}
                            className={s.item + " " + (hoveredItem === t ? s.selected : "")}
                            key={t.value}
                            onClick={() => onItemClick(t.value)}
                        >{t.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    )
}
