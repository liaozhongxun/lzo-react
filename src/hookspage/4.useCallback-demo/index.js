import React, { memo, useCallback, useState } from 'react'

const Callback = memo(() => {
    const [counter, setCounter] = useState(0);

    // 有记忆的，每次渲染都会返回同一个函数
    
    // 无意义
    // useCallback 为了解决每次渲染都会 定义一次countAdd函数的问题，此时useCallback返回的永远是同一个函数，但是里面的回调还是要每次定义
    const countAdd = useCallback(function () {
        setCounter(counter + 1)
    })

    return (
        <div>
            <div>count:{counter}</div>
            <button onClick={countAdd}>+1</button>
        </div>
    )
})

export default Callback