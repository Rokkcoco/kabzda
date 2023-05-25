import React, {useState} from "react";


export default {
    title: "React.memo demo"
}

function generateData() {
    console.log("generateData")
    return 328327372381
}
export const Exampl1 = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(generateData)
    //в юзСтейт можно передать функцию, тогда он будет хранить результат первого ее вызова

    const increment = (state: number) => state + 1

    return <>
    <button onClick={()=>setCounter(increment)}>+</button>
        {counter}
    </>
}
//в юзСтейт можно передать функцию и будет ее вызывать или составить колбэк в нем