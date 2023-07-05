import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "UseMemoUseCallback"
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)
    let resultA = 1
    let resultB = 1
//юзмемо запоминает вызов функции если из него ничего не return, если return стоит то запоминает результат вычеслений
    resultA = useMemo(() => { //Мемо запоминает результат вычислений и его зависимость []
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((t, i) => <div key={i}>{t}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)  //Реакт.мемо запоминает результат компоненты и если ничего не изменилось в ней, то не вызывает
export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"])

    const newArray = useMemo(() => { //чтобы компонента не перерисовывалась из-за создания нового массива, а если результат так и будет 1 и тем же, то надо добавить юзМемо, что будет хранить эти вычисления
        const newArray = users.filter(t => t.toLowerCase().indexOf("a") > -1)
        return newArray
    }, [users])


    const addUser = () => {
        const newUsers = [...users, "Sveta " + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>Add User</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "HTML", "CSS"])


    const memoizedAddBook = useMemo(() => { //в юзМемо можно передать и результат вызова функции, но надо через колбэк
        return () => {
            const newUsers = [...books, "Angular " + new Date().getTime()]
            setBooks(newUsers)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => { //аналог юзМемо, но с проще синтаксисом
        const newUsers = [...books, "Angular " + new Date().getTime()]
        setBooks(newUsers)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
}

type BookSecretPropsType = {
    addBook: () => void
}
const BookSecret = (props: BookSecretPropsType) => {
    return <div>
        <button onClick={() => props.addBook()}>Add Book</button>
    </div>
}

const Book = React.memo(BookSecret)

