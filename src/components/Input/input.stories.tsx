import {ChangeEvent, useRef, useState} from "react";


export default {
    title: "input"
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const onChangeFunc = (event: ChangeEvent<HTMLInputElement>) => {
            const actualValue = event.currentTarget.value
            setValue(actualValue)
    }

    return <><input value={value} onChange={onChangeFunc}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonClick = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () =>{
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/> <button onClick={save}>save</button> - {value}</>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>("")
    const onChangeInput = (e:ChangeEvent<HTMLInputElement>) =>{
        setParentValue(e.currentTarget.value)
    }
return <input value={parentValue} onChange={onChangeInput}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true)
    const onChangeInput = (e:ChangeEvent<HTMLInputElement>) =>{
        setParentValue(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={parentValue} onChange={onChangeInput}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChangeSelect = (e:ChangeEvent<HTMLSelectElement>) =>{
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeSelect}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"3"}>Kiev</option>
    </select>
}

export const ControlledInputWithFixedValue = () => <input value={"it-incubator"}/>