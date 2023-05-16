import { action } from "@storybook/addon-actions";
import Accordion from "./Accordion";
import {useState} from "react";


export default {
    title: "Accordion",
    component: Accordion
}

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false}  onClick={onClickCallback} onChange={callback} items={[{title: 'Dimych', value: 1}, {title: "Valera", value: 2}, {title: "Artem", value: 3}, {title:"Viktor", value: 4}]}/>

export const ModeChange = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onClick={(id)=>alert(`User with id ${id}`)} onChange={()=>setValue(!value)} items={[{title: 'Dimych', value: 1}, {title: "Valera", value: 2}, {title: "Artem", value: 3}, {title:"Viktor", value: 4}]}/>
}