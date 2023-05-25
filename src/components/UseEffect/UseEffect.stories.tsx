import {useEffect, useState} from "react";


export default {
    title: "useEffect demo"
}

export const Example1 = () => {
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample")
    useEffect(()=>{
        console.log("useEffect")
        document.title = counter.toString()
        //список сайд эффектов, ,ЮЗЭФЕКТ запускается после отрисовки контента!!!
        //api.getUsers().then()
        //setInterval
        //indexedDb
        //document.getElementId
        //document.title = "User"
    })

    useEffect(()=>{
        console.log("render every time")
    })
    useEffect(()=>{
        console.log("only first render(componentDidMount)")
    },[])
    useEffect(()=>{
        console.log("first render and if counter will change")
    },[counter])


    return <>
        Hello, {counter}
        <button onClick={()=>setCounter(counter + 1)}>+</button>
    </>
}

