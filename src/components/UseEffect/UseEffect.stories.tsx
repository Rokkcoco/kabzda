import {useEffect, useState} from "react";
import {clearInterval} from "timers";


export default {
    title: "useEffect demo"
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("SimpleExample")
    useEffect(() => {
        console.log("useEffect")
        document.title = counter.toString()
        //список сайд эффектов, ,ЮЗЭФЕКТ запускается после отрисовки контента!!!
        //api.getUsers().then()
        //setInterval
        //indexedDb
        //document.getElementId
        //document.title = "User"
    })

    useEffect(() => {
        console.log("render every time")
    })
    useEffect(() => {
        console.log("only first render(componentDidMount)")
    }, [])
    useEffect(() => {
        console.log("first render and if counter will change")
    }, [counter])


    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("SetTimeoutExample")

    useEffect(() => { //вызывает сетТаймаут при изменении counter

        const interval = setInterval(() => {
             setCounter(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])
    /*!!! Создаем сетинтервал с сеттером когда он каждый раз берет старое значение и прибавляет к нему новое
            Это кардинально отличается в данном случае от state + 1, когда произойдет замыкание и функция запомнит свое окружение
            Тогда каждый вызов будет state(1) + 1 будет давать 2*/

    return <>
        Hello, counter: {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("Component rendered with " + counter)

    useEffect(() => {
        console.log("Effect occurred :" + counter)

        return () => {
            console.log("RESET EFFECT :" + counter)
        }
    }, [counter])

    const increase = () => setCounter(counter + 1)
    //при каждов вызове каунтера , компонента будет создавать новую функуию и ее окружение будет актуальным
    return <>
        Hello, counter: {counter}
        <button onClick={increase}>X</button>
    </>
}
export const KeyTrackerExample = () => {
    const [text, setText] = useState("")

    console.log("Component rendered with " + text)

    useEffect(() => {
        const handler = (e:KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener("keypress", handler)

        return () => {
            window.removeEventListener("keypress", handler)
        }
    }, [text])
//Т.к. мы ставим зависимость text то функция пересоздается и ее лексическое окружение будет актуальным, по этому нам достаточно написать text + e.key
    //Но мы обязыаны поставить clean-up с removeEventListener, чтобы слушатели не создавалаись повторно
    //Мы так же можем не ставить зависимость на юзэффект [], но тогда необходимо будет писать state => state + e.key иначе будет замыкание
    //И фукнция запомнит свое окружение с пустой строкой и будет добавлять символ к пустой строке
    return <>
        Typed text: {text}
    </>
}
export const SetTimeoutExample = () => {
    const [text, setText] = useState("")

    console.log("Component rendered with " + text)

    useEffect(() => {
      const timeoutId =  setTimeout(() => {
            setText("3 seconds passed")
        }, 3000)

        return () => {
          clearTimeout(timeoutId)
        }
    }, [text])
//будем удалять эффект не дожидаясь результата при анмаунте компоненты
// так же useEffect работает асинхронно, а componentDidMount синхронно, и clean-up будет срабатывать при изменении зависимости
    return <>
       text: {text}
    </>
}