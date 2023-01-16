import React, { memo, useEffect, useState } from 'react'

const SetTitleHook = memo(() => {
    const [counter, setCounter] = useState(0);

    // 函数组件中可以存在多个 useEffect
    // 可以在每个 useEffect 只做一件事情，后期可以独立抽取
    // react 按照定义的顺序依次执行
    useEffect(() => {
        console.log("修改标题")
        return () => { 
            // 清除机制，做一些取消定时器，销毁的操作
        }
    });

    useEffect(() => {
        console.log("监听事件")
        return () => { 
            // 清除机制，做一些取消定时器，销毁的操作
        }
    });

    return (
        <div>
            <div>connt:{counter}</div>
            <button onClick={e => setCounter(counter + 1)}>+1</button>
        </div>
    )
})

export default SetTitleHook