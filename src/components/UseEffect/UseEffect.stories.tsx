import {useEffect, useState} from "react";


export default {
    title: "useEffect demo"
}

export const SimpleExample = () => {
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

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample")


    useEffect(()=>{ //вызывает сетТаймаут при изменении counter

       setInterval(()=>{
           setCounter(state => state + 1)
       },1000)

    },[])
/*!!! Создаем сетинтервал с сеттером когда он каждый раз берет старое значение и прибавляет к нему новое
        Это кардинально отличается в данном случае от state + 1, когда произойдет замыкание и функция запомнит свое окружение
        Тогда каждый вызов будет state(1) + 1 будет давать 2*/

    return <>
        Hello, {counter}
        <button onClick={()=>setCounter(counter + 1)}>+</button>
    </>
}
