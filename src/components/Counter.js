import React, {useState, useEffect} from 'react'

export default function Counter() {
    const [count, setCount] = useState ( 0 )

    function cleanUpCallBack(){
        document.title = 'React App'
    }

    function callBack() {
        if(count !== 0) {
        document.title = `React App v1.${count}`
        }
        return cleanUpCallBack
    }
    useEffect(callBack, [count])
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => {setCount(count + 1)}}>+</button>
            <button onClick={() => {setCount(count - 1)}}>-</button>
        </div>
    )
}
